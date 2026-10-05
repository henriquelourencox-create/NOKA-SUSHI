import React from 'react';
import { Star, Utensils, Sparkles, HeartHandshake, CheckCircle2 } from 'lucide-react';

export const TrustBar: React.FC = () => {
  const trustPoints = [
    {
      icon: <Star className="w-4 h-4 text-amber-400 fill-amber-400" />,
      label: '★ 4,9 no Google',
      desc: 'Excelência reconhecida',
    },
    {
      icon: <CheckCircle2 className="w-4 h-4 text-[#88a9b4]" />,
      label: '671 avaliações',
      desc: 'Clientes satisfeitos',
    },
    {
      icon: <Utensils className="w-4 h-4 text-[#88a9b4]" />,
      label: 'Culinária Japonesa',
      desc: 'Peixes nobres e frescos',
    },
    {
      icon: <Sparkles className="w-4 h-4 text-[#88a9b4]" />,
      label: 'Ambiente Aconchegante',
      desc: 'Conforto e sofisticação',
    },
    {
      icon: <HeartHandshake className="w-4 h-4 text-[#88a9b4]" />,
      label: 'Atendimento Atencioso',
      desc: 'Equipe cordial e ágil',
    },
  ];

  return (
    <section className="border-y border-[#233338] bg-[#121b1e]/90 py-5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6 divide-y sm:divide-y-0 sm:divide-x divide-[#233338]">
          {trustPoints.map((item, idx) => (
            <div
              key={idx}
              className={`flex items-center gap-3 pt-3 sm:pt-0 ${
                idx > 0 ? 'sm:pl-4 lg:pl-6' : ''
              }`}
            >
              <div className="p-2 rounded-lg bg-[#192529] border border-[#2c3f45] shrink-0">
                {item.icon}
              </div>
              <div className="min-w-0">
                <p className="text-sm font-semibold text-white tracking-tight truncate">
                  {item.label}
                </p>
                <p className="text-xs text-[#899fa7] truncate">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
