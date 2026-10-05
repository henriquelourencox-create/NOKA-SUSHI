import React, { useState } from 'react';
import { X, Sparkles, Search, UtensilsCrossed, Phone, Info } from 'lucide-react';
import sashimiImg from '../assets/images/sashimi_tuna_salmon_1791225869952.jpg';
import dessertImg from '../assets/images/creme_papaya_dessert_1791225879095.jpg';

interface FullMenuModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenContact: () => void;
}

export const FullMenuModal: React.FC<FullMenuModalProps> = ({
  isOpen,
  onClose,
  onOpenContact,
}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState<string>('todos');

  if (!isOpen) return null;

  const confirmedItems = [
    {
      id: '1',
      name: 'Sashimi de Atum e Salmão',
      category: 'sashimi',
      categoryLabel: 'Sashimis & Peixes Frescos',
      description:
        'Cortes nobres e frescos de atum e salmão selecionados com padrão de excelência.',
      highlight: true,
      image: sashimiImg,
      status: 'Confirmado no Google / Elogiado nas Avaliações',
    },
    {
      id: '2',
      name: 'Creme Papaya',
      category: 'sobremesa',
      categoryLabel: 'Sobremesas',
      description:
        'Clássico creme aveludado de mamão papaya servido com licor de cassis.',
      highlight: true,
      image: dessertImg,
      status: 'Confirmado no Google / Elogiado nas Avaliações',
    },
  ];

  const menuSections = [
    {
      id: 'rodizio',
      title: 'Rodízio Japonês & Combinados',
      description:
        'Ampla variedade de sushis, sashimis, pratos quentes e criações do sushiman servidos à vontade no salão.',
      details: 'Faixa média R$ 120–200 por pessoa · Consulte os combinados do dia no salão',
    },
    {
      id: 'sashimi',
      title: 'Sashimis Especiais',
      description:
        'Fatias de peixes frescos com textura e corte tradicional.',
      details: 'Destaque: Atum e Salmão frescos servidos diariamente',
    },
    {
      id: 'quentes',
      title: 'Entradas & Pratos Quentes',
      description:
        'Opções preparadas na hora para complementar a sua experiência.',
      details: 'Consulte as opções quentes disponíveis no dia',
    },
    {
      id: 'sobremesa',
      title: 'Sobremesas da Casa',
      description:
        'Finalizações doces e refrescantes.',
      details: 'Destaque: Creme Papaya com licor de cassis',
    },
  ];

  const filteredConfirmed = confirmedItems.filter((item) => {
    const matchesSearch =
      item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory =
      activeCategory === 'todos' || item.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6 overflow-y-auto"
      onClick={onClose}
    >
      <div
        className="bg-[#11191c] border border-[#263a40] rounded-2xl max-w-3xl w-full max-h-[90vh] flex flex-col shadow-2xl overflow-hidden animate-fadeIn my-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="p-5 sm:p-6 border-b border-[#213339] flex items-center justify-between bg-[#141f23]">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <span className="p-1.5 rounded-lg bg-[#546d75]/30 text-[#8eb2be]">
                <UtensilsCrossed className="w-4 h-4" />
              </span>
              <h2 className="text-xl sm:text-2xl font-bold text-white font-display">
                Cardápio & Experiência
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-[#8ba2aa]">
              NOKA Sushi · Culinária Japonesa em Vila Nova das Belezas
            </p>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="p-2 text-[#90a6ae] hover:text-white hover:bg-[#1f2f35] rounded-xl transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#546d75]"
            aria-label="Fechar cardápio"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Search and Category Filter Bar */}
        <div className="p-4 sm:p-5 border-b border-[#1e2e33] bg-[#0e1618] space-y-3">
          <div className="relative">
            <Search className="w-4 h-4 text-[#6e8992] absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Buscar itens do cardápio (ex: sashimi, salmão, papaya)..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 bg-[#141f23] border border-[#263940] rounded-xl text-xs sm:text-sm text-white placeholder-[#68828b] focus:outline-none focus:border-[#546d75] focus:ring-1 focus:ring-[#546d75]"
            />
          </div>

          <div className="flex items-center gap-2 overflow-x-auto pb-1 text-xs">
            {[
              { id: 'todos', label: 'Todos os Destaques' },
              { id: 'sashimi', label: 'Sashimis & Peixes' },
              { id: 'sobremesa', label: 'Sobremesas' },
            ].map((tab) => (
              <button
                type="button"
                key={tab.id}
                onClick={() => setActiveCategory(tab.id)}
                className={`px-3 py-1.5 rounded-lg whitespace-nowrap transition-colors ${
                  activeCategory === tab.id
                    ? 'bg-[#546d75] text-white font-medium'
                    : 'bg-[#152125] text-[#8fa7af] hover:text-white border border-[#23353b]'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-5 sm:p-6 overflow-y-auto space-y-8 flex-1">
          
          {/* Notice banner */}
          <div className="p-4 rounded-xl bg-[#152226] border border-[#273b42] flex items-start gap-3 text-xs text-[#9eb2b9]">
            <Info className="w-4 h-4 text-[#7b9ea9] shrink-0 mt-0.5" />
            <div>
              <strong className="text-white font-medium">Refeição no local:</strong> Os pratos são preparados na hora com peixes frescos do dia. A faixa média é de R$ 120–200 por pessoa. Para dúvidas sobre opções do dia ou restrições alimentares, consulte nossos atendentes.
            </div>
          </div>

          {/* Confirmed High-Profile Dishes */}
          <div className="space-y-4">
            <h3 className="text-sm font-bold text-white uppercase tracking-wider flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-amber-400" />
              <span>Pratos em Evidência</span>
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {filteredConfirmed.map((dish) => (
                <div
                  key={dish.id}
                  className="rounded-xl overflow-hidden bg-[#152226] border border-[#273b42] flex flex-col"
                >
                  <img
                    src={dish.image}
                    alt={dish.name}
                    className="w-full aspect-[16/10] object-cover"
                    loading="lazy"
                  />
                  <div className="p-4 space-y-2 flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between">
                        <h4 className="text-base font-bold text-white font-display">
                          {dish.name}
                        </h4>
                      </div>
                      <p className="text-xs text-[#90a8b0] mt-1 leading-relaxed">
                        {dish.description}
                      </p>
                    </div>
                    <div className="pt-3 border-t border-[#203137] text-[11px] text-[#718d96]">
                      {dish.status}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Full Structure Breakdown for Salão */}
          <div className="space-y-4 pt-2">
            <h3 className="text-sm font-bold text-white uppercase tracking-wider">
              Categorias Servidas no Salão
            </h3>

            <div className="space-y-3">
              {menuSections.map((sec) => (
                <div
                  key={sec.id}
                  className="p-4 rounded-xl bg-[#141f23] border border-[#23353b] space-y-1"
                >
                  <div className="flex items-center justify-between">
                    <h4 className="text-sm font-semibold text-white">
                      {sec.title}
                    </h4>
                    <span className="text-[11px] text-[#7ea0ac] font-medium">
                      Salão
                    </span>
                  </div>
                  <p className="text-xs text-[#8da4ac]">{sec.description}</p>
                  <p className="text-[11px] text-[#6d8892] pt-1">
                    {sec.details}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Modal Footer */}
        <div className="p-4 sm:p-5 border-t border-[#213339] bg-[#131d20] flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="text-xs text-[#8ca1a8] text-center sm:text-left">
            Abre às 18:30 · Estr. de Itapecerica, 679
          </div>
          <div className="flex items-center gap-2 w-full sm:w-auto">
            <a
              href="tel:+551158194215"
              className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-4 py-2 text-xs font-semibold text-[#dfeaee] bg-[#1b282c] hover:bg-[#25373d] border border-[#2e4249] rounded-xl transition-all"
            >
              <Phone className="w-3.5 h-3.5 text-[#8eb0bc]" />
              <span>(11) 5819-4215</span>
            </a>
            <button
              type="button"
              onClick={() => {
                onClose();
                onOpenContact();
              }}
              className="flex-1 sm:flex-none px-4 py-2 text-xs font-semibold text-white bg-[#546d75] hover:bg-[#62818c] rounded-xl transition-all"
            >
              Fale Conosco
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
