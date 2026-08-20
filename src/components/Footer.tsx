import React from 'react';
import { Phone, MapPin, Clock, Instagram, Sparkles } from 'lucide-react';
import { STUDIO_INFO } from '../data/studioData';

export const Footer: React.FC = () => {
  return (
    <footer id="main-footer" className="bg-slate-950 text-slate-400 border-t border-slate-800 text-xs">
      {/* Upper Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8">
          {/* Studio Brand and Description */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="h-11 flex items-center justify-center">
                <img
                  src="/Captura%20de%20tela%202026-08-20%20115612.png"
                  alt="Studio Fabíola Alves"
                  className="h-11 w-auto object-contain rounded-lg drop-shadow-[0_2px_8px_rgba(6,182,212,0.25)]"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div>
                <h3 className="text-base font-bold text-white tracking-tight">
                  Studio Fabíola Alves
                </h3>
                <p className="text-[11px] text-cyan-400 font-medium uppercase tracking-wider">
                  Fisioterapia & Massoterapia
                </p>
              </div>
            </div>

            <p className="text-slate-300 text-xs italic leading-relaxed">
              "{STUDIO_INFO.slogan}"
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a
                href={STUDIO_INFO.instagramUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 bg-slate-900 hover:bg-slate-800 text-slate-200 hover:text-cyan-400 px-3.5 py-2 rounded-xl border border-slate-800 transition-colors"
              >
                <Instagram className="w-4 h-4 text-pink-400" />
                <span className="text-xs font-semibold">{STUDIO_INFO.instagram}</span>
              </a>

              <span className="inline-flex items-center gap-1.5 bg-emerald-950/80 border border-emerald-500/40 text-emerald-300 px-3 py-2 rounded-xl text-xs font-semibold">
                <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
                Wellhub Partner
              </span>
            </div>
          </div>

          {/* Quick Navigation */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">Navegação Rápida</h4>
            <ul className="space-y-2">
              <li>
                <a href="#servicos" className="hover:text-cyan-400 transition-colors">Serviços & Procedimentos</a>
              </li>
              <li>
                <a href="#evolucao" className="hover:text-cyan-400 transition-colors">Resultados Pilates Solo</a>
              </li>
              <li>
                <a href="#sobre" className="hover:text-cyan-400 transition-colors">Sobre o Studio</a>
              </li>
              <li>
                <a href="#localizacao" className="hover:text-cyan-400 transition-colors">Endereço & Como Chegar</a>
              </li>
              <li>
                <a href="#faq" className="hover:text-cyan-400 transition-colors">Perguntas Frequentes</a>
              </li>
            </ul>
          </div>

          {/* Contact and Location */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">Contato & Atendimento</h4>
            <div className="space-y-2.5 text-slate-300">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                <span>{STUDIO_INFO.address.street} – {STUDIO_INFO.address.neighborhood}, {STUDIO_INFO.address.city} - {STUDIO_INFO.address.state}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-cyan-400 shrink-0" />
                <a
                  href={`https://wa.me/${STUDIO_INFO.whatsappRaw}`}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-cyan-300 font-bold"
                >
                  {STUDIO_INFO.phone} (WhatsApp)
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>Segunda a Sexta: 08:00 às 19:00</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-slate-900 py-6 text-center text-slate-400">
        <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p>© {new Date().getFullYear()} Studio Fabíola Alves Fisioterapia e Massoterapia. Todos os direitos reservados.</p>
          <p className="flex items-center gap-1 justify-center">
            Feito com dedicação para a saúde e bem-estar em Curitiba.
          </p>
        </div>
      </div>
    </footer>
  );
};
