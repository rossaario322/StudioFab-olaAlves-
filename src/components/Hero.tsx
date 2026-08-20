import React from 'react';
import { Star, MapPin, Sparkles, MessageCircle, ArrowRight, CheckCircle2, HeartPulse } from 'lucide-react';
import { STUDIO_INFO } from '../data/studioData';

interface HeroProps {
  onOpenWhatsApp: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenWhatsApp }) => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-center pt-28 sm:pt-32 pb-16 sm:pb-20 overflow-hidden bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white"
    >
      {/* Subtle Ambient Glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[300px] bg-cyan-500/15 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          {/* Left Column: Value Proposition & CTAs */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            {/* Minimal Badges Row */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2.5">
              {/* Google Maps 5.0 Simple Rating Badge */}
              <div id="google-badge-hero" className="inline-flex items-center gap-1.5 bg-slate-900/90 border border-slate-700/80 px-3 py-1 rounded-full text-xs font-semibold text-slate-200 shadow-sm backdrop-blur-md">
                <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                <span className="text-white font-bold">5.0</span>
                <span className="text-slate-400">Google Maps</span>
              </div>

              {/* Wellhub badge */}
              <div id="wellhub-badge-hero" className="inline-flex items-center gap-1.5 bg-emerald-950/80 border border-emerald-500/40 px-3 py-1 rounded-full text-xs font-semibold text-emerald-300">
                <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
                <span>Aceitamos <strong>Wellhub</strong></span>
              </div>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white leading-tight">
              Cuidado que transforma:{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-teal-300 to-cyan-200">
                Fisioterapia, Massoterapia & Pilates Solo
              </span>{' '}
              em Curitiba
            </h1>

            {/* Slogan & Description */}
            <p className="text-base sm:text-lg text-slate-300 font-normal leading-relaxed max-w-2xl mx-auto lg:mx-0">
              <span className="text-cyan-300 font-medium italic block mb-1">"{STUDIO_INFO.slogan}"</span>
              Atendimento individualizado com a Fisioterapeuta <strong>Fabíola Alves</strong>. Alívio de dores crônicas, reabilitação da coluna, ventosaterapia e massagem relaxante em ambiente privativo com cromoterapia no Bairro Portão.
            </p>

            {/* Key differentiators chips */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 pt-1 max-w-xl mx-auto lg:mx-0 text-left">
              <div className="flex items-center gap-2 text-xs text-slate-300 bg-slate-900/70 border border-slate-800 px-3 py-2 rounded-xl">
                <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>Atendimento 1 a 1</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-slate-300 bg-slate-900/70 border border-slate-800 px-3 py-2 rounded-xl">
                <CheckCircle2 className="w-4 h-4 text-teal-400 shrink-0" />
                <span>Cromoterapia Azul</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-slate-300 bg-slate-900/70 border border-slate-800 px-3 py-2 rounded-xl col-span-2 sm:col-span-1">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Acessível PcD</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <button
                id="hero-cta-whatsapp"
                onClick={onOpenWhatsApp}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-gradient-to-r from-cyan-500 via-teal-500 to-cyan-400 hover:from-cyan-400 hover:to-teal-300 text-slate-950 font-bold px-7 py-3.5 rounded-xl text-base shadow-lg shadow-cyan-500/25 transition-all hover:shadow-cyan-500/40 hover:-translate-y-0.5 cursor-pointer"
              >
                <MessageCircle className="w-5 h-5 fill-slate-950" />
                Agendar no WhatsApp
              </button>

              <a
                id="hero-cta-services"
                href="#servicos"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-slate-800/80 hover:bg-slate-800 text-slate-200 hover:text-white border border-slate-700 font-semibold px-6 py-3.5 rounded-xl text-base transition-all hover:border-slate-600"
              >
                Ver Procedimentos
                <ArrowRight className="w-4 h-4 text-cyan-400" />
              </a>
            </div>

            {/* Location quick snippet */}
            <div className="pt-2 text-xs text-slate-400 flex items-center justify-center lg:justify-start gap-2">
              <MapPin className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
              <span>Rua Luiz Parigot de Souza, 356 – Portão, Curitiba</span>
            </div>
          </div>

          {/* Right Column: Clean Studio Card */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              <div id="hero-studio-card" className="relative rounded-2xl bg-slate-900 border border-slate-800 overflow-hidden shadow-2xl p-6 sm:p-7 space-y-5">
                {/* Header with Clean Logo */}
                <div className="flex items-center justify-between border-b border-slate-800 pb-4">
                  <div className="flex items-center gap-3">
                    <img
                      src="/Captura%20de%20tela%202026-08-20%20115612.png"
                      alt="Studio Fabíola Alves"
                      className="h-11 w-auto object-contain rounded-xl drop-shadow-[0_2px_8px_rgba(6,182,212,0.3)]"
                      referrerPolicy="no-referrer"
                    />
                    <div>
                      <h2 className="text-white font-bold text-base leading-tight">Studio Fabíola Alves</h2>
                      <p className="text-xs text-cyan-400 font-medium">Ambiente Privativo & Acolhedor</p>
                    </div>
                  </div>
                  <span className="px-2.5 py-1 rounded-full bg-cyan-950 text-cyan-300 border border-cyan-500/40 text-[11px] font-bold">
                    Nota 5.0 ⭐
                  </span>
                </div>

                {/* Specialties Summary */}
                <div className="space-y-2.5 text-xs">
                  <div className="flex items-center justify-between bg-slate-950/80 p-3 rounded-xl border border-slate-800">
                    <span className="text-slate-200 font-medium flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-cyan-400"></span>
                      Ventosaterapia & Liberação
                    </span>
                    <span className="text-[11px] text-cyan-400 font-semibold">Alívio de Dores</span>
                  </div>

                  <div className="flex items-center justify-between bg-slate-950/80 p-3 rounded-xl border border-slate-800">
                    <span className="text-slate-200 font-medium flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-teal-400"></span>
                      Massoterapia & Pedras Quentes
                    </span>
                    <span className="text-[11px] text-teal-300 font-semibold">Relaxamento</span>
                  </div>

                  <div className="flex items-center justify-between bg-slate-950/80 p-3 rounded-xl border border-slate-800">
                    <span className="text-slate-200 font-medium flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                      Pilates Solo & Reabilitação
                    </span>
                    <span className="text-[11px] text-emerald-300 font-semibold">Postura e Coluna</span>
                  </div>
                </div>

                {/* Direct Action */}
                <button
                  onClick={onOpenWhatsApp}
                  className="w-full py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-teal-500 hover:from-cyan-400 hover:to-teal-400 text-slate-950 text-xs font-bold transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer"
                >
                  <MessageCircle className="w-4 h-4 fill-slate-950" />
                  Falar Diretamente no WhatsApp
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
