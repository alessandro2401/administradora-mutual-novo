import { Building2, Mail, MapPin, Phone, Shield, Target, Users, FileCheck } from 'lucide-react';
import Header from '../components/Header';

function QuemSomos() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Hero */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
            <Building2 className="h-8 w-8 text-blue-600" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Quem Somos
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Estrutura técnica e administrativa para o novo modelo regulado de proteção patrimonial mutualista
          </p>
        </div>

        {/* Missão e Propósito */}
        <section className="bg-white rounded-lg shadow-sm p-8 mb-8">
          <div className="flex items-center gap-3 mb-6">
            <Target className="h-8 w-8 text-blue-600" />
            <h2 className="text-3xl font-bold text-gray-900">Nossa Missão</h2>
          </div>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Somos uma <strong>estrutura técnica e administrativa</strong> criada para atender às novas exigências do 
            sistema regulado de proteção patrimonial mutualista. A Administradora Mutual foi constituída com base nos 
            princípios de <strong>legalidade, transparência, integridade e sustentabilidade operacional</strong>, 
            previstos na LC nº 213/2025 e nas futuras normas do CNSP.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            Nosso papel é <strong>viabilizar a transição das associações patrimoniais mutualistas</strong> para o modelo 
            supervisionado, garantindo governança contábil e jurídica, estrutura de auditoria, política de transparência 
            com os associados e compliance regulatório.
          </p>
        </section>

        {/* Identificação Jurídica */}
        <section className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg shadow-sm p-8 mb-8 border border-blue-200">
          <div className="flex items-center gap-3 mb-6">
            <FileCheck className="h-8 w-8 text-blue-600" />
            <h2 className="text-3xl font-bold text-gray-900">Identificação Jurídica</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-center gap-3 mb-3">
                <Building2 className="h-6 w-6 text-blue-600" />
                <h3 className="font-semibold text-lg text-gray-900">Razão Social</h3>
              </div>
              <p className="text-gray-700">Administradora Mutual S.A.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-center gap-3 mb-3">
                <FileCheck className="h-6 w-6 text-blue-600" />
                <h3 className="font-semibold text-lg text-gray-900">CNPJ</h3>
              </div>
              <p className="text-gray-700">[Em processo de registro]</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-center gap-3 mb-3">
                <MapPin className="h-6 w-6 text-blue-600" />
                <h3 className="font-semibold text-lg text-gray-900">Sede</h3>
              </div>
              <p className="text-gray-700">Goiânia - GO, Brasil</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-center gap-3 mb-3">
                <Mail className="h-6 w-6 text-blue-600" />
                <h3 className="font-semibold text-lg text-gray-900">E-mail Institucional</h3>
              </div>
              <p className="text-gray-700">
                <a href="mailto:contato@administradoramutual.com.br" className="text-blue-600 hover:underline">
                  contato@administradoramutual.com.br
                </a>
              </p>
            </div>
          </div>
        </section>

        {/* Princípios e Valores */}
        <section className="bg-white rounded-lg shadow-sm p-8 mb-8">
          <div className="flex items-center gap-3 mb-6">
            <Shield className="h-8 w-8 text-blue-600" />
            <h2 className="text-3xl font-bold text-gray-900">Princípios e Valores</h2>
          </div>
          <p className="text-lg text-gray-700 mb-8">
            Nossa atuação é fundamentada em quatro pilares essenciais:
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="border-l-4 border-blue-600 pl-6 py-4">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Legalidade</h3>
              <p className="text-gray-700">
                Atuação estritamente conforme a LC nº 213/2025, normas da SUSEP e do CNSP, garantindo total 
                conformidade regulatória em todas as operações.
              </p>
            </div>
            
            <div className="border-l-4 border-green-600 pl-6 py-4">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Transparência</h3>
              <p className="text-gray-700">
                Comunicação clara e acessível com associados, órgãos reguladores e sociedade, disponibilizando 
                informações relevantes de forma proativa.
              </p>
            </div>
            
            <div className="border-l-4 border-purple-600 pl-6 py-4">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Integridade</h3>
              <p className="text-gray-700">
                Conduta ética e responsável em todas as relações, priorizando os interesses dos associados e 
                o cumprimento das obrigações assumidas.
              </p>
            </div>
            
            <div className="border-l-4 border-orange-600 pl-6 py-4">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Sustentabilidade Operacional</h3>
              <p className="text-gray-700">
                Gestão técnica e financeira responsável, garantindo a solvência e a continuidade das operações 
                mutualistas no longo prazo.
              </p>
            </div>
          </div>
        </section>

        {/* Equipe Técnica */}
        <section className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg shadow-sm p-8 text-white mb-8">
          <div className="flex items-center gap-3 mb-6">
            <Users className="h-8 w-8" />
            <h2 className="text-3xl font-bold">Nossa Equipe</h2>
          </div>
          <p className="text-lg mb-6">
            Contamos com uma equipe multidisciplinar de especialistas altamente qualificados:
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
              <h3 className="font-semibold text-lg mb-2">Atuários Certificados</h3>
              <p className="text-white/90 text-sm">
                Profissionais certificados pelo MIBA/IBA para cálculos de precificação, provisões técnicas e 
                análise de solvência.
              </p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
              <h3 className="font-semibold text-lg mb-2">Especialistas Regulatórios</h3>
              <p className="text-white/90 text-sm">
                Advogados e consultores especializados em regulamentação do mercado de seguros e proteção 
                patrimonial mutualista.
              </p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
              <h3 className="font-semibold text-lg mb-2">Equipe Operacional</h3>
              <p className="text-white/90 text-sm">
                Profissionais experientes em gestão de sinistros, controle financeiro, auditoria e compliance.
              </p>
            </div>
          </div>
        </section>

        {/* Status Regulatório */}
        <section className="bg-amber-50 border-l-4 border-amber-500 rounded-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Status Regulatório Atual</h2>
          <p className="text-gray-700 leading-relaxed">
            A Administradora Mutual encontra-se em <strong>fase preparatória de estruturação jurídica, técnica e 
            operacional</strong>, acompanhando as etapas de regulamentação da SUSEP. Não realizamos, intermediamos 
            ou oferecemos operações de proteção patrimonial mutualista até a publicação das normas complementares 
            do CNSP e a obtenção da devida autorização da SUSEP.
          </p>
        </section>

        {/* CTA */}
        <section className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Quer saber mais sobre nossos serviços?
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/#servicos" 
              className="inline-flex items-center justify-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition"
            >
              Conheça Nossos Serviços
            </a>
            <a 
              href="/#contato" 
              className="inline-flex items-center justify-center px-6 py-3 border-2 border-blue-600 text-blue-600 font-semibold rounded-lg hover:bg-blue-50 transition"
            >
              Entre em Contato
            </a>
          </div>
        </section>

      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-4">
            <a href="/politica-privacidade" className="text-gray-400 hover:text-white mx-3">
              Política de Privacidade
            </a>
            <a href="/#contato" className="text-gray-400 hover:text-white mx-3">
              Contato
            </a>
          </div>
          <p className="text-gray-400 text-center">
            © 2025 Administradora Mutual. Todos os direitos reservados.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default QuemSomos;

