import React from 'react';
import { Star, ExternalLink, Quote, ThumbsUp, CheckCircle } from 'lucide-react';

export const Reviews: React.FC = () => {
  // Real reviews strictly from the prompt
  const reviews = [
    {
      id: 'rev-1',
      rating: 5,
      comment:
        '“Comida maravilhosa e todos os garçons e atendentes foram super atenciosos...”',
      highlights: ['Atendimento Excepcional', 'Comida Maravilhosa'],
      source: 'Avaliação via Google Maps',
    },
    {
      id: 'rev-2',
      rating: 5,
      comment:
        '“Amei a experiência do local! Um ambiente aconchegante, iluminação perfeita...”',
      highlights: ['Ambiente Aconchegante', 'Iluminação Perfeita', 'Atendimento'],
      source: 'Avaliação via Google Maps',
    },
    {
      id: 'rev-3',
      rating: 5,
      comment:
        '“Ambiente super agradável, atendimento rápido e gentil. Comida boa...”',
      highlights: ['Ambiente Agradável', 'Atendimento Rápido e Gentil', 'Comida Boa'],
      source: 'Avaliação via Google Maps',
    },
  ];

  const googleMapsReviewsUrl =
    'https://www.google.com/maps/search/?api=1&query=NOKA+Sushi+Estr.+de+Itapecerica,+679+-+Vila+Nova+das+Belezas,+S%C3%A3o+Paulo+-+SP,+05835-003';

  return (
    <section id="avaliacoes" className="py-20 md:py-28 bg-[#0f1719] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header with Google Score Lockup */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-14">
          <div className="lg:col-span-8 space-y-3">
            <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider text-[#8daab4] uppercase">
              <span className="w-4 h-[1px] bg-[#546d75]" />
              <span>Opinião dos Clientes</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-white font-display">
              Quem conhece, recomenda.
            </h2>
            <p className="text-sm sm:text-base text-[#92a8b0] max-w-xl">
              A satisfação dos nossos clientes é o reflexo da dedicação diária à comida fresca, ambiente acolhedor e atendimento impecável.
            </p>
          </div>

          <div className="lg:col-span-4 lg:text-right">
            <div className="inline-flex items-center gap-4 p-4 rounded-2xl bg-[#141f22] border border-[#263a40]">
              <div className="text-left">
                <div className="flex items-center gap-1.5 text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400" />
                  ))}
                </div>
                <p className="text-xs text-[#8aa1a9] mt-1">671 avaliações no Google</p>
              </div>
              <div className="border-l border-[#293d44] pl-4">
                <span className="text-2xl sm:text-3xl font-bold text-white font-display">
                  4,9
                </span>
                <span className="text-xs text-[#718d96]"> / 5.0</span>
              </div>
            </div>
          </div>
        </div>

        {/* 3 Authentic Reviews */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {reviews.map((rev) => (
            <div
              key={rev.id}
              className="p-7 rounded-2xl bg-[#131d20] border border-[#23353b] hover:border-[#4d6b75] transition-all flex flex-col justify-between"
            >
              <div className="space-y-4">
                {/* Star rating & quote icon */}
                <div className="flex items-center justify-between">
                  <div className="flex text-amber-400 gap-0.5">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400" />
                    ))}
                  </div>
                  <Quote className="w-5 h-5 text-[#546d75]/60" />
                </div>

                {/* Comment */}
                <p className="text-base text-[#d1dce0] italic leading-relaxed">
                  {rev.comment}
                </p>

                {/* Key highlights mentioned in this review */}
                <div className="pt-2 flex flex-wrap gap-2 text-xs">
                  {rev.highlights.map((h, i) => (
                    <span
                      key={i}
                      className="text-[11px] font-medium text-[#9bb3bc] bg-[#1a262a] border border-[#28393e] px-2.5 py-1 rounded-md"
                    >
                      {h}
                    </span>
                  ))}
                </div>
              </div>

              {/* Source attribution */}
              <div className="mt-6 pt-4 border-t border-[#1e2e33] flex items-center justify-between text-xs text-[#748f99]">
                <div className="flex items-center gap-1.5">
                  <CheckCircle className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Avaliação Verificada</span>
                </div>
                <span>Google</span>
              </div>
            </div>
          ))}
        </div>

        {/* Action button */}
        <div className="text-center">
          <a
            href={googleMapsReviewsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 text-xs sm:text-sm font-semibold text-white bg-[#172327] hover:bg-[#203137] border border-[#2d4249] rounded-xl transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#546d75]"
          >
            <span>VER TODAS AS AVALIAÇÕES NO GOOGLE</span>
            <ExternalLink className="w-4 h-4 text-[#8baab4]" />
          </a>
        </div>

      </div>
    </section>
  );
};
