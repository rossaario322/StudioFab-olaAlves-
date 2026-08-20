import React, { useState, useEffect } from 'react';
import { Phone, MapPin, Clock, Menu, X, MessageCircle, Sparkles } from 'lucide-react';
import { STUDIO_INFO } from '../data/studioData';

interface HeaderProps {
  onOpenWhatsApp: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenWhatsApp }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Serviços', href: '#servicos' },
    { label: 'Resultados & Pilates', href: '#evolucao' },
    { label: 'Sobre o Studio', href: '#sobre' },
    { label: 'Como Chegar', href: '#localizacao' },
    { label: 'Dúvidas', href: '#faq' },
  ];

  return (
    <header id="main-header" className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      {/* Top Announcement Bar */}
      <div id="header-top-bar" className="bg-slate-900 text-slate-200 text-xs py-2 px-4 border-b border-slate-800 hidden sm:block">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5 text-cyan-400 font-medium">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              Aberto hoje das 08h às 19h
            </span>
            <span className="flex items-center gap-1 text-slate-300">
              <MapPin className="w-3.5 h-3.5 text-cyan-400" />
              Rua Luiz Parigot de Souza, 356 – Portão, Curitiba
            </span>
          </div>

          <div className="flex items-center gap-4">
            <span className="inline-flex items-center gap-1 text-emerald-300 font-semibold bg-emerald-950/60 border border-emerald-500/30 px-2 py-0.5 rounded-full text-[11px]">
              <Sparkles className="w-3 h-3 text-emerald-400" />
              Parceiro Oficial Wellhub
            </span>
            <a
              href={`https://wa.me/${STUDIO_INFO.whatsappRaw}?text=${encodeURIComponent('Olá Fabíola! Gostaria de informações sobre agendamento no Studio.')}`}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1.5 text-cyan-300 hover:text-cyan-200 transition-colors font-medium"
            >
              <Phone className="w-3.5 h-3.5" />
              (41) 99136-9885
            </a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav
        id="navbar"
        className={`transition-all duration-300 ${
          isScrolled
            ? 'bg-slate-900/95 backdrop-blur-md shadow-lg border-b border-slate-800/80 py-3'
            : 'bg-slate-900/80 backdrop-blur-sm border-b border-slate-800/50 py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="h-10 sm:h-11 flex items-center justify-center group-hover:scale-105 transition-transform">
              <img
                src="/Captura%20de%20tela%202026-08-20%20115612.png"
                alt="Studio Fabíola Alves"
                className="h-10 sm:h-11 w-auto object-contain rounded-lg drop-shadow-[0_2px_8px_rgba(6,182,212,0.3)]"
                referrerPolicy="no-referrer"
              />
            </div>
            <div>
              <span className="text-base sm:text-lg font-bold text-white tracking-tight block leading-tight">
                Studio Fabíola Alves
              </span>
              <span className="text-[11px] font-medium text-cyan-400 uppercase tracking-wider block">
                Fisioterapia & Massoterapia
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-slate-300 hover:text-cyan-400 transition-colors py-1 relative group"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-cyan-400 transition-all duration-200 group-hover:w-full"></span>
              </a>
            ))}
          </div>

          {/* Action CTA */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              id="header-booking-btn"
              onClick={onOpenWhatsApp}
              className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-teal-500 hover:from-cyan-400 hover:to-teal-400 text-slate-950 font-semibold px-4 py-2 rounded-xl text-sm shadow-md shadow-cyan-500/25 transition-all hover:shadow-cyan-500/40 hover:-translate-y-0.5 cursor-pointer"
            >
              <MessageCircle className="w-4 h-4 text-slate-950 fill-slate-950" />
              Agendar no WhatsApp
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            id="mobile-menu-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg text-slate-300 hover:text-white hover:bg-slate-800 transition-colors"
            aria-label="Abrir menu de navegação"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Dropdown */}
        {mobileMenuOpen && (
          <div id="mobile-menu-drawer" className="lg:hidden bg-slate-900 border-b border-slate-800 px-4 pt-3 pb-6 space-y-3 animate-fadeIn">
            <div className="space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block px-3 py-2.5 rounded-lg text-base font-medium text-slate-200 hover:bg-slate-800 hover:text-cyan-400 transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>

            <div className="pt-3 border-t border-slate-800 space-y-2">
              <button
                id="mobile-drawer-booking-btn"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenWhatsApp();
                }}
                className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-cyan-500 to-teal-500 text-slate-950 font-bold py-3 rounded-xl shadow-md text-sm cursor-pointer"
              >
                <MessageCircle className="w-4 h-4 fill-slate-950" />
                Agendar pelo WhatsApp
              </button>
              <div className="flex items-center justify-center gap-2 text-xs text-slate-400 pt-1">
                <Clock className="w-3.5 h-3.5 text-cyan-400" />
                Seg a Sex: 08h às 19h • Portão, Curitiba
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};
