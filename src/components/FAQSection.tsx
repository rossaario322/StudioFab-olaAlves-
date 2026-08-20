import React, { useState } from 'react';
import { HelpCircle, ChevronDown, ChevronUp, MessageCircle, Sparkles } from 'lucide-react';
import { STUDIO_FAQS, STUDIO_INFO } from '../data/studioData';

export const FAQSection: React.FC = () => {
  const [openFaqId, setOpenFaqId] = useState<string | null>('faq-1');

  const toggleFaq = (id: string) => {
    setOpenFaqId(openFaqId === id ? null : id);
  };

  return (
    <section id="faq" className="py-20 bg-slate-50 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-3 mb-14">
          <div className="inline-flex items-center gap-1.5 bg-cyan-100 text-cyan-800 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
            <HelpCircle className="w-3.5 h-3.5 text-cyan-600" />
            Dúvidas Frequentes
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Tudo o que você precisa saber antes da sua sessão
          </h2>
          <p className="text-slate-600 text-base">
            Esclareça suas principais dúvidas sobre atendimentos, Wellhub, procedimentos e estrutura.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-3">
          {STUDIO_FAQS.map((faq) => {
            const isOpen = openFaqId === faq.id;
            return (
              <div
                key={faq.id}
                id={`faq-item-${faq.id}`}
                className={`bg-white rounded-2xl border transition-all duration-200 overflow-hidden ${
                  isOpen ? 'border-cyan-400 shadow-md ring-1 ring-cyan-400/30' : 'border-slate-200 shadow-sm hover:border-slate-300'
                }`}
              >
                <button
                  onClick={() => toggleFaq(faq.id)}
                  className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <span className="text-sm sm:text-base font-bold text-slate-900">
                    {faq.question}
                  </span>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-colors ${
                    isOpen ? 'bg-cyan-100 text-cyan-700' : 'bg-slate-100 text-slate-500'
                  }`}>
                    {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-6 pt-1 text-slate-600 text-xs sm:text-sm leading-relaxed border-t border-slate-100 animate-fadeIn">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Extra question helper card */}
        <div className="mt-10 bg-slate-900 text-white rounded-2xl p-6 sm:p-7 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-center sm:text-left space-y-1">
            <h3 className="font-bold text-base text-white">Tem alguma dúvida específica ou lesão prévia?</h3>
            <p className="text-xs text-slate-400">Fale diretamente com a Fabíola no WhatsApp para orientações prévias.</p>
          </div>

          <a
            href={`https://wa.me/${STUDIO_INFO.whatsappRaw}?text=${encodeURIComponent('Olá Fabíola! Gostaria de tirar uma dúvida sobre os procedimentos no Studio.')}`}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-teal-500 hover:from-cyan-400 hover:to-teal-400 text-slate-950 text-xs font-bold px-5 py-3 rounded-xl transition-all shadow-md shrink-0 cursor-pointer"
          >
            <MessageCircle className="w-4 h-4 fill-slate-950" />
            Tirar Dúvida no WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
};
