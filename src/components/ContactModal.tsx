import React, { useState } from 'react';
import { X, Phone, MessageCircle, MapPin, Send, CheckCircle2, Clock } from 'lucide-react';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !phone.trim()) return;
    setSubmitted(true);
  };

  const handleReset = () => {
    setName('');
    setPhone('');
    setMessage('');
    setSubmitted(false);
    onClose();
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6 overflow-y-auto"
      onClick={onClose}
    >
      <div
        className="bg-[#11191c] border border-[#263a40] rounded-2xl max-w-lg w-full shadow-2xl overflow-hidden animate-fadeIn my-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-5 sm:p-6 border-b border-[#213339] flex items-center justify-between bg-[#141f23]">
          <div>
            <h2 className="text-xl font-bold text-white font-display">
              Fale com o NOKA Sushi
            </h2>
            <p className="text-xs text-[#8ca3ab] mt-0.5">
              Tire dúvidas sobre pratos, horários e atendimento no salão
            </p>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="p-2 text-[#90a6ae] hover:text-white hover:bg-[#1f2f35] rounded-xl transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#546d75]"
            aria-label="Fechar contato"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-5 sm:p-6 space-y-6">
          {/* Quick Direct Actions */}
          <div className="grid grid-cols-2 gap-3">
            <a
              href="tel:+551158194215"
              className="p-3.5 rounded-xl bg-[#162327] hover:bg-[#1e2f35] border border-[#273b42] flex flex-col items-center text-center transition-colors group"
            >
              <Phone className="w-5 h-5 text-[#8eb0bc] group-hover:text-white transition-colors mb-1.5" />
              <span className="text-xs font-semibold text-white">Ligar para Nós</span>
              <span className="text-[11px] text-[#7d97a0] mt-0.5">(11) 5819-4215</span>
            </a>

            <a
              href="https://wa.me/551158194215"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3.5 rounded-xl bg-[#162327] hover:bg-[#1e2f35] border border-[#273b42] flex flex-col items-center text-center transition-colors group"
            >
              <MessageCircle className="w-5 h-5 text-emerald-400 group-hover:scale-110 transition-transform mb-1.5" />
              <span className="text-xs font-semibold text-white">WhatsApp</span>
              <span className="text-[11px] text-[#7d97a0] mt-0.5">Atendimento Direto</span>
            </a>
          </div>

          {/* Form or Success State */}
          {submitted ? (
            <div className="p-6 rounded-xl bg-[#152428] border border-emerald-900/50 text-center space-y-3 animate-fadeIn">
              <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <h3 className="text-base font-bold text-white">
                Mensagem enviada com sucesso!
              </h3>
              <p className="text-xs text-[#9eb5bf] leading-relaxed">
                Obrigado pelo contato, <strong>{name}</strong>. Nossa equipe receberá sua mensagem e retornará pelo telefone informado.
              </p>
              <button
                type="button"
                onClick={handleReset}
                className="mt-3 px-4 py-2 text-xs font-semibold text-white bg-[#546d75] rounded-lg hover:bg-[#62818c] transition-colors"
              >
                Concluir
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-1.5">
                <label
                  htmlFor="contact-name"
                  className="block text-xs font-medium text-[#c0d3db]"
                >
                  Seu Nome *
                </label>
                <input
                  id="contact-name"
                  type="text"
                  required
                  placeholder="Como podemos te chamar?"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-3.5 py-2.5 bg-[#141f23] border border-[#263940] rounded-xl text-xs sm:text-sm text-white placeholder-[#68828b] focus:outline-none focus:border-[#546d75] focus:ring-1 focus:ring-[#546d75]"
                />
              </div>

              <div className="space-y-1.5">
                <label
                  htmlFor="contact-phone"
                  className="block text-xs font-medium text-[#c0d3db]"
                >
                  Telefone / WhatsApp *
                </label>
                <input
                  id="contact-phone"
                  type="tel"
                  required
                  placeholder="(11) 99999-9999"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full px-3.5 py-2.5 bg-[#141f23] border border-[#263940] rounded-xl text-xs sm:text-sm text-white placeholder-[#68828b] focus:outline-none focus:border-[#546d75] focus:ring-1 focus:ring-[#546d75]"
                />
              </div>

              <div className="space-y-1.5">
                <label
                  htmlFor="contact-message"
                  className="block text-xs font-medium text-[#c0d3db]"
                >
                  Mensagem ou Dúvida (Opcional)
                </label>
                <textarea
                  id="contact-message"
                  rows={3}
                  placeholder="Gostaria de saber mais sobre horários, pratos ou ocasiões especiais..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full px-3.5 py-2.5 bg-[#141f23] border border-[#263940] rounded-xl text-xs sm:text-sm text-white placeholder-[#68828b] focus:outline-none focus:border-[#546d75] focus:ring-1 focus:ring-[#546d75]"
                />
              </div>

              <button
                type="submit"
                className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 text-xs sm:text-sm font-semibold text-white bg-[#546d75] hover:bg-[#62818c] active:bg-[#465c63] border border-[#71929e]/40 rounded-xl shadow-lg shadow-[#546d75]/20 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#546d75]"
              >
                <Send className="w-4 h-4" />
                <span>ENVIAR MENSAGEM</span>
              </button>
            </form>
          )}

          {/* Quick Location Footer */}
          <div className="pt-2 border-t border-[#1e2e33] flex items-center justify-between text-xs text-[#7d97a0]">
            <span className="flex items-center gap-1">
              <MapPin className="w-3.5 h-3.5 text-[#546d75]" />
              Estr. de Itapecerica, 679
            </span>
            <span className="flex items-center gap-1">
              <Clock className="w-3.5 h-3.5 text-[#546d75]" />
              Abre às 18:30
            </span>
          </div>
        </div>

      </div>
    </div>
  );
};
