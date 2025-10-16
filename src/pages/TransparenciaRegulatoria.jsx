import { FileText, ExternalLink, Scale, Building, AlertCircle } from 'lucide-react';
import Header from '../components/Header';

function TransparenciaRegulatoria() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Hero */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
            <Scale className="h-8 w-8 text-blue-600" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Transparência Regulatória
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Informações públicas sobre constituição, enquadramento jurídico e processo de adequação regulatória
          </p>
        </div>

        {/* Introdução */}
        <section className="bg-white rounded-lg shadow-sm p-8 mb-8">
          <p className="text-lg text-gray-700 leading-relaxed">
            A <strong>transparência é um dos pilares fundamentais</strong> do modelo mutualista regulado. Por isso, 
            tornamos públicas todas as informações relevantes sobre a constituição, o enquadramento jurídico e o 
            processo de adequação da Administradora Mutual.
          </p>
        </section>

        {/* Base Legal */}
        <section className="bg-white rounded-lg shadow-sm p-8 mb-8">
          <div className="flex items-center gap-3 mb-6">
            <FileText className="h-8 w-8 text-blue-600" />
            <h2 className="text-3xl font-bold text-gray-900">Base Legal</h2>
          </div>
          <p className="text-lg text-gray-700 mb-6">
            A atuação da Administradora Mutual é fundamentada nas seguintes normas legais:
          </p>
          
          <div className="space-y-4">
            <div className="border-l-4 border-blue-600 bg-blue-50 p-6 rounded-r-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Lei Complementar nº 213/2025
              </h3>
              <p className="text-gray-700 mb-3">
                Marco regulatório principal que estabelece o novo sistema de proteção patrimonial mutualista, 
                criando a figura da Administradora de Operações e definindo requisitos de autorização, 
                funcionamento e supervisão pela SUSEP.
              </p>
              <a 
                href="https://www.planalto.gov.br/ccivil_03/leis/lcp/lcp213.htm" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium"
              >
                Acessar Lei Completa
                <ExternalLink className="h-4 w-4" />
              </a>
            </div>

            <div className="border-l-4 border-green-600 bg-green-50 p-6 rounded-r-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Decreto-Lei nº 73/1966 (com alterações da LC 213/2025)
              </h3>
              <p className="text-gray-700 mb-3">
                Regula as operações de seguros privados no Brasil e foi alterado pela LC 213/2025 para incluir 
                as operações de proteção patrimonial mutualista no sistema regulado.
              </p>
              <a 
                href="https://www.planalto.gov.br/ccivil_03/decreto-lei/del0073.htm" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-green-600 hover:text-green-700 font-medium"
              >
                Acessar Decreto-Lei
                <ExternalLink className="h-4 w-4" />
              </a>
            </div>

            <div className="border-l-4 border-purple-600 bg-purple-50 p-6 rounded-r-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Normas Complementares da SUSEP e do CNSP
              </h3>
              <p className="text-gray-700 mb-3">
                Resoluções, circulares e instruções normativas que detalham os critérios técnicos, operacionais 
                e prudenciais para autorização e funcionamento das administradoras.
              </p>
              <p className="text-amber-700 font-medium">
                ⏳ Em fase de regulamentação pelo CNSP (Fase II)
              </p>
            </div>
          </div>
        </section>

        {/* Status Regulatório */}
        <section className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-lg shadow-sm p-8 mb-8 border border-amber-200">
          <div className="flex items-center gap-3 mb-6">
            <Building className="h-8 w-8 text-amber-600" />
            <h2 className="text-3xl font-bold text-gray-900">Status Regulatório Atual</h2>
          </div>
          
          <div className="bg-white rounded-lg p-6 mb-6">
            <div className="flex items-start gap-4">
              <AlertCircle className="h-6 w-6 text-amber-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Fase Preparatória de Estruturação
                </h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  A Administradora Mutual encontra-se em <strong>fase preparatória de estruturação jurídica, 
                  técnica e operacional</strong>, acompanhando as etapas de regulamentação da SUSEP.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Estamos preparando toda a documentação, estrutura operacional, equipe técnica e sistemas 
                  necessários para solicitar autorização formal junto à SUSEP assim que as normas complementares 
                  do CNSP forem publicadas (Fase II da regulamentação).
                </p>
              </div>
            </div>
          </div>

          <div className="bg-amber-100 border-l-4 border-amber-500 p-6 rounded-r-lg">
            <p className="text-gray-900 font-semibold mb-2">
              ⚠️ Aviso Importante:
            </p>
            <p className="text-gray-800">
              A Administradora Mutual <strong>não realiza, intermedeia ou oferece operações de proteção 
              patrimonial mutualista</strong> até a publicação das normas complementares do CNSP e a obtenção 
              da devida autorização da SUSEP.
            </p>
          </div>
        </section>

        {/* Processo de Regulamentação */}
        <section className="bg-white rounded-lg shadow-sm p-8 mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Processo de Regulamentação</h2>
          <p className="text-lg text-gray-700 mb-8">
            O processo de adequação ao novo marco regulatório está dividido em três fases:
          </p>

          <div className="space-y-6">
            <div className="flex gap-6">
              <div className="flex-shrink-0 w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                <span className="text-green-600 font-bold text-xl">1</span>
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <h3 className="text-xl font-semibold text-gray-900">Fase I - Cadastramento</h3>
                  <span className="px-3 py-1 bg-green-100 text-green-700 text-xs font-semibold rounded-full">
                    CONCLUÍDA
                  </span>
                </div>
                <p className="text-gray-600 text-sm mb-2">Concluída em 15/07/2025</p>
                <p className="text-gray-700">
                  Cadastramento eletrônico de associações mutualistas junto à SUSEP, incluindo alteração de 
                  estatutos e assinatura do Termo de Adequação. Associações cadastradas receberam status 
                  "Em regularização".
                </p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                <span className="text-blue-600 font-bold text-xl">2</span>
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <h3 className="text-xl font-semibold text-gray-900">Fase II - Regulamentação</h3>
                  <span className="px-3 py-1 bg-blue-100 text-blue-700 text-xs font-semibold rounded-full">
                    EM ANDAMENTO
                  </span>
                </div>
                <p className="text-gray-600 text-sm mb-2">Prazo a ser definido pelo CNSP</p>
                <p className="text-gray-700">
                  Regulamentação pelo CNSP para definição de critérios, parâmetros e obrigações para 
                  autorização de administradoras de operações de proteção patrimonial mutualista. Esta é a 
                  fase atual do processo.
                </p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="flex-shrink-0 w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                <span className="text-purple-600 font-bold text-xl">3</span>
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <h3 className="text-xl font-semibold text-gray-900">Fase III - Regularidade</h3>
                  <span className="px-3 py-1 bg-gray-100 text-gray-700 text-xs font-semibold rounded-full">
                    AGUARDANDO
                  </span>
                </div>
                <p className="text-gray-600 text-sm mb-2">Prazo a ser definido</p>
                <p className="text-gray-700">
                  Após contratação de administradora autorizada pela SUSEP, as associações passarão a ter 
                  status "Regular" perante o órgão regulador, podendo operar plenamente dentro do sistema 
                  supervisionado.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Fontes Oficiais */}
        <section className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg shadow-sm p-8 text-white">
          <div className="flex items-center gap-3 mb-6">
            <ExternalLink className="h-8 w-8" />
            <h2 className="text-3xl font-bold">Fontes Oficiais</h2>
          </div>
          <p className="text-lg mb-6">
            Para mais informações sobre o processo de regulamentação, consulte as fontes oficiais:
          </p>
          
          <div className="grid md:grid-cols-2 gap-4">
            <a 
              href="https://www.gov.br/susep" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-white/10 backdrop-blur-sm p-6 rounded-lg hover:bg-white/20 transition"
            >
              <h3 className="font-semibold text-lg mb-2">Portal da SUSEP</h3>
              <p className="text-white/90 text-sm mb-3">
                Superintendência de Seguros Privados - Órgão regulador e fiscalizador
              </p>
              <span className="inline-flex items-center gap-2 text-sm font-medium">
                Acessar Portal
                <ExternalLink className="h-4 w-4" />
              </span>
            </a>

            <a 
              href="https://www.planalto.gov.br/ccivil_03/leis/lcp/lcp213.htm" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-white/10 backdrop-blur-sm p-6 rounded-lg hover:bg-white/20 transition"
            >
              <h3 className="font-semibold text-lg mb-2">Lei Complementar nº 213/2025</h3>
              <p className="text-white/90 text-sm mb-3">
                Texto completo da lei no Portal da Presidência da República
              </p>
              <span className="inline-flex items-center gap-2 text-sm font-medium">
                Ler Lei Completa
                <ExternalLink className="h-4 w-4" />
              </span>
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
            <a href="/quem-somos" className="text-gray-400 hover:text-white mx-3">
              Quem Somos
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

export default TransparenciaRegulatoria;

