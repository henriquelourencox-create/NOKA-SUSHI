import React, { useState, useEffect } from 'react';
import { BrandLogo } from './BrandLogo';
import { Phone, Navigation, Menu as MenuIcon, X, Clock } from 'lucide-react';

interface HeaderProps {
  onOpenMenuModal: () => void;
  onOpenContactModal: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenMenuModal, onOpenContactModal }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Início', href: '#inicio' },
    { label: 'O Noka', href: '#sobre' },
    { label: 'Cardápio', href: '#cardapio' },
    { label: 'Tour 360°', href: '#tour360' },
    { label: 'Avaliações', href: '#avaliacoes' },
    { label: 'Localização', href: '#localizacao' },
    { label: 'FAQ', href: '#faq' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#0f1618]/95 backdrop-blur-md border-b border-[#2a3a3f]/70 py-3 shadow-lg shadow-black/30'
          : 'bg-gradient-to-b from-[#0b1012]/90 via-[#0b1012]/50 to-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Zone 1: Brand Wordmark / Logo */}
          <a
            href="#inicio"
            className="flex items-center gap-2 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#546d75] rounded-lg"
            aria-label="NOKA Sushi - Início"
          >
            <div className="p-1 rounded-lg bg-[#546d75]/30 border border-[#546d75]/40 group-hover:bg-[#546d75]/50 transition-colors">
              <BrandLogo size="sm" variant="light" />
            </div>
            <div className="flex flex-col">
              <span className="text-lg font-bold tracking-tight text-white font-display">
                NOKA <span className="font-light text-[#9cb4bc]">Sushi</span>
              </span>
            </div>
          </a>

          {/* Zone 2: Navigation Links (Desktop) */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-[#c1ccd0]">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="hover:text-white transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[#6c8a94] hover:after:w-full after:transition-all after:duration-200"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Zone 3: Primary Actions (Desktop) */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href="tel:+551158194215"
              className="flex items-center gap-2 px-3.5 py-2 text-xs font-medium text-[#c1ccd0] hover:text-white bg-[#192327] hover:bg-[#223136] border border-[#2d3f45] rounded-lg transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#546d75]"
              title="Ligar para (11) 5819-4215"
            >
              <Phone className="w-3.5 h-3.5 text-[#8aaab4]" />
              <span className="whitespace-nowrap">(11) 5819-4215</span>
            </a>

            <button
              type="button"
              onClick={onOpenMenuModal}
              className="px-4 py-2 text-xs font-semibold text-white bg-[#546d75] hover:bg-[#63808a] active:bg-[#475d64] border border-[#71919c]/40 rounded-lg shadow-sm transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#546d75] whitespace-nowrap"
            >
              Ver Cardápio
            </button>
          </div>

          {/* Mobile hamburger trigger */}
          <div className="flex md:hidden items-center gap-2">
            <button
              type="button"
              onClick={onOpenMenuModal}
              className="px-3 py-1.5 text-xs font-medium text-white bg-[#546d75] rounded-md"
            >
              Cardápio
            </button>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-[#c1ccd0] hover:text-white hover:bg-[#1a2529] rounded-lg border border-[#2d3f45] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#546d75]"
              aria-label={mobileMenuOpen ? 'Fechar menu' : 'Abrir menu de navegação'}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <MenuIcon className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0e1618] border-b border-[#25363b] px-5 pt-3 pb-6 mt-3 animate-fadeIn">
          <nav className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-medium text-[#d0dade] hover:text-white hover:bg-[#182326] px-3 py-2 rounded-lg transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="mt-5 pt-4 border-t border-[#25363b] flex flex-col gap-3">
            <div className="flex items-center gap-2 text-xs text-[#9eb2b9] px-3">
              <Clock className="w-4 h-4 text-[#7b9da8]" />
              <span>Abre às 18:30 · Refeição no local</span>
            </div>

            <div className="grid grid-cols-2 gap-2 mt-1">
              <a
                href="tel:+551158194215"
                className="flex items-center justify-center gap-2 py-2.5 px-3 text-xs font-medium text-white bg-[#192428] border border-[#2e4046] rounded-lg"
              >
                <Phone className="w-3.5 h-3.5 text-[#88aab5]" />
                Ligar Agora
              </a>
              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenContactModal();
                }}
                className="flex items-center justify-center gap-2 py-2.5 px-3 text-xs font-medium text-white bg-[#546d75] rounded-lg"
              >
                Fale Conosco
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
