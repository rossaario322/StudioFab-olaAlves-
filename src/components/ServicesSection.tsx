import React, { useState } from 'react';
import { Activity, Sparkles, HeartPulse, Zap, ShieldCheck, Clock, CheckCircle, ArrowRight, X, MessageCircle, HelpCircle } from 'lucide-react';
import { STUDIO_SERVICES } from '../data/studioData';
import { StudioService } from '../types';

interface ServicesSectionProps {
  onSelectService: (serviceName: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onSelectService }) => {
  const [activeCategory, setActiveCategory] = useState<string>('todos');
  const [selectedServiceDetail, setSelectedServiceDetail] = useState<StudioService | null>(null);

  const categories = [
    { id: 'todos', label: 'Todos os Procedimentos' },
    { id: 'massoterapia', label: 'Massoterapia & Ventosa' },
    { id: 'fisioterapia', label: 'Fisioterapia' },
    { id: 'pilates', label: 'Pilates Solo' },
  ];

  const filteredServices = activeCategory === 'todos'
    ? STUDIO_SERVICES
    : STUDIO_SERVICES.filter(s => s.category === activeCategory);

  const getServiceIcon = (iconName: string) => {
    switch (iconName) {
      case 'Activity':
        return <Activity className="w-6 h-6 text-cyan-600" />;
      case 'Sparkles':
        return <Sparkles className="w-6 h-6 text-teal-600" />;
      case 'HeartPulse':
        return <HeartPulse className="w-6 h-6 text-rose-500" />;
      case 'Zap':
        return <Zap className="w-6 h-6 text-amber-500" />;
      default:
        return <ShieldCheck className="w-6 h-6 text-emerald-600" />;
    }
  };

  return (
    <section id="servicos" className="py-20 bg-slate-100/70 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-2.5 mb-12">
          <div className="inline-flex items-center gap-1.5 bg-cyan-100 text-cyan-800 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-cyan-600" />
            Especialidades do Studio
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
            Tratamentos e Cuidados
          </h2>
          <p className="text-slate-600 text-sm sm:text-base">
            Procedimentos individualizados com a Fisioterapeuta Fabíola Alves.
          </p>

          {/* Category Filter Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-2">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-3.5 py-1.5 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                  activeCategory === cat.id
                    ? 'bg-slate-900 text-white shadow-md shadow-slate-900/15'
                    : 'bg-white text-slate-700 hover:bg-slate-200 border border-slate-300/80'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Services Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredServices.map((service) => (
            <div
              key={service.id}
              id={`service-card-${service.id}`}
              className="bg-white rounded-2xl border border-slate-200/90 hover:border-cyan-400 p-6 flex flex-col justify-between shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 relative group"
            >
              {/* Highlight Tag */}
              {service.highlightTag && (
                <div className="absolute top-4 right-4">
                  <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-cyan-50 text-cyan-700 border border-cyan-200">
                    {service.highlightTag}
                  </span>
                </div>
              )}

              <div>
                {/* Icon & Duration */}
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-center group-hover:scale-105 group-hover:bg-cyan-50 transition-all">
                    {getServiceIcon(service.iconName)}
                  </div>
                  <div>
                    <span className="inline-flex items-center gap-1 text-xs text-slate-500 font-medium bg-slate-100 px-2 py-0.5 rounded-md">
                      <Clock className="w-3 h-3 text-slate-400" />
                      Aprox. {service.durationMinutes} min
                    </span>
                  </div>
                </div>

                {/* Service Title */}
                <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-cyan-700 transition-colors">
                  {service.title}
                </h3>

                {/* Short Description */}
                <p className="text-slate-600 text-sm leading-relaxed mb-5">
                  {service.shortDescription}
                </p>

                {/* Key Benefits List */}
                <div className="space-y-2 mb-6 border-t border-slate-100 pt-4">
                  <p className="text-xs font-bold text-slate-800 uppercase tracking-wider">Principais Benefícios:</p>
                  {service.benefits.slice(0, 3).map((benefit, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs text-slate-600">
                      <CheckCircle className="w-3.5 h-3.5 text-cyan-600 shrink-0 mt-0.5" />
                      <span>{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-4 border-t border-slate-100 flex items-center gap-2">
                <button
                  onClick={() => setSelectedServiceDetail(service)}
                  className="flex-1 py-2.5 px-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
                >
                  <HelpCircle className="w-3.5 h-3.5 text-slate-500" />
                  Ver Detalhes
                </button>
                <button
                  onClick={() => onSelectService(service.title)}
                  className="flex-1 py-2.5 px-3 rounded-xl bg-gradient-to-r from-cyan-600 to-teal-600 hover:from-cyan-500 hover:to-teal-500 text-white text-xs font-bold transition-all shadow-sm flex items-center justify-center gap-1.5 cursor-pointer"
                >
                  <MessageCircle className="w-3.5 h-3.5 fill-white" />
                  <span>Agendar</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Wellhub Notice Bar */}
        <div className="mt-12 bg-white rounded-2xl p-6 border border-emerald-200/80 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3 text-center sm:text-left">
            <div className="w-12 h-12 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
              <Sparkles className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-bold text-slate-900 text-base">É conveniado ou usuário do Wellhub (Gympass)?</h4>
              <p className="text-slate-600 text-xs sm:text-sm">Você pode realizar suas sessões com check-in direto pelo app! Verifique seu plano e agende com antecedência.</p>
            </div>
          </div>
          <button
            onClick={() => onSelectService('Pilates Solo com Wellhub')}
            className="shrink-0 bg-emerald-600 hover:bg-emerald-700 text-white text-xs sm:text-sm font-bold px-5 py-2.5 rounded-xl transition-colors cursor-pointer shadow-sm"
          >
            Agendar no WhatsApp
          </button>
        </div>
      </div>

      {/* Service Detail Modal */}
      {selectedServiceDetail && (
        <div
          id="service-detail-modal"
          className="fixed inset-0 z-50 bg-slate-950/70 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto"
          onClick={() => setSelectedServiceDetail(null)}
        >
          <div
            className="bg-white rounded-2xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl border border-slate-200 relative my-8"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedServiceDetail(null)}
              className="absolute top-4 right-4 p-2 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
              aria-label="Fechar"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="space-y-6">
              {/* Header */}
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-cyan-100 flex items-center justify-center">
                  {getServiceIcon(selectedServiceDetail.iconName)}
                </div>
                <div>
                  <span className="text-xs font-bold text-cyan-700 uppercase tracking-wider">
                    {selectedServiceDetail.category.toUpperCase()}
                  </span>
                  <h3 className="text-2xl font-bold text-slate-900">
                    {selectedServiceDetail.title}
                  </h3>
                </div>
              </div>

              {/* Full Description */}
              <div>
                <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Sobre o Procedimento</h4>
                <p className="text-slate-700 text-sm sm:text-base leading-relaxed bg-slate-50 p-4 rounded-xl border border-slate-200">
                  {selectedServiceDetail.fullDescription}
                </p>
              </div>

              {/* Benefits */}
              <div>
                <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2.5">Benefícios Principais</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {selectedServiceDetail.benefits.map((b, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs text-slate-700 bg-white border border-slate-200 p-2.5 rounded-lg">
                      <CheckCircle className="w-4 h-4 text-cyan-600 shrink-0 mt-0.5" />
                      <span>{b}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Indications */}
              <div>
                <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2.5">Para quem é mais indicado?</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {selectedServiceDetail.indications.map((ind, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs text-slate-600 bg-slate-50 p-2 rounded-lg">
                      <span className="w-1.5 h-1.5 rounded-full bg-teal-500"></span>
                      <span>{ind}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Modal CTA Footer */}
              <div className="pt-4 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-3">
                <div className="flex items-center gap-2 text-xs text-slate-500">
                  <Clock className="w-4 h-4 text-slate-400" />
                  Duração estimada: <strong>{selectedServiceDetail.durationMinutes} minutos</strong>
                </div>

                <div className="flex items-center gap-2 w-full sm:w-auto">
                  <button
                    onClick={() => setSelectedServiceDetail(null)}
                    className="flex-1 sm:flex-none py-2.5 px-4 rounded-xl border border-slate-300 text-slate-700 text-xs font-semibold hover:bg-slate-100 transition-colors"
                  >
                    Fechar
                  </button>
                  <button
                    onClick={() => {
                      const name = selectedServiceDetail.title;
                      setSelectedServiceDetail(null);
                      onSelectService(name);
                    }}
                    className="flex-1 sm:flex-none py-2.5 px-5 rounded-xl bg-gradient-to-r from-cyan-600 to-teal-600 hover:from-cyan-500 hover:to-teal-500 text-white text-xs font-bold transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <MessageCircle className="w-4 h-4 fill-white" />
                    Agendar pelo WhatsApp
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
