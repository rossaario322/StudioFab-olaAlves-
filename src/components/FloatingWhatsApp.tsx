import React, { useState, useEffect } from 'react';
import { MessageCircle, X, Sparkles } from 'lucide-react';
import { STUDIO_INFO } from '../data/studioData';

export const FloatingWhatsApp: React.FC = () => {
  const [showTooltip, setShowTooltip] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowTooltip(false);
    }, 9000);
    return () => clearTimeout(timer);
  }, []);

  const whatsappUrl = `https://wa.me/${STUDIO_INFO.whatsappRaw}?text=${encodeURIComponent(
    'Olá Fabíola! Vi o site do Studio e gostaria de saber sobre horários disponíveis para atendimento.'
  )}`;

  return (
    <div id="floating-whatsapp-container" className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-2">
      {/* Interactive Tooltip Card */}
      {showTooltip && (
        <div className="bg-slate-900 text-white text-xs p-3.5 rounded-2xl shadow-2xl border border-cyan-500/40 max-w-[240px] animate-bounce-slow relative">
          <button
            onClick={() => setShowTooltip(false)}
            className="absolute top-1.5 right-1.5 p-1 text-slate-400 hover:text-white rounded-full transition-colors"
            aria-label="Fechar dica"
          >
            <X className="w-3.5 h-3.5" />
          </button>
          <div className="flex items-center gap-1.5 text-emerald-400 font-bold mb-1">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
            Fabíola Alves Online
          </div>
          <p className="text-slate-300 text-[11px] leading-tight">
            Olá! Precisa de alívio para dores ou quer agendar Pilates? Clique aqui para falar comigo.
          </p>
        </div>
      )}

      {/* Main WhatsApp Floating Action Button */}
      <a
        id="floating-whatsapp-btn"
        href={whatsappUrl}
        target="_blank"
        rel="noreferrer"
        className="group relative flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-tr from-emerald-500 to-teal-400 text-slate-950 shadow-xl shadow-emerald-500/40 hover:shadow-emerald-500/60 hover:scale-110 transition-all duration-300 cursor-pointer"
        aria-label="Falar com Fabíola Alves no WhatsApp"
      >
        <span className="absolute -top-1 -right-1 flex h-4 w-4">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-4 w-4 bg-emerald-400 border-2 border-slate-900"></span>
        </span>
        <MessageCircle className="w-7 h-7 fill-slate-950 text-slate-950 group-hover:rotate-12 transition-transform duration-300" />
      </a>
    </div>
  );
};
