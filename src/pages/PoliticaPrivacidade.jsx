import { Shield, Mail, FileText, Lock } from 'lucide-react';
import Header from '../components/Header';

function PoliticaPrivacidade() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Hero */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
            <Shield className="h-8 w-8 text-blue-600" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Política de Privacidade e Proteção de Dados
          </h1>
          <p className="text-lg text-gray-600">
            Última atualização: 16 de outubro de 2025
          </p>
        </div>

        {/* Conteúdo */}
        <div className="bg-white rounded-lg shadow-sm p-8 space-y-8">
          
          {/* Introdução */}
          <section>
            <div className="flex items-center gap-3 mb-4">
              <Lock className="h-6 w-6 text-blue-600" />
              <h2 className="text-2xl font-semibold text-gray-900">Compromisso com sua Privacidade</h2>
            </div>
            <p className="text-gray-700 leading-relaxed">
              A Administradora Mutual respeita a privacidade e a proteção de dados pessoais de todos os visitantes 
              do site e de seus parceiros institucionais. Coletamos apenas as informações essenciais e com base legal 
              prevista na <strong>Lei nº 13.709/2018 (LGPD)</strong>. Os dados são utilizados exclusivamente para fins 
              administrativos e de comunicação institucional.
            </p>
          </section>

          {/* Dados Coletados */}
          <section>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Dados Coletados</h3>
            <p className="text-gray-700 mb-4">
              Coletamos as seguintes informações quando você utiliza nosso formulário de contato:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
              <li>Nome completo</li>
              <li>Endereço de e-mail</li>
              <li>Mensagem e conteúdo da comunicação</li>
              <li>Data e hora do contato</li>
            </ul>
          </section>

          {/* Finalidade */}
          <section>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Finalidade do Tratamento</h3>
            <p className="text-gray-700 mb-4">
              Os dados pessoais coletados são utilizados para as seguintes finalidades:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
              <li>Responder às suas solicitações e dúvidas</li>
              <li>Fornecer informações sobre nossos serviços</li>
              <li>Comunicação institucional e administrativa</li>
              <li>Cumprimento de obrigações legais e regulatórias</li>
            </ul>
          </section>

          {/* Base Legal */}
          <section>
            <div className="flex items-center gap-3 mb-4">
              <FileText className="h-6 w-6 text-blue-600" />
              <h3 className="text-xl font-semibold text-gray-900">Base Legal</h3>
            </div>
            <p className="text-gray-700">
              O tratamento de dados pessoais pela Administradora Mutual tem como base legal:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4 mt-3">
              <li><strong>Consentimento:</strong> Ao enviar o formulário, você consente com o tratamento dos seus dados</li>
              <li><strong>Legítimo interesse:</strong> Para comunicação institucional e administrativa</li>
              <li><strong>Cumprimento de obrigação legal:</strong> Quando exigido por lei ou regulamentação</li>
            </ul>
            <p className="text-gray-700 mt-4">
              <strong>Legislação aplicável:</strong> Lei nº 13.709/2018 (Lei Geral de Proteção de Dados - LGPD)
            </p>
          </section>

          {/* Compartilhamento */}
          <section>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Compartilhamento de Dados</h3>
            <p className="text-gray-700">
              A Administradora Mutual <strong>não compartilha, vende ou aluga</strong> seus dados pessoais a terceiros 
              para fins comerciais. Os dados podem ser compartilhados apenas nas seguintes situações:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4 mt-3">
              <li>Com prestadores de serviços essenciais (hospedagem, e-mail) sob contrato de confidencialidade</li>
              <li>Quando exigido por lei, ordem judicial ou autoridade competente</li>
              <li>Para proteção dos direitos e segurança da Administradora Mutual</li>
            </ul>
          </section>

          {/* Segurança */}
          <section>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Segurança dos Dados</h3>
            <p className="text-gray-700">
              Implementamos medidas técnicas e organizacionais adequadas para proteger seus dados pessoais contra 
              acesso não autorizado, perda, destruição ou alteração. Isso inclui:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4 mt-3">
              <li>Criptografia de dados em trânsito (HTTPS/SSL)</li>
              <li>Controles de acesso restrito</li>
              <li>Monitoramento e auditoria de segurança</li>
              <li>Backup regular de dados</li>
            </ul>
          </section>

          {/* Retenção */}
          <section>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Retenção de Dados</h3>
            <p className="text-gray-700">
              Os dados pessoais serão mantidos pelo tempo necessário para cumprir as finalidades para as quais foram 
              coletados, incluindo requisitos legais, contábeis ou de relatórios. Após esse período, os dados serão 
              excluídos ou anonimizados de forma segura.
            </p>
          </section>

          {/* Direitos do Titular */}
          <section className="bg-blue-50 p-6 rounded-lg border border-blue-200">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Seus Direitos como Titular de Dados</h3>
            <p className="text-gray-700 mb-4">
              De acordo com a LGPD, você tem os seguintes direitos em relação aos seus dados pessoais:
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-white p-4 rounded-lg">
                <h4 className="font-semibold text-gray-900 mb-2">✓ Confirmação e Acesso</h4>
                <p className="text-sm text-gray-600">Confirmar se tratamos seus dados e solicitar acesso a eles</p>
              </div>
              <div className="bg-white p-4 rounded-lg">
                <h4 className="font-semibold text-gray-900 mb-2">✓ Correção</h4>
                <p className="text-sm text-gray-600">Solicitar correção de dados incompletos ou desatualizados</p>
              </div>
              <div className="bg-white p-4 rounded-lg">
                <h4 className="font-semibold text-gray-900 mb-2">✓ Anonimização ou Exclusão</h4>
                <p className="text-sm text-gray-600">Solicitar anonimização ou exclusão de dados desnecessários</p>
              </div>
              <div className="bg-white p-4 rounded-lg">
                <h4 className="font-semibold text-gray-900 mb-2">✓ Portabilidade</h4>
                <p className="text-sm text-gray-600">Solicitar portabilidade dos dados a outro fornecedor</p>
              </div>
              <div className="bg-white p-4 rounded-lg">
                <h4 className="font-semibold text-gray-900 mb-2">✓ Revogação do Consentimento</h4>
                <p className="text-sm text-gray-600">Revogar o consentimento a qualquer momento</p>
              </div>
              <div className="bg-white p-4 rounded-lg">
                <h4 className="font-semibold text-gray-900 mb-2">✓ Informação sobre Compartilhamento</h4>
                <p className="text-sm text-gray-600">Saber com quem compartilhamos seus dados</p>
              </div>
            </div>
          </section>

          {/* Cookies */}
          <section>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Cookies e Tecnologias Similares</h3>
            <p className="text-gray-700">
              Nosso site pode utilizar cookies e tecnologias similares para melhorar a experiência do usuário e 
              coletar informações sobre como o site é utilizado. Você pode configurar seu navegador para recusar 
              cookies, mas isso pode afetar algumas funcionalidades do site.
            </p>
          </section>

          {/* Contato DPO */}
          <section className="bg-gradient-to-r from-blue-600 to-purple-600 p-6 rounded-lg text-white">
            <div className="flex items-center gap-3 mb-4">
              <Mail className="h-6 w-6" />
              <h3 className="text-xl font-semibold">Entre em Contato com Nosso DPO</h3>
            </div>
            <p className="mb-4">
              Para exercer seus direitos ou esclarecer dúvidas sobre o tratamento de dados pessoais, entre em contato 
              com nosso Encarregado de Proteção de Dados (DPO):
            </p>
            <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg">
              <p className="font-semibold mb-2">Encarregado de Proteção de Dados (DPO)</p>
              <p className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                <a href="mailto:dpo@administradoramutual.com.br" className="hover:underline">
                  dpo@administradoramutual.com.br
                </a>
              </p>
              <p className="text-sm mt-2 text-white/90">
                Responderemos sua solicitação em até 15 dias úteis, conforme previsto na LGPD.
              </p>
            </div>
          </section>

          {/* Alterações */}
          <section>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Alterações nesta Política</h3>
            <p className="text-gray-700">
              Esta Política de Privacidade pode ser atualizada periodicamente para refletir mudanças em nossas práticas 
              ou na legislação aplicável. Recomendamos que você revise esta página regularmente. A data da última 
              atualização está indicada no topo desta página.
            </p>
          </section>

          {/* Legislação */}
          <section className="border-t pt-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Legislação e Foro</h3>
            <p className="text-gray-700">
              Esta Política de Privacidade é regida pelas leis brasileiras, em especial pela Lei nº 13.709/2018 (LGPD). 
              Quaisquer disputas relacionadas a esta política serão resolvidas no foro da comarca de Goiânia/GO.
            </p>
          </section>

        </div>

        {/* Botão Voltar */}
        <div className="mt-8 text-center">
          <a 
            href="/" 
            className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium"
          >
            ← Voltar para a Página Inicial
          </a>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-400">
            © 2025 Administradora Mutual. Todos os direitos reservados.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default PoliticaPrivacidade;

