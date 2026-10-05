import React, { useState } from 'react';
import { MapPin, Phone, Clock, Navigation, UtensilsCrossed, ExternalLink, Copy, Check } from 'lucide-react';

export const Location: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const fullAddress =
    'Estr. de Itapecerica, 679 - Vila Nova das Belezas, São Paulo - SP, 05835-003';
  const phoneFormatted = '(11) 5819-4215';
  const phoneRaw = '+551158194215';

  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    'NOKA Sushi Estr. de Itapecerica, 679 - Vila Nova das Belezas, São Paulo - SP, 05835-003'
  )}`;

  const handleCopyAddress = () => {
    navigator.clipboard.writeText(fullAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="localizacao" className="py-20 md:py-28 bg-[#0c1214] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-2xl mx-auto text-center space-y-3 mb-14">
          <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider text-[#8daab4] uppercase">
            <span className="w-4 h-[1px] bg-[#546d75]" />
            <span>Fácil Acesso & Contato</span>
            <span className="w-4 h-[1px] bg-[#546d75]" />
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-white font-display">
            Venha conhecer o NOKA Sushi
          </h2>
          <p className="text-sm sm:text-base text-[#92a8b0]">
            Localizado na Estrada de Itapecerica em Vila Nova das Belezas, São Paulo.
          </p>
        </div>

        {/* 2-Column Content: Details Card + Map Frame */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Details Card */}
          <div className="lg:col-span-5 bg-[#121b1e] border border-[#23353b] rounded-2xl p-6 sm:p-8 flex flex-col justify-between space-y-8">
            <div className="space-y-6">
              
              {/* Address info */}
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-xs font-semibold text-[#8eb0bc] uppercase tracking-wider">
                  <MapPin className="w-4 h-4 text-[#546d75]" />
                  <span>Endereço</span>
                </div>
                <div className="text-base sm:text-lg font-medium text-white leading-snug">
                  Estr. de Itapecerica, 679
                </div>
                <div className="text-sm text-[#9ab0b7]">
                  Vila Nova das Belezas · São Paulo - SP
                  <br />
                  CEP: 05835-003
                </div>

                <button
                  type="button"
                  onClick={handleCopyAddress}
                  className="mt-2 inline-flex items-center gap-1.5 text-xs text-[#7c9aa5] hover:text-white transition-colors"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-emerald-400">Endereço copiado!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copiar endereço completo</span>
                    </>
                  )}
                </button>
              </div>

              {/* Phone info */}
              <div className="space-y-2 pt-4 border-t border-[#1e2e33]">
                <div className="flex items-center gap-2 text-xs font-semibold text-[#8eb0bc] uppercase tracking-wider">
                  <Phone className="w-4 h-4 text-[#546d75]" />
                  <span>Telefone</span>
                </div>
                <a
                  href={`tel:${phoneRaw}`}
                  className="block text-xl font-bold text-white hover:text-[#9bc0cd] transition-colors"
                >
                  {phoneFormatted}
                </a>
                <p className="text-xs text-[#899fa7]">
                  Toque para ligar e tirar dúvidas ou consultar o salão.
                </p>
              </div>

              {/* Schedule & Modality */}
              <div className="grid grid-cols-2 gap-3 pt-4 border-t border-[#1e2e33]">
                <div className="p-3.5 rounded-xl bg-[#172327] border border-[#273a41]">
                  <div className="flex items-center gap-1.5 text-xs text-[#8eb0bc] mb-1">
                    <Clock className="w-3.5 h-3.5" />
                    <span>Horário</span>
                  </div>
                  <p className="text-sm font-semibold text-white">Abre às 18:30</p>
                  <p className="text-[11px] text-[#78919a] mt-0.5">Jantar</p>
                </div>

                <div className="p-3.5 rounded-xl bg-[#172327] border border-[#273a41]">
                  <div className="flex items-center gap-1.5 text-xs text-[#8eb0bc] mb-1">
                    <UtensilsCrossed className="w-3.5 h-3.5" />
                    <span>Modalidade</span>
                  </div>
                  <p className="text-sm font-semibold text-white">Refeição no local</p>
                  <p className="text-[11px] text-[#78919a] mt-0.5">Salão climatizado</p>
                </div>
              </div>

            </div>

            {/* Action Buttons */}
            <div className="space-y-3 pt-4 border-t border-[#1e2e33]">
              <a
                href={googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold text-white bg-[#546d75] hover:bg-[#62818c] border border-[#71929e]/40 rounded-xl shadow-lg shadow-[#546d75]/20 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#546d75]"
              >
                <Navigation className="w-4 h-4" />
                <span>COMO CHEGAR</span>
                <ExternalLink className="w-4 h-4 text-[#c7dde5]" />
              </a>
            </div>
          </div>

          {/* Right Map Embed Frame */}
          <div className="lg:col-span-7 bg-[#121b1e] border border-[#23353b] rounded-2xl overflow-hidden min-h-[360px] relative flex flex-col">
            <div className="p-4 bg-[#152125] border-b border-[#23353b] flex items-center justify-between text-xs text-[#9eb5be]">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#7b9da8]" />
                <span className="font-medium text-white">Mapa de Localização</span>
              </div>
              <span>Zona Sul · São Paulo</span>
            </div>

            {/* Google Maps iFrame */}
            <div className="flex-1 w-full min-h-[320px] relative bg-[#172428]">
              <iframe
                title="Localização do NOKA Sushi no Google Maps"
                src={`https://maps.google.com/maps?q=${encodeURIComponent(
                  'Estrada de Itapecerica, 679, Vila Nova das Belezas, Sao Paulo, SP, 05835-003'
                )}&t=&z=15&ie=UTF8&iwloc=&output=embed`}
                className="w-full h-full min-h-[320px] border-0"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
