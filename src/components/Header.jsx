import { useState } from 'react';
import { Menu, X, ChevronDown, Building2, Palette, Newspaper, FileText, BarChart3, DollarSign, ClipboardList, Calculator } from 'lucide-react';
import { Button } from '@/components/ui/button';
import logo from '../assets/logo.svg';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [sistemasDropdownOpen, setSistemasDropdownOpen] = useState(false);

  const menuItems = [
    { name: 'Início', href: '/' },
    { name: 'Quem Somos', href: '/quem-somos' },
    { name: 'Regulamentação', href: '/#regulamentacao' },
    { name: 'Mercado', href: '/#mercado' },
    { name: 'Serviços', href: '/#servicos' },
    { name: 'Transparência', href: '/transparencia-regulatoria' },
    { name: 'Notícias', href: 'https://noticias.administradoramutual.com.br', external: true },
    { name: 'Contato', href: '/#contato' },
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
    {
      name: 'Calculadora SMT',
      url: 'https://total.administradoramutual.com.br',
      description: 'Calculadora SMT para indenizações e antecipações',
      icon: Calculator,
    },
    {
      name: 'Calculadora SMA',
      url: 'https://sma.administradoramutual.com.br',
      description: 'Análise de Planilha para Pagamento Antecipado com Desconto',
      icon: Calculator,
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

            {/* Sistemas Internos Link */}
            <a
              href="/sistemas"
              className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors"
            >
              Sistemas Internos
            </a>

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
            <a
              href="/sistemas"
              className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-md"
              onClick={() => setMobileMenuOpen(false)}
            >
              Sistemas Internos
            </a>
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
