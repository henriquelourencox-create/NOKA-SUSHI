import React, { useState } from 'react';
import { Camera, X, Maximize2, Sparkles } from 'lucide-react';
import ambianceImg from '../assets/images/restaurant_japanese_ambiance_1791225890202.jpg';
import sushiPlatterImg from '../assets/images/hero_sushi_platter_1791225860161.jpg';
import sashimiImg from '../assets/images/sashimi_tuna_salmon_1791225869952.jpg';
import dessertImg from '../assets/images/creme_papaya_dessert_1791225879095.jpg';

export const Gallery: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<{
    src: string;
    title: string;
    caption: string;
  } | null>(null);

  const galleryItems = [
    {
      src: ambianceImg,
      title: 'Ambiente Aconchegante',
      caption: 'Espaço confortável e acolhedor com iluminação suave para seu jantar.',
      span: 'col-span-1 md:col-span-2 lg:col-span-2 row-span-2',
      aspect: 'aspect-[16/10] md:aspect-auto md:h-full',
    },
    {
      src: sushiPlatterImg,
      title: 'Seleção Premium de Sushis',
      caption: 'Combinações preparadas com peixes frescos selecionados diariamente.',
      span: 'col-span-1 md:col-span-1 lg:col-span-1',
      aspect: 'aspect-[4/3]',
    },
    {
      src: sashimiImg,
      title: 'Sashimi de Atum & Salmão',
      caption: 'Cortes nobres com precisão e frescor inconfundível.',
      span: 'col-span-1 md:col-span-1 lg:col-span-1',
      aspect: 'aspect-[4/3]',
    },
    {
      src: dessertImg,
      title: 'Creme Papaya',
      caption: 'Sobremesa clássica com licor de cassis para finalizar sua refeição.',
      span: 'col-span-1 md:col-span-2 lg:col-span-1',
      aspect: 'aspect-[4/3]',
    },
  ];

  return (
    <section className="py-20 md:py-28 bg-[#0c1214] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-2xl mx-auto text-center space-y-3 mb-14">
          <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider text-[#8daab4] uppercase">
            <span className="w-4 h-[1px] bg-[#546d75]" />
            <span>Espaço & Pratos</span>
            <span className="w-4 h-[1px] bg-[#546d75]" />
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-white font-display">
            Conheça o ambiente
          </h2>
          <p className="text-sm sm:text-base text-[#92a8b0]">
            Um refúgio acolhedor na Estrada de Itapecerica para apreciar o melhor da gastronomia japonesa.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-10">
          {galleryItems.map((item, idx) => (
            <div
              key={idx}
              onClick={() => setSelectedImage(item)}
              className={`group relative rounded-2xl overflow-hidden bg-[#141e21] border border-[#23353b] hover:border-[#546d75] cursor-pointer transition-all duration-300 ${item.span}`}
            >
              <div className={`${item.aspect} w-full overflow-hidden`}>
                <img
                  src={item.src}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Overlay with subtle scrim */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0e1619]/90 via-[#0e1619]/20 to-transparent opacity-80 group-hover:opacity-95 transition-opacity" />

              {/* Information bottom caption */}
              <div className="absolute bottom-0 left-0 right-0 p-5 flex items-end justify-between">
                <div className="space-y-1">
                  <h3 className="text-base font-bold text-white font-display">
                    {item.title}
                  </h3>
                  <p className="text-xs text-[#9eb2b9] line-clamp-1 max-w-sm">
                    {item.caption}
                  </p>
                </div>
                <div className="p-2 rounded-lg bg-[#141f22]/80 backdrop-blur-md text-[#9eb5bf] group-hover:text-white border border-[#2b3e45] shrink-0">
                  <Maximize2 className="w-4 h-4" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Tour 360 Banner Callout */}
        <div className="p-6 rounded-2xl bg-gradient-to-r from-[#142024] to-[#121c1f] border border-[#283c44] flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="space-y-1">
            <div className="flex items-center justify-center sm:justify-start gap-2 text-xs font-semibold text-[#8ca8b3]">
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              <span>Experiência Virtual Interativa</span>
            </div>
            <p className="text-base font-bold text-white font-display">
              Quer conhecer o salão completo em todos os ângulos?
            </p>
            <p className="text-xs text-[#8da2ab]">
              Acesse nosso Tour Virtual 360° e sinta-se dentro do NOKA Sushi.
            </p>
          </div>

          <a
            href="#tour360"
            className="inline-flex items-center justify-center gap-2 px-5 py-2.5 text-xs sm:text-sm font-semibold text-white bg-[#546d75] hover:bg-[#62818c] border border-[#70909c]/40 rounded-xl transition-all shadow-md shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#546d75] whitespace-nowrap"
          >
            <span>Ver em 360°</span>
            <span aria-hidden="true">↓</span>
          </a>
        </div>

      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div
            className="relative max-w-4xl w-full bg-[#11191c] border border-[#293d44] rounded-2xl overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 z-10 p-2 rounded-full bg-black/60 text-white hover:bg-black/80 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
              aria-label="Fechar ampliação"
            >
              <X className="w-5 h-5" />
            </button>

            <img
              src={selectedImage.src}
              alt={selectedImage.title}
              className="w-full max-h-[70vh] object-contain bg-black"
            />

            <div className="p-6 bg-[#11191c] border-t border-[#23353b]">
              <h3 className="text-lg font-bold text-white font-display">
                {selectedImage.title}
              </h3>
              <p className="text-sm text-[#92a8b0] mt-1">
                {selectedImage.caption}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
