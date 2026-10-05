import React from 'react';
import { UtensilsCrossed, Navigation, MessageSquare, Star } from 'lucide-react';
import sushiPlatterImg from '../assets/images/hero_sushi_platter_1791225860161.jpg';

interface CtaFinalProps {
  onOpenMenu: () => void;
  onScrollToLocation: () => void;
  onOpenContactModal: () => void;
}

export const CtaFinal: React.FC<CtaFinalProps> = ({
  onOpenMenu,
  onScrollToLocation,
  onOpenContactModal,
}) => {
  return (
    <section className="py-20 md:py-28 bg-[#0b1012] relative overflow-hidden">
      
      {/* Background ambient gradient & image texture with dark overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={sushiPlatterImg}
          alt="Experiência gastronômica no NOKA Sushi"
          className="w-full h-full object-cover opacity-15"
          loading="lazy"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0b1012] via-[#0b1012]/90 to-[#0b1012]/95" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
        
        {/* Rating proof badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#162327] border border-[#2b3e45] text-xs text-[#b0c4cb]">
          <Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
          <span className="font-semibold text-white">4,9 no Google</span>
          <span className="text-[#556d76]">·</span>
          <span>671 avaliações de clientes</span>
        </div>

        {/* Headline & Description */}
        <div className="space-y-4 max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white font-display text-balance leading-tight">
            Seu próximo jantar especial pode começar aqui.
          </h2>
          <p className="text-base sm:text-lg text-[#9cb1b9] leading-relaxed max-w-2xl mx-auto">
            Conheça o NOKA Sushi, escolha seus favoritos e venha viver essa experiência.
          </p>
        </div>

        {/* 3 Main Action Buttons */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-4 pt-2">
          <button
            type="button"
            onClick={onOpenMenu}
            className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 text-sm font-semibold text-white bg-[#546d75] hover:bg-[#62818c] active:bg-[#465c63] border border-[#72929e]/50 rounded-xl shadow-xl shadow-[#546d75]/25 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#546d75]"
          >
            <UtensilsCrossed className="w-4 h-4" />
            <span>VER CARDÁPIO</span>
          </button>

          <button
            type="button"
            onClick={onScrollToLocation}
            className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold text-[#d4e4e9] bg-[#162226] hover:bg-[#203036] hover:text-white border border-[#2d4047] rounded-xl transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#546d75]"
          >
            <Navigation className="w-4 h-4 text-[#8baab4]" />
            <span>COMO CHEGAR</span>
          </button>

          <button
            type="button"
            onClick={onOpenContactModal}
            className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold text-[#d4e4e9] bg-[#162226] hover:bg-[#203036] hover:text-white border border-[#2d4047] rounded-xl transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#546d75]"
          >
            <MessageSquare className="w-4 h-4 text-[#8baab4]" />
            <span>FALE CONOSCO</span>
          </button>
        </div>

        {/* Quiet note */}
        <p className="text-xs text-[#6e8791] pt-4">
          Estr. de Itapecerica, 679 · Vila Nova das Belezas, São Paulo - SP · (11) 5819-4215
        </p>

      </div>
    </section>
  );
};
