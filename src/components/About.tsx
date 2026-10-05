import React from 'react';
import { Award, Heart, Sparkles, Utensils } from 'lucide-react';
import sashimiImg from '../assets/images/sashimi_tuna_salmon_1791225869952.jpg';

interface AboutProps {
  onOpenMenu: () => void;
}

export const About: React.FC<AboutProps> = ({ onOpenMenu }) => {
  return (
    <section id="sobre" className="py-20 md:py-28 bg-[#0f1719] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Image Showcase */}
          <div className="lg:col-span-5 order-2 lg:order-1">
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden border border-[#273a40] bg-[#141f22] shadow-xl shadow-black/40 group">
                <img
                  src={sashimiImg}
                  alt="Sashimi de Atum e Salmão frescos servidos no NOKA Sushi"
                  className="w-full aspect-[4/3] object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0d1416]/80 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-4 left-4 right-4 bg-[#141e21]/90 backdrop-blur-md p-3.5 rounded-xl border border-[#2b3e44]">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-semibold text-white">Sashimi de Atum e Salmão</span>
                    <span className="text-[#8ba2aa]">Destaque da Casa</span>
                  </div>
                </div>
              </div>

              {/* Minimal floating quality stamp */}
              <div className="absolute -top-4 -right-4 bg-[#546d75] text-white p-3 rounded-xl border border-[#7495a1]/40 shadow-lg hidden sm:flex items-center gap-2 text-xs font-semibold">
                <Award className="w-4 h-4 text-amber-300" />
                <span>Nota 4,9 · 671 Avaliações</span>
              </div>
            </div>
          </div>

          {/* Right Column: Editorial Copy */}
          <div className="lg:col-span-7 order-1 lg:order-2 space-y-6">
            <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider text-[#8daab4] uppercase">
              <span className="w-6 h-[1px] bg-[#546d75]" />
              <span>Sobre o Restaurante</span>
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-white font-display text-balance leading-tight">
              Uma experiência que vai além do prato.
            </h2>

            <div className="space-y-4 text-[#a3b7be] text-base leading-relaxed">
              <p>
                O <strong className="text-white font-medium">NOKA Sushi</strong> reúne culinária japonesa, ambiente acolhedor e atendimento atencioso para proporcionar uma experiência especial em cada visita.
              </p>
              <p>
                Com uma avaliação de 4,9 estrelas baseada em centenas de avaliações, o restaurante é reconhecido pelos clientes pela qualidade dos pratos, frescor dos ingredientes, ambiente agradável e atendimento cuidadoso.
              </p>
            </div>

            {/* Pillar highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-xl bg-[#141e22] border border-[#25373d] flex items-start gap-3">
                <div className="p-2 rounded-lg bg-[#1b282d] text-[#7ea0ac] shrink-0">
                  <Utensils className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-white">Culinária Cuidadosa</h3>
                  <p className="text-xs text-[#8ca3ab] mt-0.5">Preparo minucioso e peixes frescos de alto padrão.</p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-[#141e22] border border-[#25373d] flex items-start gap-3">
                <div className="p-2 rounded-lg bg-[#1b282d] text-[#7ea0ac] shrink-0">
                  <Heart className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-white">Atendimento Humano</h3>
                  <p className="text-xs text-[#8ca3ab] mt-0.5">Equipe atenciosa, cordial e prestativa.</p>
                </div>
              </div>
            </div>

            <div className="pt-2">
              <button
                type="button"
                onClick={onOpenMenu}
                className="inline-flex items-center gap-2 text-sm font-semibold text-[#a8c6d1] hover:text-white transition-colors"
              >
                <span>Conhecer nossos pratos e opções</span>
                <span aria-hidden="true">→</span>
              </button>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
