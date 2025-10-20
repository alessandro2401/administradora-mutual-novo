import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import logo from '../assets/logo.svg';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const menuItems = [
    { name: 'Início', href: '#inicio' },
    { name: 'Regulamentação', href: '#regulamentacao' },
    { name: 'Mercado', href: '#mercado' },
    { name: 'Serviços', href: '#servicos' },
    { name: 'Notícias', href: 'https://noticias.administradoramutual.com.br', external: true },
    { name: 'Due Diligence', href: 'https://formulario.administradoramutual.com.br', external: true },
    { name: 'Contato', href: '#contato' },
    { name: 'Sistemas Internos', href: 'https://sistemas.administradoramutual.com.br/', external: true },
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
