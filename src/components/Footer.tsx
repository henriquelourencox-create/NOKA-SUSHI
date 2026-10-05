import React from 'react';
import { BrandLogo } from './BrandLogo';
import { Phone, MapPin, ExternalLink, MessageCircle, Clock } from 'lucide-react';

interface FooterProps {
  onOpenMenu: () => void;
  onOpenContactModal: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenMenu, onOpenContactModal }) => {
  const navLinks = [
    { label: 'Início', href: '#inicio' },
    { label: 'O Noka', href: '#sobre' },
    { label: 'Cardápio', href: '#cardapio' },
    { label: 'Tour Virtual 360°', href: '#tour360' },
    { label: 'Avaliações', href: '#avaliacoes' },
    { label: 'Localização', href: '#localizacao' },
    { label: 'Perguntas Frequentes (FAQ)', href: '#faq' },
  ];

  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    'NOKA Sushi Estr. de Itapecerica, 679 - Vila Nova das Belezas, São Paulo - SP, 05835-003'
  )}`;

  return (
    <footer className="bg-[#090e10] border-t border-[#1a272b] text-[#93a7af] pt-16 pb-24 md:pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-[#182428]">
          
          {/* Col 1: Brand & Identity */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="p-1 rounded-lg bg-[#546d75]/30 border border-[#546d75]/40">
                <BrandLogo size="sm" variant="light" />
              </div>
              <div>
                <span className="text-xl font-bold tracking-tight text-white font-display">
                  NOKA Sushi
                </span>
                <p className="text-xs text-[#74909a]">Restaurante Japonês</p>
              </div>
            </div>

            <p className="text-sm text-[#8ca3ab] leading-relaxed max-w-sm">
              Culinária japonesa contemporânea, sushis e sashimis frescos preparados com rigor e servidos em ambiente acolhedor.
            </p>

            <div className="flex items-center gap-2 text-xs text-[#b4c7ce]">
              <span className="text-amber-400">★ 4,9</span>
              <span>·</span>
              <span>671 avaliações no Google</span>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="lg:col-span-3 space-y-3">
            <p className="text-xs font-semibold text-white uppercase tracking-wider">
              Navegação
            </p>
            <ul className="space-y-2 text-sm">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li>
                <button
                  type="button"
                  onClick={onOpenContactModal}
                  className="hover:text-white transition-colors text-left"
                >
                  Fale Conosco
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Address & Contact */}
          <div className="lg:col-span-5 space-y-4">
            <p className="text-xs font-semibold text-white uppercase tracking-wider">
              Localização & Contato
            </p>
            
            <div className="space-y-3 text-sm text-[#8ea5ae]">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#546d75] shrink-0 mt-1" />
                <span>
                  Estr. de Itapecerica, 679 - Vila Nova das Belezas,
                  <br />
                  São Paulo - SP, 05835-003
                </span>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#546d75] shrink-0" />
                <a
                  href="tel:+551158194215"
                  className="text-white hover:text-[#9fc4d1] font-medium transition-colors"
                >
                  (11) 5819-4215
                </a>
              </div>

              <div className="flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-[#546d75] shrink-0" />
                <span>Abre às 18:30 · Refeição no local</span>
              </div>
            </div>

            {/* Social / Direct Channel Hub */}
            <div className="pt-2 flex flex-wrap items-center gap-3">
              <a
                href={googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-[#c0d4dc] bg-[#141f23] hover:bg-[#1c2c31] border border-[#253940] rounded-lg transition-colors"
              >
                <span>Google Maps</span>
                <ExternalLink className="w-3 h-3 text-[#7998a4]" />
              </a>

              <a
                href="https://wa.me/551158194215"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-[#c0d4dc] bg-[#141f23] hover:bg-[#1c2c31] border border-[#253940] rounded-lg transition-colors"
              >
                <MessageCircle className="w-3 h-3 text-emerald-400" />
                <span>WhatsApp</span>
              </a>

              <button
                type="button"
                onClick={onOpenContactModal}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-[#c0d4dc] bg-[#141f23] hover:bg-[#1c2c31] border border-[#253940] rounded-lg transition-colors"
              >
                <span>Instagram / Contato</span>
              </button>
            </div>

          </div>

        </div>

        {/* Bottom Legal Notice */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#6e8790]">
          <p>© NOKA Sushi — Todos os direitos reservados.</p>
          <div className="flex items-center gap-4">
            <span>Restaurante Japonês</span>
            <span>·</span>
            <span>Vila Nova das Belezas - SP</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
