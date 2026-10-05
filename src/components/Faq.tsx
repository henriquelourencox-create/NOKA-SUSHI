import React, { useState } from 'react';
import { ChevronDown, HelpCircle, Leaf, Accessibility, Car, Clock, Utensils, MessageCircle } from 'lucide-react';

interface FaqItem {
  id: string;
  question: string;
  answer: string;
  icon: React.ReactNode;
  category: string;
}

interface FaqProps {
  onOpenContactModal: () => void;
}

export const Faq: React.FC<FaqProps> = ({ onOpenContactModal }) => {
  const [openId, setOpenId] = useState<string | null>('faq-1');

  const faqList: FaqItem[] = [
    {
      id: 'faq-1',
      question: 'O restaurante possui opções vegetarianas ou adaptações?',
      answer:
        'Sim. Dispomos de opções vegetarianas como sushis à base de vegetais e cogumelos, entradas quentes (como shimeji e edamame quando disponíveis) e criações especiais. Ao chegar ao salão, informe nossos atendentes e sushimen sobre suas preferências para que possamos preparar opções adequadas ao seu paladar.',
      icon: <Leaf className="w-4 h-4 text-emerald-400" />,
      category: 'Cardápio & Preferências',
    },
    {
      id: 'faq-2',
      question: 'O espaço possui acessibilidade para pessoas com mobilidade reduzida?',
      answer:
        'Sim. O NOKA Sushi foi planejado para oferecer conforto e acessibilidade a todos os clientes, contando com ambiente térreo, corredores de circulação confortáveis e mesas com espaçamento adequado para cadeirantes e pessoas com mobilidade reduzida.',
      icon: <Accessibility className="w-4 h-4 text-[#8eaec0]" />,
      category: 'Acessibilidade & Estrutura',
    },
    {
      id: 'faq-3',
      question: 'Como funciona o estacionamento e acesso ao NOKA Sushi?',
      answer:
        'O restaurante está localizado na Estr. de Itapecerica, 679 - Vila Nova das Belezas, em São Paulo - SP (CEP 05835-003). A via conta com fácil acesso para veículos e aplicativos de transporte, além de opções de estacionamento e vagas nas proximidades.',
      icon: <Car className="w-4 h-4 text-[#8eaec0]" />,
      category: 'Localização & Estacionamento',
    },
    {
      id: 'faq-4',
      question: 'Qual é o horário de funcionamento do restaurante?',
      answer:
        'O NOKA Sushi abre para o jantar a partir das 18:30, oferecendo atendimento completo para refeição no local em um ambiente acolhedor e climatizado.',
      icon: <Clock className="w-4 h-4 text-[#8eaec0]" />,
      category: 'Horários & Atendimento',
    },
    {
      id: 'faq-5',
      question: 'Qual é a faixa de preço média por pessoa?',
      answer:
        'A faixa média informada pelos clientes é de R$ 120 a R$ 200 por pessoa, variando de acordo com as opções escolhidas (rodízio, combinados especiais, bebidas e sobremesas).',
      icon: <Utensils className="w-4 h-4 text-[#8eaec0]" />,
      category: 'Valores & Salão',
    },
    {
      id: 'faq-6',
      question: 'É necessário fazer reserva prévia para jantar no local?',
      answer:
        'O atendimento para refeição no local é realizado prioritariamente por ordem de chegada. Para dúvidas pontuais ou informações para grupos, você pode falar diretamente com nossa equipe pelo telefone (11) 5819-4215 ou WhatsApp.',
      icon: <HelpCircle className="w-4 h-4 text-[#8eaec0]" />,
      category: 'Reservas & Informações',
    },
  ];

  const toggleFaq = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section id="faq" className="py-20 md:py-28 bg-[#0b1113] relative overflow-hidden">
      {/* Background soft glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-80 bg-[#546d75]/10 blur-3xl pointer-events-none -z-10" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center space-y-3 mb-14">
          <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider text-[#8daab4] uppercase">
            <span className="w-4 h-[1px] bg-[#546d75]" />
            <span>Tire Suas Dúvidas</span>
            <span className="w-4 h-[1px] bg-[#546d75]" />
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-white font-display">
            Perguntas Frequentes
          </h2>
          <p className="text-sm sm:text-base text-[#92a8b0] max-w-xl mx-auto">
            Informações essenciais sobre opções do cardápio, acessibilidade, estacionamento e horários para planejar sua visita ao NOKA Sushi.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-3.5">
          {faqList.map((item) => {
            const isOpen = openId === item.id;
            return (
              <div
                key={item.id}
                className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                  isOpen
                    ? 'bg-[#131e21] border-[#4a6771] shadow-lg shadow-black/20'
                    : 'bg-[#11191c] border-[#223338] hover:border-[#354c54]'
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(item.id)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${item.id}`}
                  className="w-full p-5 sm:p-6 text-left flex items-start sm:items-center justify-between gap-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#546d75] group"
                >
                  <div className="flex items-start sm:items-center gap-3.5">
                    <div className="p-2 rounded-lg bg-[#182529] border border-[#2a3c42] shrink-0 mt-0.5 sm:mt-0">
                      {item.icon}
                    </div>
                    <div>
                      <span className="text-xs text-[#718f9a] font-medium block sm:inline-block sm:mr-2">
                        {item.category} ·
                      </span>
                      <span className="text-sm sm:text-base font-semibold text-white group-hover:text-[#a2c5d1] transition-colors font-display">
                        {item.question}
                      </span>
                    </div>
                  </div>

                  <div
                    className={`p-1.5 rounded-full bg-[#182428] text-[#8ea9b3] shrink-0 transition-transform duration-300 ${
                      isOpen ? 'rotate-180 text-white bg-[#546d75]' : ''
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div
                    id={`faq-answer-${item.id}`}
                    className="px-5 pb-5 sm:px-6 sm:pb-6 pt-0 text-sm text-[#a0b5bc] leading-relaxed border-t border-[#1e2d31]/60 mt-1 animate-fadeIn"
                  >
                    <p className="pt-3">{item.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Extra Question CTA Box */}
        <div className="mt-10 p-6 rounded-2xl bg-[#121b1e] border border-[#23353b] flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="space-y-1">
            <h3 className="text-base font-bold text-white font-display">
              Tem alguma outra dúvida?
            </h3>
            <p className="text-xs sm:text-sm text-[#8fa7af]">
              Nossa equipe está disponível para atendê-lo pelo telefone (11) 5819-4215 ou WhatsApp.
            </p>
          </div>

          <button
            type="button"
            onClick={onOpenContactModal}
            className="inline-flex items-center gap-2 px-5 py-2.5 text-xs sm:text-sm font-semibold text-white bg-[#546d75] hover:bg-[#62818c] active:bg-[#465c63] border border-[#72929e]/40 rounded-xl transition-all shadow-md shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#546d75] whitespace-nowrap"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Falar com Atendimento</span>
          </button>
        </div>
      </div>
    </section>
  );
};
