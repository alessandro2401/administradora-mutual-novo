import os
import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart
from datetime import datetime

from flask import Flask, request, jsonify
from flask_sqlalchemy import SQLAlchemy
from werkzeug.security import generate_password_hash, check_password_hash
from dotenv import load_dotenv

# Carregar variáveis de ambiente
load_dotenv()

app = Flask(__name__)

# Configuração do Banco de Dados SQLite
# Usar banco de dados em memória para evitar problemas de permissão de escrita no Vercel
# ATENÇÃO: Isso significa que os dados serão perdidos a cada invocação da função.
# Para produção, use um banco de dados externo (PostgreSQL, MongoDB, etc.).
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///:memory:'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
db = SQLAlchemy(app)

# Configuração de E-mail (usando Gmail como exemplo)
# O ideal seria usar um serviço de e-mail dedicado (SendGrid, Mailgun, etc.)
# Para o protótipo, vamos usar variáveis de ambiente
MAIL_USERNAME = os.getenv('MAIL_USERNAME', 'operadora.mutualista.dev@gmail.com')
MAIL_PASSWORD = os.getenv('MAIL_PASSWORD', 'sua_senha_aqui') # Substituir pela senha real ou App Password
MAIL_SERVER = os.getenv('MAIL_SERVER', 'smtp.gmail.com')
MAIL_PORT = int(os.getenv('MAIL_PORT', 465))
ADMIN_EMAIL = os.getenv('ADMIN_EMAIL', 'operadora.mutualista@gmail.com') # E-mail para notificação

# Modelo do Banco de Dados
class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100), nullable=False)
    email = db.Column(db.String(100), unique=True, nullable=False)
    password_hash = db.Column(db.String(200), nullable=False)
    is_authorized = db.Column(db.Boolean, default=False)
    registration_date = db.Column(db.DateTime, default=datetime.utcnow)

    def __repr__(self):
        return f'<User {self.email}>'

# Função para enviar e-mail de notificação
def send_notification_email(user_name, user_email):
    if MAIL_PASSWORD == 'sua_senha_aqui':
        print(f"AVISO: E-mail de notificação não enviado. Senha do MAIL_PASSWORD não configurada. Usuário: {user_name}, E-mail: {user_email}")
        return

    msg = MIMEMultipart()
    msg['From'] = MAIL_USERNAME
    msg['To'] = ADMIN_EMAIL
    msg['Subject'] = 'Nova Solicitação de Cadastro - Administradora Mutual'

    body = f"""
    Uma nova solicitação de cadastro foi recebida para o site www.administradoramutual.com.br.

    Detalhes do Usuário:
    Nome: {user_name}
    E-mail: {user_email}
    Data/Hora: {datetime.now().strftime('%d/%m/%Y %H:%M:%S')}

    Acesse o painel de administração para autorizar o acesso deste usuário.
    """
    msg.attach(MIMEText(body, 'plain'))

    try:
        # Usar SMTP_SSL para a porta 465
        server = smtplib.SMTP_SSL(MAIL_SERVER, MAIL_PORT)
        server.login(MAIL_USERNAME, MAIL_PASSWORD)
        server.sendmail(MAIL_USERNAME, ADMIN_EMAIL, msg.as_string())
        server.quit()
        print(f"E-mail de notificação enviado para {ADMIN_EMAIL}.")
    except Exception as e:
        print(f"Erro ao enviar e-mail de notificação: {e}")

# Rota de Conteúdo Restrito

@app.route('/api/admin/authorize', methods=['POST'])
def authorize_user():
    data = request.get_json()
    email = data.get('email')
    
    if not email:
        return jsonify({'message': 'Email é obrigatório'}), 400

    user = User.query.filter_by(email=email).first()
    
    if not user:
        return jsonify({'message': 'Usuário não encontrado'}), 404

    user.is_authorized = True
    db.session.commit()
    
    return jsonify({'message': f'Usuário {email} autorizado com sucesso!'}), 200
@app.route('/api/restricted', methods=['GET'])
def restricted():
    # Simples verificação de "token" (apenas para protótipo)
    token = request.headers.get('Authorization')
    if token == 'Bearer valid_token':
        return jsonify({'message': 'Conteúdo Restrito: Bem-vindo à Área do Associado!'}), 200
    return jsonify({'message': 'Acesso negado. Token inválido ou ausente.'}), 401

# Rota de Registro de Usuário
@app.route('/api/register', methods=['POST'])
def register():
    data = request.get_json()
    name = data.get('name')
    email = data.get('email')
    password = data.get('password')
    
    if not all([name, email, password]):
        return jsonify({'message': 'Todos os campos são obrigatórios: nome, email e senha.'}), 400

    if User.query.filter_by(email=email).first():
        return jsonify({'message': 'Este e-mail já está cadastrado.'}), 409

    hashed_password = generate_password_hash(password)
    
    new_user = User(
        name=name,
        email=email,
        password_hash=hashed_password,
        is_authorized=False # O usuário deve aguardar a autorização
    )
    
    db.session.add(new_user)
    db.session.commit()
    
    # Enviar notificação para o administrador
    # send_notification_email(name, email) # Desativado - Falha de conexão SMTP no Vercel. Usar API de terceiros.

    return jsonify({
        'message': 'Cadastro realizado com sucesso. Seu acesso será liberado após a nossa autorização.',
        'status': 'pending_authorization'
    }), 201

# Rota de Login (apenas para demonstração da checagem de autorização)
@app.route('/api/login', methods=['POST'])
def login():
    data = request.get_json()
    email = data.get('email')
    password = data.get('password')

    user = User.query.filter_by(email=email).first()

    if not user or not check_password_hash(user.password_hash, password):
        return jsonify({'message': 'E-mail ou senha inválidos.'}), 401

    if not user.is_authorized:
        return jsonify({'message': 'Seu cadastro ainda não foi autorizado. Por favor, aguarde.'}), 403

    return jsonify({'message': 'Login bem-sucedido!', 'user_name': user.name, 'token': 'Bearer valid_token'}), 200




# Inicialização do Banco de Dados: Garantir que as tabelas sejam criadas no cold start
with app.app_context():
    try:
        db.create_all()
    except Exception as e:
        # Ignorar erro se a tabela já existe (comum em serverless)
        print(f"Erro ao criar tabelas, provavelmente já existem: {e}")

if __name__ == '__main__':
    app.run(debug=True)

