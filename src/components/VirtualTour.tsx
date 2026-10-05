import React, { useState } from 'react';
import { Compass, Maximize2, ExternalLink, Sparkles, Eye, RotateCw, ShieldCheck } from 'lucide-react';

export const VirtualTour: React.FC = () => {
  const [isInteractive, setIsInteractive] = useState(false);
  const [isFullscreenModal, setIsFullscreenModal] = useState(false);

  const tourUrl =
    'https://meunegocio360.github.io/nokasushi/?fbclid=PAT01DUAUw0YpleHRuA2FlbQIxMABwZG9mAnNydGMGYXBwX2lkDzU2NzA2NzM0MzM1MjQyNwABpzg3f3oAH-eC53RyHiYWcg85JTdt-AbLZmPuSkk-efAveu85A0DUk8rTARbG_aem_MLWw6LblW1f_Er447vbDJQ';

  return (
    <section id="tour360" className="py-20 md:py-28 bg-[#0b1012] relative overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-full max-w-6xl h-96 bg-[#546d75]/15 blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-3 mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider text-[#8daab4] uppercase">
            <Compass className="w-4 h-4 text-[#759ba8]" />
            <span>Experiência Imersiva</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-white font-display">
            Tour Virtual 360°
          </h2>
          <p className="text-sm sm:text-base text-[#92a8b0] max-w-2xl mx-auto">
            Explore o ambiente do NOKA Sushi antes mesmo de sair de casa. Conheça nosso salão aconchegante, iluminação suave e mesas confortáveis em uma navegação interativa em 360 graus.
          </p>
        </div>

        {/* 360 Tour Viewer Container */}
        <div className="relative rounded-2xl overflow-hidden bg-[#121c1f] border border-[#263a40] shadow-2xl shadow-black/60">
          
          {/* Top Bar of Viewer */}
          <div className="p-4 bg-[#152327] border-b border-[#24373d] flex flex-wrap items-center justify-between gap-3 text-xs text-[#9db3bc]">
            <div className="flex items-center gap-2.5">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="font-semibold text-white">Ambiente NOKA Sushi 360°</span>
              <span className="text-[#556e77] hidden sm:inline">·</span>
              <span className="hidden sm:inline">Navegue arrastando na tela</span>
            </div>

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => setIsFullscreenModal(true)}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#1c2c31] hover:bg-[#253940] text-white transition-colors border border-[#2d424a] text-xs font-medium"
              >
                <Maximize2 className="w-3.5 h-3.5 text-[#8aaab5]" />
                <span>Modo Tela Cheia</span>
              </button>

              <a
                href={tourUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#546d75] hover:bg-[#62818c] text-white transition-colors text-xs font-semibold"
              >
                <span>Abrir Tour Oficial</span>
                <ExternalLink className="w-3 h-3 text-[#d1e5ec]" />
              </a>
            </div>
          </div>

          {/* iFrame Viewer Frame */}
          <div className="relative w-full aspect-[4/3] sm:aspect-[16/9] max-h-[620px] bg-[#0c1416]">
            {!isInteractive && (
              <div
                className="absolute inset-0 z-10 bg-gradient-to-t from-[#0e1619] via-[#0e1619]/40 to-transparent flex flex-col items-center justify-center p-6 text-center cursor-pointer group"
                onClick={() => setIsInteractive(true)}
              >
                <div className="p-4 rounded-2xl bg-[#142125]/90 backdrop-blur-md border border-[#2e4249] shadow-2xl space-y-4 max-w-md mx-auto group-hover:border-[#546d75] transition-all">
                  <div className="w-14 h-14 rounded-full bg-[#546d75]/30 text-[#9bc2ce] flex items-center justify-center mx-auto border border-[#546d75]/50 group-hover:scale-110 transition-transform">
                    <RotateCw className="w-7 h-7 text-white animate-spin-slow" />
                  </div>
                  <div className="space-y-1">
                    <h3 className="text-lg font-bold text-white font-display">
                      Iniciar Navegação em 360°
                    </h3>
                    <p className="text-xs text-[#90a8b0]">
                      Clique para carregar o visualizador 360° interativo e explorar todos os ângulos do restaurante.
                    </p>
                  </div>
                  <button
                    type="button"
                    className="w-full py-2.5 px-4 text-xs font-semibold text-white bg-[#546d75] hover:bg-[#63828d] rounded-xl transition-colors shadow-md"
                  >
                    Ativar Tour Interativo
                  </button>
                </div>
              </div>
            )}

            <iframe
              title="Tour Virtual 360 do NOKA Sushi"
              src={tourUrl}
              className="w-full h-full border-0"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer"
            />
          </div>

          {/* Bottom Features Strip */}
          <div className="p-4 sm:p-5 bg-[#10191c] border-t border-[#23353b] grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs text-[#8fa6ae]">
            <div className="flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-amber-400 shrink-0" />
              <span>Salão moderno e climatizado</span>
            </div>
            <div className="flex items-center gap-2">
              <Eye className="w-4 h-4 text-[#7b9ea9] shrink-0" />
              <span>Iluminação aconchegante para jantares</span>
            </div>
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Visão real e autêntica do restaurante</span>
            </div>
          </div>
        </div>

      </div>

      {/* Fullscreen Tour Lightbox */}
      {isFullscreenModal && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex flex-col"
        >
          <div className="p-4 bg-[#11191c] border-b border-[#25373d] flex items-center justify-between text-white">
            <div className="flex items-center gap-2 text-sm font-semibold">
              <Compass className="w-4 h-4 text-[#759ba8]" />
              <span>NOKA Sushi · Tour Virtual 360° em Tela Cheia</span>
            </div>
            <div className="flex items-center gap-3">
              <a
                href={tourUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#1f2e33] hover:bg-[#2a3e45] text-xs font-medium"
              >
                <span>Abrir em Nova Aba</span>
                <ExternalLink className="w-3 h-3 text-[#9bb8c3]" />
              </a>
              <button
                type="button"
                onClick={() => setIsFullscreenModal(false)}
                className="p-2 rounded-lg bg-[#1f2e33] hover:bg-[#2c4047] text-white text-xs font-semibold"
              >
                Fechar [✕]
              </button>
            </div>
          </div>

          <div className="flex-1 w-full h-full bg-black">
            <iframe
              title="Tour Virtual 360 Tela Cheia"
              src={tourUrl}
              className="w-full h-full border-0"
              allowFullScreen
            />
          </div>
        </div>
      )}
    </section>
  );
};
