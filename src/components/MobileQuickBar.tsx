import React from 'react';
import { UtensilsCrossed, Navigation, Phone } from 'lucide-react';

interface MobileQuickBarProps {
  onOpenMenu: () => void;
  onScrollToLocation: () => void;
}

export const MobileQuickBar: React.FC<MobileQuickBarProps> = ({
  onOpenMenu,
  onScrollToLocation,
}) => {
  return (
    <aside
      aria-label="Ações rápidas no celular"
      className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#0e1619]/95 backdrop-blur-md border-t border-[#25373d] px-3 py-2.5 shadow-2xl"
      style={{ maxHeight: '12vh' }}
    >
      <div className="flex items-center gap-2 max-w-md mx-auto">
        <button
          type="button"
          onClick={onOpenMenu}
          className="flex-1 inline-flex items-center justify-center gap-1.5 py-2.5 px-3 text-xs font-semibold text-white bg-[#546d75] hover:bg-[#62818c] active:bg-[#465c63] rounded-xl shadow-md transition-all whitespace-nowrap"
        >
          <UtensilsCrossed className="w-3.5 h-3.5 shrink-0" />
          <span>VER CARDÁPIO</span>
        </button>

        <button
          type="button"
          onClick={onScrollToLocation}
          className="flex-1 inline-flex items-center justify-center gap-1.5 py-2.5 px-3 text-xs font-semibold text-[#e1ebef] bg-[#182529] hover:bg-[#223338] border border-[#2d4047] rounded-xl transition-all whitespace-nowrap"
        >
          <Navigation className="w-3.5 h-3.5 text-[#8aaab5] shrink-0" />
          <span>COMO CHEGAR</span>
        </button>

        <a
          href="tel:+551158194215"
          className="p-2.5 text-white bg-[#182529] hover:bg-[#223338] border border-[#2d4047] rounded-xl flex items-center justify-center shrink-0"
          aria-label="Ligar para o NOKA Sushi"
        >
          <Phone className="w-4 h-4 text-[#8aaab5]" />
        </a>
      </div>
    </aside>
  );
};
