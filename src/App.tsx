import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { ServicesSection } from './components/ServicesSection';
import { EvolutionCaseStudy } from './components/EvolutionCaseStudy';
import { AboutSection } from './components/AboutSection';
import { LocationSection } from './components/LocationSection';
import { FAQSection } from './components/FAQSection';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { STUDIO_INFO } from './data/studioData';

export default function App() {
  const openDirectWhatsApp = (serviceName?: string) => {
    let msg = 'Olá Fabíola! Gostaria de informações sobre agendamento no Studio.';
    if (serviceName) {
      msg = `Olá Fabíola! Gostaria de agendar um horário para ${serviceName}.`;
    }
    const url = `https://wa.me/${STUDIO_INFO.whatsappRaw}?text=${encodeURIComponent(msg)}`;
    window.open(url, '_blank');
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 flex flex-col font-['Plus_Jakarta_Sans',sans-serif]">
      {/* Fixed Header */}
      <Header onOpenWhatsApp={() => openDirectWhatsApp()} />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* 1. Hero Section */}
        <Hero onOpenWhatsApp={() => openDirectWhatsApp()} />

        {/* 2. Services & Procedures Catalog */}
        <ServicesSection onSelectService={(serviceName) => openDirectWhatsApp(serviceName)} />

        {/* 3. Real Evolution / 1-Month Pilates Solo Case Study */}
        <EvolutionCaseStudy onBookPilates={() => openDirectWhatsApp('Pilates Solo')} />

        {/* 4. About Fabíola Alves & The Studio */}
        <AboutSection />

        {/* 5. Location, Hours & Google Maps Directions */}
        <LocationSection />

        {/* 6. Frequently Asked Questions (FAQ) */}
        <FAQSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating WhatsApp Action Button */}
      <FloatingWhatsApp />
    </div>
  );
}
