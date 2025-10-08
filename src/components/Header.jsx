import { useState } from 'react';
import { Menu, X, ChevronDown, Building2, Palette, Newspaper, FileText, BarChart3, DollarSign, ClipboardList } from 'lucide-react';
import { Button } from '@/components/ui/button';
import logo from '../assets/logo.svg';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [sistemasDropdownOpen, setSistemasDropdownOpen] = useState(false);

  const menuItems = [
    { name: 'Início', href: '#inicio' },
    { name: 'Regulamentação', href: '#regulamentacao' },
    { name: 'Mercado', href: '#mercado' },
    { name: 'Serviços', href: '#servicos' },
    { name: 'Notícias', href: 'https://noticias.administradoramutual.com.br', external: true },
    { name: 'Due Diligence', href: 'https://formulario.administradoramutual.com.br', external: true },
    { name: 'Contato', href: '#contato' },
  ];

  const sistemasInternos = [
    {
      name: 'POP Evento e Sinistro',
      url: 'https://sinistro.administradoramutual.com.br',
      description: 'Procedimentos operacionais padrão para gestão de sinistros',
      icon: Building2,
    },
    {
      name: 'POP Financeiro',
      url: 'https://financeiro.administradoramutual.com.br',
      description: 'Procedimentos operacionais do departamento financeiro',
      icon: DollarSign,
    },
    {
      name: 'Manual da Marca',
      url: 'https://marca.administradoramutual.com.br',
      description: 'Identidade visual, logo, cores e aplicações da marca',
      icon: Palette,
    },
    {
      name: 'Central de Notícias',
      url: 'https://noticias.administradoramutual.com.br',
      description: 'Notícias do mercado de seguros e proteção patrimonial',
      icon: Newspaper,
    },
    {
      name: 'Due Diligence',
      url: 'https://formulario.administradoramutual.com.br',
      description: 'Formulário de análise de viabilidade de carteira',
      icon: FileText,
    },
    {
      name: 'Análise Gestão Segura',
      url: 'https://gestaosegura.administradoramutual.com.br',
      description: 'Análise completa dos POPs da Gestão Segura',
      icon: BarChart3,
    },
    {
      name: 'POPs Comerciais',
      url: 'https://comercial.administradoramutual.com.br',
      description: 'Procedimentos operacionais do setor comercial',
      icon: ClipboardList,
    },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm shadow-sm z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="#inicio" className="flex items-center">
              <img src={logo} alt="Administradora Mutual" className="h-10 w-auto" />
            </a>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex lg:items-center lg:space-x-6">
            {menuItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                {...(item.external && { target: '_blank', rel: 'noopener noreferrer' })}
                className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors"
              >
                {item.name}
              </a>
            ))}

            {/* Sistemas Internos Dropdown */}
            <div className="relative">
              <button
                onClick={() => setSistemasDropdownOpen(!sistemasDropdownOpen)}
                onMouseEnter={() => setSistemasDropdownOpen(true)}
                className="flex items-center text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors"
              >
                Sistemas Internos
                <ChevronDown className="ml-1 h-4 w-4" />
              </button>

              {sistemasDropdownOpen && (
                <div
                  className="absolute right-0 mt-2 w-80 bg-white rounded-lg shadow-xl border border-gray-200 overflow-hidden"
                  onMouseLeave={() => setSistemasDropdownOpen(false)}
                >
                  <div className="bg-gradient-to-r from-purple-600 to-blue-600 px-4 py-3">
                    <h3 className="text-white font-semibold text-sm">Portais e Sistemas</h3>
                  </div>
                  <div className="p-2">
                    {sistemasInternos.map((sistema) => (
                      <a
                        key={sistema.name}
                        href={sistema.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block p-3 rounded-md hover:bg-gray-50 transition-colors group"
                      >
                        <div className="flex items-start space-x-3">
                          <div className="flex-shrink-0">
                            <sistema.icon className="h-6 w-6 text-blue-600 group-hover:text-blue-700" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <p className="text-sm font-medium text-gray-900 group-hover:text-blue-600">
                              {sistema.name}
                            </p>
                            <p className="text-xs text-gray-500 mt-1">
                              {sistema.description}
                            </p>
                          </div>
                        </div>
                      </a>
                    ))}
                  </div>
                  <div className="bg-gray-50 px-4 py-2 border-t border-gray-200">
                    <p className="text-xs text-gray-600 text-center">
                      🔒 Acesso restrito a colaboradores autorizados
                    </p>
                  </div>
                </div>
              )}
            </div>

            <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
              Fale Conosco
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-gray-700 hover:text-blue-600 p-2"
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden py-4 border-t border-gray-200">
            {menuItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                {...(item.external && { target: '_blank', rel: 'noopener noreferrer' })}
                className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-md"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
            <button
              onClick={() => setSistemasDropdownOpen(!sistemasDropdownOpen)}
              className="w-full text-left flex items-center justify-between px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-md"
            >
              Sistemas Internos
              <ChevronDown className={`h-4 w-4 transition-transform ${sistemasDropdownOpen ? 'rotate-180' : ''}`} />
            </button>
            {sistemasDropdownOpen && (
              <div className="ml-4 mt-2 space-y-2">
                {sistemasInternos.map((sistema) => (
                  <a
                    key={sistema.name}
                    href={sistema.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block px-3 py-2 text-sm text-gray-600 hover:text-blue-600 hover:bg-gray-50 rounded-md"
                  >
                    {sistema.name}
                  </a>
                ))}
              </div>
            )}
            <div className="mt-4 px-3">
              <Button className="w-full bg-blue-600 hover:bg-blue-700">
                Fale Conosco
              </Button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
