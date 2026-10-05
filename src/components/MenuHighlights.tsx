import React, { useState } from 'react';
import { UtensilsCrossed, Sparkles, Plus, Eye } from 'lucide-react';
import sashimiImg from '../assets/images/sashimi_tuna_salmon_1791225869952.jpg';
import cremePapayaImg from '../assets/images/creme_papaya_dessert_1791225879095.jpg';

interface MenuHighlightsProps {
  onOpenFullMenu: () => void;
}

export const MenuHighlights: React.FC<MenuHighlightsProps> = ({ onOpenFullMenu }) => {
  const [activeTab, setActiveTab] = useState<'todos' | 'destaques' | 'sobremesas'>('todos');

  // Real items informed in the prompt
  const confirmedItems = [
    {
      id: 'sashimi-atum-salmao',
      name: 'Sashimi de Atum e Salmão',
      category: 'destaques',
      tag: 'Item em Destaque',
      image: sashimiImg,
      alt: 'Sashimi de Atum e Salmão frescos fatiados',
      note: 'Destaque no Google · Sushis & Sashimis frescos',
    },
    {
      id: 'creme-papaya',
      name: 'Creme Papaya',
      category: 'sobremesas',
      tag: 'Sobremesa em Destaque',
      image: cremePapayaImg,
      alt: 'Creme Papaya clássico com licor de cassis',
      note: 'Destaque no Google · Sobremesa clássica',
    },
  ];

  // Placeholder category structure prepared for future catalog updates without inventing fake prices
  const catalogCategories = [
    { name: 'Rodízio & Combinados', count: 'Consultar no local' },
    { name: 'Sashimis & Niguiris', count: 'Frescor diário' },
    { name: 'Uramakis & Hossusmakis', count: 'Variedade' },
    { name: 'Entradas & Pratos Quentes', count: 'Opções tradicionais' },
    { name: 'Sobremesas Especiais', count: 'Finalização doce' },
  ];

  const filteredItems =
    activeTab === 'todos'
      ? confirmedItems
      : confirmedItems.filter((i) => i.category === activeTab);

  return (
    <section id="cardapio" className="py-20 md:py-28 bg-[#0f1719] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider text-[#8daab4] uppercase">
              <span className="w-4 h-[1px] bg-[#546d75]" />
              <span>Gastronomia Japonesa</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-white font-display">
              Alguns destaques
            </h2>
            <p className="text-sm text-[#92a8b0] max-w-xl">
              Pratos e sobremesas que encantam nossos clientes e são amplamente elogiados em nossa avaliação 4,9 no Google.
            </p>
          </div>

          {/* Interactive filter tabs */}
          <div className="flex items-center gap-1.5 p-1 bg-[#152125] border border-[#253940] rounded-xl self-start md:self-auto">
            <button
              type="button"
              onClick={() => setActiveTab('todos')}
              className={`px-3.5 py-1.5 text-xs font-medium rounded-lg transition-colors ${
                activeTab === 'todos'
                  ? 'bg-[#546d75] text-white shadow-sm'
                  : 'text-[#9ab1ba] hover:text-white'
              }`}
            >
              Todos
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('destaques')}
              className={`px-3.5 py-1.5 text-xs font-medium rounded-lg transition-colors ${
                activeTab === 'destaques'
                  ? 'bg-[#546d75] text-white shadow-sm'
                  : 'text-[#9ab1ba] hover:text-white'
              }`}
            >
              Sashimis
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('sobremesas')}
              className={`px-3.5 py-1.5 text-xs font-medium rounded-lg transition-colors ${
                activeTab === 'sobremesas'
                  ? 'bg-[#546d75] text-white shadow-sm'
                  : 'text-[#9ab1ba] hover:text-white'
              }`}
            >
              Sobremesas
            </button>
          </div>
        </div>

        {/* Featured Dish Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {filteredItems.map((dish) => (
            <div
              key={dish.id}
              className="group rounded-2xl overflow-hidden bg-[#141e21] border border-[#25383e] hover:border-[#546d75] transition-all duration-300 flex flex-col justify-between"
            >
              <div className="relative aspect-[16/10] overflow-hidden bg-[#10191c]">
                <img
                  src={dish.image}
                  alt={dish.alt}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#141e21] via-transparent to-transparent pointer-events-none" />
                <div className="absolute top-4 left-4 bg-[#141e21]/80 backdrop-blur-md px-3 py-1 rounded-md text-xs font-medium text-[#c4d6dc] border border-[#2c3f46]">
                  {dish.tag}
                </div>
              </div>

              <div className="p-6 space-y-4">
                <div className="space-y-1">
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-bold text-white font-display">
                      {dish.name}
                    </h3>
                    <Sparkles className="w-4 h-4 text-[#759ba8]" />
                  </div>
                  <p className="text-xs text-[#8da4ac]">
                    {dish.note}
                  </p>
                </div>

                <div className="pt-3 border-t border-[#1e2e34] flex items-center justify-between text-xs text-[#9eb5be]">
                  <span>Servido fresco diariamente</span>
                  <span className="font-medium text-white flex items-center gap-1">
                    <UtensilsCrossed className="w-3.5 h-3.5 text-[#546d75]" />
                    Refeição no local
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Structured menu categories layout prepared for future data */}
        <div className="rounded-2xl bg-[#121b1e] border border-[#23353b] p-6 sm:p-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-[#23353b]">
            <div>
              <h3 className="text-lg font-bold text-white font-display">
                Variedade & Opções no Salão
              </h3>
              <p className="text-xs sm:text-sm text-[#8fa7af] mt-1">
                Conheça nossa seleção completa de sushis, sashimis, pratos quentes e rodízio.
              </p>
            </div>
            <button
              type="button"
              onClick={onOpenFullMenu}
              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 text-xs sm:text-sm font-semibold text-white bg-[#546d75] hover:bg-[#62818c] border border-[#72929e]/40 rounded-xl transition-all shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#546d75] whitespace-nowrap"
            >
              <Eye className="w-4 h-4" />
              <span>VER CARDÁPIO COMPLETO</span>
            </button>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 pt-6">
            {catalogCategories.map((cat, i) => (
              <button
                type="button"
                key={i}
                onClick={onOpenFullMenu}
                className="p-3.5 rounded-xl bg-[#172327] hover:bg-[#1f2f35] border border-[#2a3d44] hover:border-[#4b6770] text-left transition-colors group"
              >
                <p className="text-xs font-semibold text-white group-hover:text-[#a0c2ce] transition-colors">
                  {cat.name}
                </p>
                <p className="text-[11px] text-[#7b939c] mt-0.5">{cat.count}</p>
              </button>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
