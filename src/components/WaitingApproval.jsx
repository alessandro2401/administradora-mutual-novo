import { useAuth } from '../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';

const WaitingApproval = () => {
  const { user, signOut } = useAuth();
  const navigate = useNavigate();

  const handleSignOut = async () => {
    await signOut();
    navigate('/');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-yellow-50 to-orange-50">
      <div className="max-w-2xl w-full bg-white rounded-lg shadow-xl p-8">
        <div className="text-center">
          {/* Ícone de Relógio */}
          <div className="mx-auto w-20 h-20 bg-yellow-100 rounded-full flex items-center justify-center mb-6">
            <svg className="w-10 h-10 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>

          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            Aguardando Aprovação
          </h1>

          <p className="text-lg text-gray-600 mb-6">
            Sua solicitação de acesso foi registrada com sucesso!
          </p>

          {/* Informações do Usuário */}
          {user && (
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-6">
              <div className="flex items-center justify-center gap-4 mb-4">
                {user.photoURL && (
                  <img 
                    src={user.photoURL} 
                    alt={user.displayName} 
                    className="w-16 h-16 rounded-full border-2 border-blue-300"
                  />
                )}
                <div className="text-left">
                  <p className="font-semibold text-gray-900">{user.displayName}</p>
                  <p className="text-sm text-gray-600">{user.email}</p>
                </div>
              </div>
              <div className="text-sm text-gray-700">
                <p className="font-medium mb-2">Status: <span className="text-yellow-600">Pendente</span></p>
                <p>Solicitação enviada em: {new Date().toLocaleDateString('pt-BR', { 
                  day: '2-digit', 
                  month: 'long', 
                  year: 'numeric',
                  hour: '2-digit',
                  minute: '2-digit'
                })}</p>
              </div>
            </div>
          )}

          {/* Instruções */}
          <div className="bg-gray-50 rounded-lg p-6 mb-6 text-left">
            <h2 className="font-semibold text-gray-900 mb-3">O que acontece agora?</h2>
            <ul className="space-y-2 text-gray-600">
              <li className="flex items-start gap-2">
                <span className="text-blue-600 mt-1">✓</span>
                <span>Sua solicitação foi enviada para os administradores</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 mt-1">✓</span>
                <span>Você receberá uma notificação quando seu acesso for aprovado</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 mt-1">✓</span>
                <span>O processo de aprovação pode levar até 24 horas úteis</span>
              </li>
            </ul>
          </div>

          {/* Informações de Contato */}
          <div className="bg-white border border-gray-200 rounded-lg p-6 mb-6 text-left">
            <h2 className="font-semibold text-gray-900 mb-3">Precisa de ajuda?</h2>
            <p className="text-gray-600 mb-2">
              Se você acredita que deveria ter acesso imediato ou tem alguma dúvida, 
              entre em contato com o administrador:
            </p>
            <a 
              href="mailto:contato@administradoramutual.com.br" 
              className="text-blue-600 hover:text-blue-700 font-medium"
            >
              contato@administradoramutual.com.br
            </a>
          </div>

          {/* Botões de Ação */}
          <div className="flex gap-4 justify-center">
            <button
              onClick={() => navigate('/')}
              className="px-6 py-3 bg-gray-100 text-gray-700 rounded-lg font-semibold hover:bg-gray-200 transition-colors"
            >
              Voltar ao Site
            </button>
            <button
              onClick={handleSignOut}
              className="px-6 py-3 bg-red-100 text-red-700 rounded-lg font-semibold hover:bg-red-200 transition-colors"
            >
              Sair
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WaitingApproval;

