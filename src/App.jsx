import Header from './components/Header';
import HeroSection from './components/HeroSection';
import ContactForm from './components/ContactForm';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import { Button } from '@/components/ui/button';
import { CheckCircle2, TrendingUp, Shield, Users, BarChart3, FileText, Mail, MapPin, Clock } from 'lucide-react';
import './App.css';

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      
      {/* Marco Regulatório */}
      <section id="regulamentacao" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              O Novo Marco Regulatório
            </h2>
            <p className="text-lg text-gray-600">
              O fim da incerteza: entendendo a LC 213/2025 e suas implicações para o setor
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-lg border border-green-200">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-semibold text-lg">Fase I - Cadastramento</h3>
                <CheckCircle2 className="h-6 w-6 text-green-600" />
              </div>
              <p className="text-sm text-gray-600 mb-2">Concluída em 15/07/2025</p>
              <p className="text-sm text-gray-700">
                Cadastramento eletrônico de associações, inclusão de estatuto alterado e assinatura do Termo de Adequação. 
                Associações cadastradas receberam status "Em regularização".
              </p>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-lg border border-blue-200">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-semibold text-lg">Fase II - Regulamentação</h3>
                <div className="px-3 py-1 bg-blue-600 text-white text-xs font-semibold rounded-full">
                  EM ANDAMENTO
                </div>
              </div>
              <p className="text-sm text-gray-600 mb-2">Prazo a ser definido</p>
              <p className="text-sm text-gray-700">
                Regulamentação pelo CNSP para definição de critérios, parâmetros e obrigações para autorização de 
                administradoras de operações de proteção patrimonial mutualista.
              </p>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-6 rounded-lg border border-purple-200">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-semibold text-lg">Fase III - Regularidade</h3>
                <Clock className="h-6 w-6 text-purple-600" />
              </div>
              <p className="text-sm text-gray-600 mb-2">Prazo a ser definido</p>
              <p className="text-sm text-gray-700">
                Após contratação de administradora autorizada pela SUSEP, associações passarão a ter status "Regular" 
                perante o órgão regulador.
              </p>
            </div>
          </div>

          <div className="mt-12 bg-gradient-to-r from-blue-600 to-purple-600 p-8 rounded-lg text-white">
            <h3 className="text-2xl font-bold mb-4">Lei 15.040/2024: A Nova Lei de Seguros</h3>
            <p className="mb-6">
              Publicada em 9 de dezembro de 2024, com vigência a partir de 11 de dezembro de 2025, a Lei 15.040/2024 
              estabelece um novo marco legal para contratos de seguro no Brasil.
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg">
                <Shield className="h-8 w-8 mb-2" />
                <h4 className="font-semibold mb-1">Maior Transparência</h4>
                <p className="text-sm text-white/90">Exclusões e limitações claras e destacadas</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg">
                <FileText className="h-8 w-8 mb-2" />
                <h4 className="font-semibold mb-1">Segurança Jurídica</h4>
                <p className="text-sm text-white/90">Alinhamento com legislações internacionais</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg">
                <Users className="h-8 w-8 mb-2" />
                <h4 className="font-semibold mb-1">Proteção ao Consumidor</h4>
                <p className="text-sm text-white/90">Redução de assimetrias e maior confiança</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg">
                <TrendingUp className="h-8 w-8 mb-2" />
                <h4 className="font-semibold mb-1">Crescimento do Mercado</h4>
                <p className="text-sm text-white/90">Aumento da demanda por seguros</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mercado */}
      <section id="mercado" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Um Mercado em Transformação
            </h2>
            <p className="text-lg text-gray-600">
              Dados e tendências do setor segurador brasileiro
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <BarChart3 className="h-10 w-10 text-blue-600 mb-4" />
              <h3 className="text-3xl font-bold text-gray-900 mb-2">R$ 751,3 bi</h3>
              <p className="text-sm font-semibold text-gray-700 mb-1">Arrecadação Total 2024</p>
              <p className="text-xs text-gray-600">Crescimento de 12,2% em relação a 2023</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <TrendingUp className="h-10 w-10 text-green-600 mb-4" />
              <h3 className="text-3xl font-bold text-gray-900 mb-2">+10,1%</h3>
              <p className="text-sm font-semibold text-gray-700 mb-1">Projeção de Crescimento 2025</p>
              <p className="text-xs text-gray-600">Mercado segurador em expansão contínua</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <Shield className="h-10 w-10 text-purple-600 mb-4" />
              <h3 className="text-3xl font-bold text-gray-900 mb-2">R$ 131,7 bi</h3>
              <p className="text-sm font-semibold text-gray-700 mb-1">Indenizações Pagas (1º tri 2025)</p>
              <p className="text-xs text-gray-600">Avanço de 11,4% no período</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <Users className="h-10 w-10 text-orange-600 mb-4" />
              <h3 className="text-3xl font-bold text-gray-900 mb-2">+8,4%</h3>
              <p className="text-sm font-semibold text-gray-700 mb-1">Seguros de Pessoas (1º sem 2025)</p>
              <p className="text-xs text-gray-600">R$ 37,8 bilhões em prêmios</p>
            </div>
          </div>
        </div>
      </section>

      {/* Serviços */}
      <section id="servicos" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Como Podemos Ajudar sua Associação
            </h2>
            <p className="text-lg text-gray-600">
              Soluções completas para adequação regulatória e gestão profissional
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-lg border border-blue-200">
              <FileText className="h-12 w-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">Consultoria Regulatória</h3>
              <p className="text-gray-700 mb-4">
                Adequação completa à LC 213/2025 e normas da SUSEP. Nossa equipe de especialistas acompanha todo o 
                processo de regularização, garantindo conformidade total com a legislação vigente.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-blue-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-gray-700">Análise de conformidade regulatória</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-blue-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-gray-700">Adequação de estatutos e contratos</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-blue-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-gray-700">Acompanhamento de processos junto à SUSEP</span>
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-8 rounded-lg border border-purple-200">
              <BarChart3 className="h-12 w-12 text-purple-600 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">Gestão Atuarial e de Riscos</h3>
              <p className="text-gray-700 mb-4">
                Precificação técnica, dimensionamento de reservas e garantia de solvência. Atuários certificados pelo 
                MIBA/IBA garantem a sustentabilidade financeira da sua operação.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-purple-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-gray-700">Estudos atuariais de precificação</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-purple-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-gray-700">Cálculo de provisões técnicas (PSL, IBNR)</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-purple-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-gray-700">Análise de sinistralidade e rentabilidade</span>
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-8 rounded-lg border border-green-200">
              <Shield className="h-12 w-12 text-green-600 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">Administração Completa</h3>
              <p className="text-gray-700 mb-4">
                Gestão operacional, financeira e de sinistros com excelência. Assumimos a administração completa da sua 
                operação, permitindo que você foque no crescimento do negócio.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-gray-700">Gestão de sinistros e indenizações</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-gray-700">Controle financeiro e contábil</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-gray-700">Relatórios gerenciais e compliance</span>
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-orange-50 to-amber-50 p-8 rounded-lg border border-orange-200">
              <TrendingUp className="h-12 w-12 text-orange-600 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">Tecnologia e Inovação</h3>
              <p className="text-gray-700 mb-4">
                Plataforma completa para gestão de associados e operações. Sistema informatizado de última geração para 
                controle total e transparência nas operações.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-orange-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-gray-700">Portal do associado com autoatendimento</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-orange-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-gray-700">Sistema de gestão de sinistros online</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-orange-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-gray-700">Dashboards e relatórios em tempo real</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Depoimentos */}
      <Testimonials />

      {/* FAQ */}
      <FAQ />

      {/* Contato */}
      <section id="contato" className="py-16 bg-gradient-to-br from-blue-600 to-purple-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Fale com Nossos Especialistas
            </h2>
            <p className="text-lg text-white/90">
              Estamos prontos para ajudar sua associação a navegar no novo cenário regulatório
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Informações de Contato</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <Mail className="h-5 w-5 mr-3 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-medium">E-mail</p>
                    <a href="mailto:contato@administradoramutual.com.br" className="text-white/90 hover:text-white">
                      contato@administradoramutual.com.br
                    </a>
                  </div>
                </div>
                <div className="flex items-start">
                  <MapPin className="h-5 w-5 mr-3 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-medium">Região</p>
                    <p className="text-white/90">Goiânia - GO</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Clock className="h-5 w-5 mr-3 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-medium">Horário de Atendimento</p>
                    <p className="text-white/90">9h às 17h dias úteis</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Entre em Contato</h3>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-gray-400">
              © 2025 Administradora Mutual. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
