import React, { useState } from 'react';
import { TrendingUp, MessageCircle, ShieldAlert, Award, CheckCircle2 } from 'lucide-react';

interface EvolutionCaseStudyProps {
  onBookPilates: () => void;
}

export const EvolutionCaseStudy: React.FC<EvolutionCaseStudyProps> = ({ onBookPilates }) => {
  const [activeStage, setActiveStage] = useState<'antes' | 'depois'>('depois');

  return (
    <section id="evolucao" className="py-20 bg-slate-900 text-white relative overflow-hidden">
      {/* Glow effect */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-2.5 mb-12">
          <div className="inline-flex items-center gap-1.5 bg-cyan-950 border border-cyan-500/40 text-cyan-300 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
            <TrendingUp className="w-3.5 h-3.5 text-cyan-400" />
            Resultados Comprovados
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight">
            Evolução de Postura com Pilates Solo
          </h2>
          <p className="text-slate-300 text-sm sm:text-base">
            Reeducação do movimento e fortalecimento focado na saúde da coluna.
          </p>
        </div>

        {/* Case Study Card */}
        <div className="bg-slate-950 border border-slate-800 rounded-3xl p-6 sm:p-10 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left: Evolution Comparison */}
            <div className="lg:col-span-6 space-y-5">
              {/* Toggle Switch */}
              <div className="flex items-center justify-center p-1 bg-slate-900 rounded-2xl border border-slate-800 max-w-xs mx-auto">
                <button
                  onClick={() => setActiveStage('antes')}
                  className={`flex-1 py-2 px-3 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                    activeStage === 'antes'
                      ? 'bg-rose-950/80 text-rose-300 border border-rose-500/40 shadow-sm'
                      : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  1º Teste Inicial
                </button>
                <button
                  onClick={() => setActiveStage('depois')}
                  className={`flex-1 py-2 px-3 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                    activeStage === 'depois'
                      ? 'bg-emerald-950/80 text-emerald-300 border border-emerald-500/40 shadow-sm'
                      : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  Após 1 Mês de Pilates
                </button>
              </div>

              {/* Box */}
              <div className="relative rounded-2xl bg-slate-900/80 p-6 border border-slate-800 min-h-[260px] flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className={`text-xs font-extrabold uppercase tracking-wider px-3 py-1 rounded-full border ${
                      activeStage === 'antes'
                        ? 'bg-rose-950/70 text-rose-300 border-rose-500/40'
                        : 'bg-emerald-950/70 text-emerald-300 border-emerald-500/40'
                    }`}>
                      {activeStage === 'antes' ? 'Estado Inicial • Rigidez Lombar' : 'Após 30 Dias • Ganho Notável'}
                    </span>
                  </div>

                  {activeStage === 'antes' ? (
                    <div className="space-y-4">
                      <div className="p-3.5 rounded-xl bg-slate-950/90 border border-rose-900/40 space-y-1.5">
                        <div className="flex items-center gap-2 text-rose-400 text-xs font-bold">
                          <ShieldAlert className="w-4 h-4" />
                          <span>Flexão de Tronco com Bloqueio</span>
                        </div>
                        <p className="text-xs text-slate-300 leading-relaxed">
                          Limitação na descida das mãos, encurtamento da cadeia posterior e rigidez lombar.
                        </p>
                      </div>

                      <div className="grid grid-cols-2 gap-2.5 text-xs">
                        <div className="bg-slate-950 p-2.5 rounded-lg border border-slate-800">
                          <p className="text-slate-400 text-[11px]">Alcance das Mãos</p>
                          <p className="text-rose-400 font-bold mt-0.5">Acima do Joelho</p>
                        </div>
                        <div className="bg-slate-950 p-2.5 rounded-lg border border-slate-800">
                          <p className="text-slate-400 text-[11px]">Curvatura Lombar</p>
                          <p className="text-rose-400 font-bold mt-0.5">Rígida</p>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className="space-y-4">
                      <div className="p-3.5 rounded-xl bg-slate-950/90 border border-emerald-900/40 space-y-1.5">
                        <div className="flex items-center gap-2 text-emerald-400 text-xs font-bold">
                          <Award className="w-4 h-4" />
                          <span>Alongamento Completo & Mobilidade</span>
                        </div>
                        <p className="text-xs text-slate-300 leading-relaxed">
                          Aumento do comprimento da coluna com curvatura fluida e mãos próximas aos pés.
                        </p>
                      </div>

                      <div className="grid grid-cols-2 gap-2.5 text-xs">
                        <div className="bg-slate-950 p-2.5 rounded-lg border border-slate-800">
                          <p className="text-slate-400 text-[11px]">Alcance das Mãos</p>
                          <p className="text-emerald-400 font-bold mt-0.5">Próximo aos Pés (+15cm)</p>
                        </div>
                        <div className="bg-slate-950 p-2.5 rounded-lg border border-slate-800">
                          <p className="text-slate-400 text-[11px]">Curvatura Lombar</p>
                          <p className="text-emerald-400 font-bold mt-0.5">Fluida & Natural</p>
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                <div className="pt-3 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400">
                  <span>Tatame e Acessórios</span>
                  <span className="text-cyan-400 font-medium">Sem impacto articular</span>
                </div>
              </div>
            </div>

            {/* Right: Method Explanation & CTA */}
            <div className="lg:col-span-6 space-y-5">
              <div className="space-y-2">
                <h3 className="text-xl sm:text-2xl font-bold text-white">
                  Por que o método no Studio Fabíola Alves funciona?
                </h3>
                <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                  O Pilates Solo no Studio é conduzido com olhar fisioterapêutico clínico, respeitando suas queixas e focando na descompressão da coluna.
                </p>
              </div>

              <div className="space-y-2.5">
                <div className="flex items-start gap-2.5 bg-slate-900/80 p-3 rounded-xl border border-slate-800">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-xs font-bold text-white">Ajuste Postural Imediato</h4>
                    <p className="text-xs text-slate-300">Correção biomecânica a cada movimento.</p>
                  </div>
                </div>

                <div className="flex items-start gap-2.5 bg-slate-900/80 p-3 rounded-xl border border-slate-800">
                  <CheckCircle2 className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-xs font-bold text-white">Alívio de Dores Lombares e Cervicais</h4>
                    <p className="text-xs text-slate-300">Descompressão das vértebras e melhora da respiração.</p>
                  </div>
                </div>

                <div className="flex items-start gap-2.5 bg-slate-900/80 p-3 rounded-xl border border-slate-800">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-xs font-bold text-white">Integração com Terapias Manuais</h4>
                    <p className="text-xs text-slate-300">Combinação com ventosaterapia e liberação miofascial.</p>
                  </div>
                </div>
              </div>

              {/* Call to action */}
              <div className="pt-2">
                <button
                  onClick={onBookPilates}
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-teal-500 hover:from-cyan-400 hover:to-teal-400 text-slate-950 font-bold px-6 py-3 rounded-xl text-xs sm:text-sm shadow-lg shadow-cyan-500/20 transition-all hover:shadow-cyan-500/40 cursor-pointer"
                >
                  <MessageCircle className="w-4 h-4 fill-slate-950" />
                  Agendar Pilates Solo no WhatsApp
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
