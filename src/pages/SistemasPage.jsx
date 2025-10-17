import React from 'react';
import { Calculator, FileText, DollarSign, Palette, Newspaper, ClipboardCheck, BarChart3, Briefcase, AlertCircle } from 'lucide-react';
import Header from '../components/Header';

const SistemasPage = () => {
  const sistemas = [
    {
      id: 1,
      icon: Calculator,
      title: 'Calculadora SMA',
      description: 'Sistema de cálculo para Socorro Mútuo Acordo - Antecipação de valores de reparo',
      url: 'https://sma.administradoramutual.com.br',
      color: 'bg-blue-500'
    },
    {
      id: 2,
      icon: Calculator,
      title: 'Calculadora SMT',
      description: 'Sistema de cálculo para Socorro Mútuo Total - Indenizações de perda total',
      url: 'https://total.administradoramutual.com.br',
      color: 'bg-indigo-500'
    },
    {
      id: 3,
      icon: AlertCircle,
      title: 'POP Sinistro',
      description: 'Procedimentos operacionais padrão para gestão de sinistros',
      url: 'https://sinistro.administradoramutual.com.br',
      color: 'bg-red-500'
    },
    {
      id: 4,
      icon: DollarSign,
      title: 'POP Financeiro',
      description: 'Procedimentos operacionais do departamento financeiro',
      url: 'https://financeiro.administradoramutual.com.br',
      color: 'bg-green-500'
    },
    {
      id: 5,
      icon: Palette,
      title: 'Manual da Marca',
      description: 'Identidade visual, logo, cores e aplicações da marca',
      url: 'https://marca.administradoramutual.com.br',
      color: 'bg-purple-500'
    },
    {
      id: 6,
      icon: Newspaper,
      title: 'Central de Notícias',
      description: 'Notícias do mercado de seguros e proteção patrimonial',
      url: 'https://noticias.administradoramutual.com.br',
      color: 'bg-orange-500'
    },
    {
      id: 7,
      icon: ClipboardCheck,
      title: 'Due Diligence',
      description: 'Formulário de análise de viabilidade de carteira',
      url: 'https://formulario.administradoramutual.com.br',
      color: 'bg-cyan-500'
    },
    {
      id: 8,
      icon: BarChart3,
      title: 'Gestão Segura',
      description: 'Análise completa dos POPs da Gestão Segura',
      url: 'https://gestaosegura.administradoramutual.com.br',
      color: 'bg-teal-500'
    },
    {
      id: 9,
      icon: Briefcase,
      title: 'POPs Comerciais',
      description: 'Procedimentos operacionais do setor comercial',
      url: 'https://comercial.administradoramutual.com.br',
      color: 'bg-pink-500'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Portais e Sistemas
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Acesso centralizado a todas as ferramentas, calculadoras e procedimentos operacionais da Administradora Mutual
          </p>
        </div>

        {/* Grid de Sistemas */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {sistemas.map((sistema) => {
            const IconComponent = sistema.icon;
            return (
              <a
                key={sistema.id}
                href={sistema.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-200 hover:border-blue-400"
              >
                <div className="p-6">
                  {/* Ícone */}
                  <div className={`${sistema.color} w-14 h-14 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>

                  {/* Título */}
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                    {sistema.title}
                  </h3>

                  {/* Descrição */}
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {sistema.description}
                  </p>

                  {/* Indicador de link externo */}
                  <div className="mt-4 flex items-center text-blue-600 text-sm font-medium">
                    <span>Acessar sistema</span>
                    <svg 
                      className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </a>
            );
          })}
        </div>

        {/* Aviso de Acesso Restrito */}
        <div className="mt-12 max-w-3xl mx-auto bg-amber-50 border border-amber-200 rounded-lg p-6">
          <div className="flex items-start">
            <div className="flex-shrink-0">
              <svg className="w-6 h-6 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
              </svg>
            </div>
            <div className="ml-3">
              <h3 className="text-sm font-medium text-amber-800">
                Acesso Restrito
              </h3>
              <p className="mt-2 text-sm text-amber-700">
                Alguns sistemas são restritos a colaboradores autorizados. Se você não possui acesso, entre em contato com o departamento de TI.
              </p>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-4">
            <a href="/quem-somos" className="text-gray-400 hover:text-white mx-3">
              Quem Somos
            </a>
            <a href="/transparencia-regulatoria" className="text-gray-400 hover:text-white mx-3">
              Transparência Regulatória
            </a>
            <a href="/politica-privacidade" className="text-gray-400 hover:text-white mx-3">
              Política de Privacidade
            </a>
            <a href="/" className="text-gray-400 hover:text-white mx-3">
              Início
            </a>
          </div>
          <div className="text-center">
            <p className="text-gray-400">
              © 2025 Administradora Mutual. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default SistemasPage;

