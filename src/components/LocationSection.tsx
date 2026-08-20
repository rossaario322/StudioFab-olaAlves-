import React, { useState } from 'react';
import { MapPin, Navigation, Clock, Copy, Check, ExternalLink, Phone, ShieldCheck, Accessibility } from 'lucide-react';
import { STUDIO_INFO } from '../data/studioData';

export const LocationSection: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const fullAddressText = `${STUDIO_INFO.address.street} - ${STUDIO_INFO.address.neighborhood}, ${STUDIO_INFO.address.city} - ${STUDIO_INFO.address.state}, CEP ${STUDIO_INFO.address.zip}`;

  const handleCopyAddress = () => {
    navigator.clipboard.writeText(fullAddressText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="localizacao" className="py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-14">
          <div className="inline-flex items-center gap-1.5 bg-cyan-50 text-cyan-800 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
            <MapPin className="w-3.5 h-3.5 text-cyan-600" />
            Localização & Horários
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Fácil acesso no Bairro Portão em Curitiba
          </h2>
          <p className="text-slate-600 text-base sm:text-lg">
            Ambiente acolhedor, arejado e com acessibilidade para você realizar seus tratamentos com toda a tranquilidade.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left Column: Address & Practical Details */}
          <div className="lg:col-span-6 space-y-6 flex flex-col justify-between">
            <div className="bg-slate-50 border border-slate-200/90 rounded-3xl p-6 sm:p-8 space-y-6">
              {/* Address Box */}
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-cyan-800 uppercase tracking-wider">Endereço do Studio</span>
                  <button
                    onClick={handleCopyAddress}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-600 hover:text-cyan-700 bg-white border border-slate-200 px-2.5 py-1 rounded-lg transition-colors cursor-pointer"
                  >
                    {copied ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-600" />
                        <span className="text-emerald-600">Copiado!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span>Copiar Endereço</span>
                      </>
                    )}
                  </button>
                </div>

                <h3 className="text-xl font-bold text-slate-900">
                  {STUDIO_INFO.address.street}
                </h3>
                <p className="text-sm text-slate-600 font-medium">
                  Bairro {STUDIO_INFO.address.neighborhood} • {STUDIO_INFO.address.city} - {STUDIO_INFO.address.state} • CEP {STUDIO_INFO.address.zip}
                </p>
                <p className="text-xs text-slate-400 font-mono">
                  Plus Code Google: {STUDIO_INFO.address.plusCode}
                </p>
              </div>

              {/* Opening Hours Box */}
              <div className="border-t border-slate-200 pt-5 space-y-3">
                <div className="flex items-center gap-2 text-xs font-bold text-slate-900 uppercase tracking-wider">
                  <Clock className="w-4 h-4 text-cyan-600" />
                  <span>Horários de Atendimento</span>
                </div>

                <div className="space-y-2 text-xs sm:text-sm">
                  <div className="flex items-center justify-between bg-white p-3 rounded-xl border border-slate-200">
                    <span className="font-semibold text-slate-800">Segunda a Sexta-feira:</span>
                    <span className="font-bold text-cyan-700">08:00 às 19:00</span>
                  </div>
                  <div className="flex items-center justify-between bg-white p-3 rounded-xl border border-slate-200">
                    <span className="font-semibold text-slate-800">Sábado:</span>
                    <span className="text-slate-600 text-xs">Horários especiais sob agendamento</span>
                  </div>
                  <div className="flex items-center justify-between bg-white p-3 rounded-xl border border-slate-200">
                    <span className="font-semibold text-slate-800">Domingo:</span>
                    <span className="text-rose-600 font-medium text-xs">Fechado</span>
                  </div>
                </div>
              </div>

              {/* Accessibility & Comfort */}
              <div className="border-t border-slate-200 pt-4 flex items-center gap-3 text-xs text-slate-600">
                <Accessibility className="w-5 h-5 text-cyan-600 shrink-0" />
                <span>Espaço com acessibilidade total para pessoas com deficiência e cadeirantes.</span>
              </div>
            </div>

            {/* Google Maps Actions */}
            <div className="flex flex-col sm:flex-row items-center gap-3">
              <a
                href={STUDIO_INFO.address.googleMapsUrl}
                target="_blank"
                rel="noreferrer"
                className="w-full sm:flex-1 py-3.5 px-6 rounded-2xl bg-cyan-700 hover:bg-cyan-800 text-white text-sm font-bold shadow-md transition-all flex items-center justify-center gap-2"
              >
                <Navigation className="w-4 h-4" />
                Traçar Rota no Google Maps
              </a>
              <a
                href={`https://wa.me/${STUDIO_INFO.whatsappRaw}?text=${encodeURIComponent('Olá Fabíola! Gostaria de saber como chegar ao Studio.')}`}
                target="_blank"
                rel="noreferrer"
                className="w-full sm:flex-1 py-3.5 px-6 rounded-2xl bg-slate-900 hover:bg-slate-800 text-slate-100 text-sm font-semibold transition-all flex items-center justify-center gap-2"
              >
                <Phone className="w-4 h-4 text-cyan-400" />
                Pedir Localização no WhatsApp
              </a>
            </div>
          </div>

          {/* Right Column: Stylized Visual Map Card */}
          <div className="lg:col-span-6">
            <div className="h-full min-h-[380px] rounded-3xl bg-slate-900 text-white p-6 sm:p-8 flex flex-col justify-between border border-slate-800 relative overflow-hidden shadow-xl">
              <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none"></div>

              {/* Stylized Map Header */}
              <div className="space-y-2 relative z-10">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-cyan-400 animate-ping"></span>
                    <span className="text-xs font-bold uppercase tracking-wider text-cyan-300">Ponto de Referência</span>
                  </div>
                  <span className="text-xs text-slate-400">Curitiba • Paraná</span>
                </div>
                <h3 className="text-2xl font-bold text-white">Studio Fabíola Alves</h3>
                <p className="text-xs text-slate-300">
                  Rua Luiz Parigot de Souza, 356 – Portão
                </p>
              </div>

              {/* Map Illustration / Visual Coordinates Guide */}
              <div className="my-6 p-5 rounded-2xl bg-slate-950/80 border border-slate-800 space-y-4 relative z-10">
                <div className="space-y-2 text-xs">
                  <div className="flex items-center justify-between text-slate-300 pb-2 border-b border-slate-800/80">
                    <span className="text-slate-400">Bairro:</span>
                    <span className="font-bold text-white">Portão</span>
                  </div>
                  <div className="flex items-center justify-between text-slate-300 pb-2 border-b border-slate-800/80">
                    <span className="text-slate-400">Estacionamento:</span>
                    <span className="font-semibold text-emerald-400">Fácil parada na via e arredores</span>
                  </div>
                  <div className="flex items-center justify-between text-slate-300">
                    <span className="text-slate-400">Transporte Público:</span>
                    <span className="font-semibold text-white">Próximo aos eixos de ônibus do Portão</span>
                  </div>
                </div>

                <div className="bg-slate-900 p-3 rounded-xl border border-cyan-500/20 text-[11px] text-cyan-200">
                  📍 <strong>Dica para o dia do atendimento:</strong> Chegue com 5 a 10 minutos de antecedência para desfrutar da recepção acolhedora e iniciar sua sessão no horário exato com total tranquilidade.
                </div>
              </div>

              {/* Open in maps footer link */}
              <div className="relative z-10 flex items-center justify-between pt-2 border-t border-slate-800/80 text-xs">
                <span className="text-slate-400">Google Maps 5.0 ⭐</span>
                <a
                  href={STUDIO_INFO.address.googleMapsUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="text-cyan-400 hover:text-cyan-300 font-bold flex items-center gap-1"
                >
                  <span>Abrir aplicativo de mapas</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
