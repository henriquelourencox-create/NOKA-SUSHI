import React from 'react';
import { Star, MapPin, DollarSign, UtensilsCrossed, ArrowRight } from 'lucide-react';
import heroSushiImg from '../assets/images/hero_sushi_platter_1791225860161.jpg';

interface HeroProps {
  onOpenMenu: () => void;
  onScrollToLocation: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenMenu, onScrollToLocation }) => {
  return (
    <section id="inicio" className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[500px] bg-radial from-[#546d75]/15 via-transparent to-transparent pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Copy, Ratings & Conversion CTAs */}
          <div className="lg:col-span-6 space-y-6">
            
            {/* Meta Trust Badge Line */}
            <div className="flex flex-wrap items-center gap-3 text-xs sm:text-sm text-[#b2c2c7]">
              <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#182428] border border-[#2a3c42]">
                <div className="flex text-amber-400">
                  <Star className="w-4 h-4 fill-amber-400" />
                </div>
                <span className="font-semibold text-white">4,9</span>
                <span className="text-[#8ba2aa]">·</span>
                <span>671 avaliações no Google</span>
              </div>
              <span className="hidden sm:inline text-[#3a4f56]">|</span>
              <div className="flex items-center gap-1 text-[#9fb3ba]">
                <DollarSign className="w-3.5 h-3.5 text-[#6f909b]" />
                <span>R$ 120–200 por pessoa</span>
              </div>
            </div>

            {/* Main Headline (H1 - Single H1 on page) */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-bold tracking-tight text-white leading-[1.15] font-display text-balance">
              Uma experiência japonesa para apreciar cada detalhe.
            </h1>

            {/* Secondary Headline & Subtext */}
            <div className="space-y-3">
              <p className="text-lg sm:text-xl font-medium text-[#c8d4d8] leading-relaxed">
                Sabores frescos, ambiente acolhedor e uma experiência que conquista.
              </p>
              <p className="text-sm sm:text-base text-[#92a8b0] leading-relaxed max-w-xl">
                Conheça o <strong className="text-white font-semibold">NOKA Sushi</strong> e descubra uma experiência gastronômica japonesa autêntica em Vila Nova das Belezas, São Paulo.
              </p>
            </div>

            {/* Quick Details Chips */}
            <div className="flex flex-wrap items-center gap-y-2 gap-x-4 text-xs text-[#8fa7af] pt-1">
              <span className="flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-[#546d75]" />
                Estr. de Itapecerica, 679
              </span>
              <span className="text-[#364950]">·</span>
              <span>Refeição no local</span>
              <span className="text-[#364950]">·</span>
              <span>Abre às 18:30</span>
            </div>

            {/* CTAs */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
              <button
                type="button"
                onClick={onOpenMenu}
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 text-sm font-semibold text-white bg-[#546d75] hover:bg-[#62818c] active:bg-[#465c63] border border-[#72929e]/50 rounded-xl shadow-lg shadow-[#546d75]/20 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#546d75]"
              >
                <UtensilsCrossed className="w-4 h-4" />
                <span>VER CARDÁPIO</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                type="button"
                onClick={onScrollToLocation}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold text-[#e1ebef] bg-[#172226] hover:bg-[#203036] hover:text-white border border-[#2e4249] rounded-xl transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#546d75]"
              >
                <MapPin className="w-4 h-4 text-[#89a8b3]" />
                <span>COMO CHEGAR</span>
              </button>
            </div>

          </div>

          {/* Right Column: Culinary Visual Showcase */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-2xl overflow-hidden border border-[#293d43] bg-[#141e21] shadow-2xl shadow-black/60 group">
              <img
                src={heroSushiImg}
                alt="Seleção de sushis e sashimis frescos preparados no NOKA Sushi"
                className="w-full aspect-[16/10] sm:aspect-[16/9] object-cover transition-transform duration-700 group-hover:scale-105"
                loading="eager"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0e1618]/90 via-[#0e1618]/20 to-transparent pointer-events-none" />
              
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs text-[#dbe5e8] backdrop-blur-md bg-[#131d20]/80 p-3 rounded-xl border border-[#2a3c42]">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="font-medium text-white">Ingredientes Frescos Selecionados</span>
                </div>
                <span className="text-[#8ba1a8]">Tradição & Criação</span>
              </div>
            </div>

            {/* Subtle decorative background glow */}
            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-[#546d75]/20 rounded-full blur-3xl pointer-events-none" />
          </div>

        </div>
      </div>
    </section>
  );
};
