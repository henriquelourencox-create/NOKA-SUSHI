import React from 'react';
import { Sparkles, Layers, Building2, UserCheck } from 'lucide-react';

export const Experience: React.FC = () => {
  const pillars = [
    {
      num: '01',
      title: 'SABORES FRESCOS',
      description:
        'Culinária japonesa com destaque para a qualidade e frescor dos pratos.',
      icon: <Sparkles className="w-5 h-5 text-[#8eb0bc]" />,
    },
    {
      num: '02',
      title: 'VARIEDADE',
      description:
        'Uma experiência gastronômica com diferentes opções para diferentes momentos.',
      icon: <Layers className="w-5 h-5 text-[#8eb0bc]" />,
    },
    {
      num: '03',
      title: 'AMBIENTE',
      description:
        'Um espaço bonito, confortável e convidativo para aproveitar a experiência.',
      icon: <Building2 className="w-5 h-5 text-[#8eb0bc]" />,
    },
    {
      num: '04',
      title: 'ATENDIMENTO',
      description:
        'Uma equipe reconhecida pelos clientes pela atenção, educação e agilidade.',
      icon: <UserCheck className="w-5 h-5 text-[#8eb0bc]" />,
    },
  ];

  return (
    <section className="py-20 md:py-28 bg-[#0c1315] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-2xl mx-auto text-center space-y-3 mb-14">
          <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider text-[#8daab4] uppercase">
            <span className="w-4 h-[1px] bg-[#546d75]" />
            <span>Experiência Gastronômica</span>
            <span className="w-4 h-[1px] bg-[#546d75]" />
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-white font-display">
            Feito para ser apreciado.
          </h2>
          <p className="text-sm sm:text-base text-[#92a8b0]">
            Cada detalhe pensado para transformar sua refeição em um momento agradável e memorável.
          </p>
        </div>

        {/* 4 Pillar Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((pillar) => (
            <div
              key={pillar.num}
              className="group relative p-6 rounded-2xl bg-[#131d20] border border-[#23353b] hover:border-[#4d6a74] transition-all duration-300 flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono font-bold text-[#62818c] group-hover:text-[#88b0bd] transition-colors">
                    {pillar.num}
                  </span>
                  <div className="p-2 rounded-xl bg-[#1b282d] border border-[#2b3e45] group-hover:bg-[#25363c] transition-colors">
                    {pillar.icon}
                  </div>
                </div>

                <div className="space-y-2">
                  <h3 className="text-base font-bold text-white tracking-wide font-display">
                    {pillar.title}
                  </h3>
                  <p className="text-sm text-[#92a7af] leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-[#1e2e33] flex items-center justify-between text-xs text-[#698691]">
                <span>NOKA Sushi</span>
                <span className="w-1.5 h-1.5 rounded-full bg-[#546d75]" />
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
