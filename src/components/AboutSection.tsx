import React from 'react';
import { UserCheck, Sparkles, HeartHandshake, ShieldCheck, CheckCircle, Award, Accessibility, MapPin } from 'lucide-react';
import { STUDIO_INFO } from '../data/studioData';

export const AboutSection: React.FC = () => {
  return (
    <section id="sobre" className="py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Visual Presentation Box */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Decorative background border */}
              <div className="absolute -inset-2 bg-gradient-to-tr from-cyan-600/20 to-teal-500/20 rounded-3xl blur-lg"></div>

              {/* Main Card */}
              <div className="relative rounded-3xl bg-slate-900 text-white p-7 sm:p-8 space-y-6 shadow-xl border border-slate-800">
                {/* Header Profile Badge */}
                <div className="flex items-center gap-4 border-b border-slate-800 pb-5">
                  <div className="h-16 flex items-center justify-center">
                    <img
                      src="/Captura%20de%20tela%202026-08-20%20115612.png"
                      alt="Fabíola Alves Logo"
                      className="h-16 w-auto object-contain rounded-2xl drop-shadow-[0_4px_12px_rgba(6,182,212,0.3)]"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div>
                    <h3 className="text-xl font-extrabold text-white">Fabíola Alves</h3>
                    <p className="text-xs text-cyan-400 font-semibold tracking-wide">Fisioterapeuta & Massoterapeuta</p>
                    <p className="text-[11px] text-slate-400">Curitiba • Bairro Portão</p>
                  </div>
                </div>

                {/* Slogan Quote */}
                <div className="p-4 rounded-2xl bg-slate-950/80 border border-cyan-500/30">
                  <p className="text-xs text-slate-200 italic leading-relaxed">
                    "{STUDIO_INFO.slogan}"
                  </p>
                </div>

                {/* Studio Physical Qualities */}
                <div className="space-y-3 pt-1">
                  <p className="text-xs font-bold uppercase tracking-wider text-cyan-400">Estrutura & Conforto</p>
                  {STUDIO_INFO.amenities.slice(0, 5).map((amenity, idx) => (
                    <div key={idx} className="flex items-center gap-2.5 text-xs text-slate-300">
                      <CheckCircle className="w-4 h-4 text-teal-400 shrink-0" />
                      <span>{amenity}</span>
                    </div>
                  ))}
                </div>

                {/* Accessibility Badge */}
                <div className="flex items-center gap-3 bg-slate-800/80 p-3 rounded-xl border border-slate-700">
                  <div className="w-8 h-8 rounded-lg bg-cyan-950 text-cyan-300 flex items-center justify-center shrink-0">
                    <Accessibility className="w-5 h-5" />
                  </div>
                  <div className="text-xs">
                    <p className="font-bold text-white">Acessibilidade Garantida</p>
                    <p className="text-slate-400 text-[11px]">Estrutura adaptada para PcD e cadeirantes</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Narrative & Values */}
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-3">
              <div className="inline-flex items-center gap-1.5 bg-cyan-50 text-cyan-800 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                <HeartHandshake className="w-3.5 h-3.5 text-cyan-600" />
                Sobre a Profissional e o Espaço
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                Um espaço acolhedor e especializado no cuidado integral do corpo
              </h2>
              <p className="text-slate-600 text-base leading-relaxed">
                O <strong>Studio Fabíola Alves</strong> foi pensado especialmente para quem busca mais <strong>leveza, mobilidade e bem-estar no dia a dia</strong>.
              </p>
            </div>

            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Aqui, cada paciente recebe atendimento exclusivo e humanizado. Unimos a <strong>precisão da avaliação fisioterapêutica</strong> com o <strong>alívio profundo das técnicas de massoterapia</strong> (ventosaterapia, pedras quentes e liberação miofascial) e a <strong>reeducação postural do Pilates Solo</strong>.
            </p>

            {/* 4 Pillars Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/90 space-y-1.5">
                <div className="w-8 h-8 rounded-lg bg-cyan-100 text-cyan-700 flex items-center justify-center mb-2">
                  <UserCheck className="w-4 h-4" />
                </div>
                <h4 className="font-bold text-slate-900 text-sm">Cuidado Individualizado</h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Sem salas superlotadas. O horário é 100% reservado para você com foco total na sua queixa.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/90 space-y-1.5">
                <div className="w-8 h-8 rounded-lg bg-teal-100 text-teal-700 flex items-center justify-center mb-2">
                  <Sparkles className="w-4 h-4" />
                </div>
                <h4 className="font-bold text-slate-900 text-sm">Cromoterapia Relaxante</h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Iluminação suave em LED azul que desacelera a mente e potencializa o alívio muscular.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/90 space-y-1.5">
                <div className="w-8 h-8 rounded-lg bg-indigo-100 text-indigo-700 flex items-center justify-center mb-2">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <h4 className="font-bold text-slate-900 text-sm">Higiene Rigorosa</h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Maca esterilizada, lençóis descartáveis e toalhas limpas e higienizadas a cada atendimento.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/90 space-y-1.5">
                <div className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-700 flex items-center justify-center mb-2">
                  <Award className="w-4 h-4" />
                </div>
                <h4 className="font-bold text-slate-900 text-sm">Excelência Comprovada</h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Avaliação máxima 5.0 estrelas no Google com depoimentos reais de transformação e alívio.
                </p>
              </div>
            </div>

            {/* Location quick link */}
            <div className="pt-2 flex items-center gap-2 text-xs text-slate-500">
              <MapPin className="w-4 h-4 text-cyan-600 shrink-0" />
              <span>Localização privilegiada no <strong>Bairro Portão</strong>, Curitiba - PR</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
