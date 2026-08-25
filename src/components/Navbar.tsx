import React, { useState, useEffect } from 'react';
import { Menu, X, MapPin, Sparkles, Clock, Phone, MessageCircle } from 'lucide-react';
import { STORE_INFO, getGeneralWhatsAppUrl } from '../data/storeInfo';

interface NavbarProps {
  onNavigate: (sectionId: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onNavigate }) => {
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', target: 'hero-section' },
    { label: 'Silver Rakhi', target: 'raksha-bandhan-section' },
    { label: 'Jewellery', target: 'catalogue-section' },
    { label: 'Featured', target: 'featured-section' },
    { label: 'Why Us', target: 'why-us-section' },
    { label: 'Showroom & Contact', target: 'contact-section' },
  ];

  const handleLinkClick = (target: string) => {
    onNavigate(target);
    setMobileMenuOpen(false);
  };

  return (
    <header
      id="main-navbar"
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#1a0202]/95 backdrop-blur-md py-3 shadow-[0_4px_30px_rgba(0,0,0,0.8)] border-b border-[#d4af37]/25'
          : 'bg-gradient-to-b from-[#1a0202]/95 to-transparent py-4 sm:py-5 border-b border-[#d4af37]/15'
      }`}
    >
      {/* Top micro bar with location & timings on desktop */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-1.5 hidden md:flex items-center justify-between text-[11px] text-[#f5f2ed]/70 border-b border-[#d4af37]/10 pb-1">
        <div className="flex items-center gap-2">
          <MapPin className="w-3 h-3 text-[#d4af37]" />
          <span>Station Road, Rasra, Ballia, Uttar Pradesh – 221712</span>
        </div>
        <div className="flex items-center gap-4">
          <a
            href={`tel:${STORE_INFO.phoneRaw}`}
            className="text-[#f5f2ed] hover:text-[#d4af37] transition-colors flex items-center gap-1 font-medium"
          >
            <Phone className="w-3 h-3 text-[#d4af37]" />
            <span>Call: {STORE_INFO.phoneDisplay}</span>
          </a>
          <span className="text-[#d4af37]/60">✦</span>
          <a
            href={getGeneralWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#25D366] hover:underline flex items-center gap-1 font-medium"
          >
            <MessageCircle className="w-3 h-3 text-[#25D366]" />
            <span>WhatsApp: {STORE_INFO.phoneDisplay}</span>
          </a>
          <span className="text-[#d4af37]/60">✦</span>
          <span className="flex items-center gap-1 text-[#d4af37] font-medium">
            <Clock className="w-3 h-3" />
            <span>Open: 10:00 AM – 8:30 PM</span>
          </span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo & Name */}
        <div
          id="brand-logo-btn"
          onClick={() => handleLinkClick('hero-section')}
          className="cursor-pointer flex items-center gap-3 group select-none"
        >
          <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-gradient-to-br from-[#d4af37] to-[#5a0606] p-[1.5px] shadow-[0_0_15px_rgba(212,175,55,0.3)]">
            <div className="w-full h-full bg-[#1a0202] rounded-full flex items-center justify-center">
              <span className="font-serif font-bold text-sm sm:text-base text-[#d4af37] tracking-wider">
                GJ
              </span>
            </div>
          </div>

          <div className="flex flex-col">
            <span className="text-lg sm:text-xl font-serif tracking-[0.2em] text-[#d4af37] font-bold block group-hover:brightness-110 transition-all">
              GAYTRI JEWELLERS
            </span>
            <span className="text-[9px] sm:text-[10px] tracking-[0.3em] uppercase opacity-60 text-[#f5f2ed] -mt-0.5">
              Excellence in Silver &amp; Gold · Rasra
            </span>
          </div>
        </div>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <button
              key={link.target}
              onClick={() => handleLinkClick(link.target)}
              className="text-xs uppercase tracking-widest text-[#f5f2ed]/80 hover:text-[#d4af37] transition-colors relative py-1 group cursor-pointer"
            >
              {link.label}
              <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-[#d4af37] group-hover:w-full transition-all duration-300" />
            </button>
          ))}
        </nav>

        {/* Action CTAs: Direct Catalogue and Showroom Navigation */}
        <div className="hidden sm:flex items-center gap-3">
          <button
            id="nav-catalogue-btn"
            onClick={() => handleLinkClick('catalogue-section')}
            className="flex items-center gap-1.5 px-4 py-2 border border-[#d4af37]/60 text-[#d4af37] text-xs font-bold uppercase tracking-wider hover:bg-[#d4af37] hover:text-[#2a0303] transition-all cursor-pointer"
          >
            <span>Explore Designs</span>
          </button>

          <button
            id="nav-showroom-btn"
            onClick={() => handleLinkClick('contact-section')}
            className="flex items-center gap-1.5 px-4 py-2 bg-[#d4af37] hover:brightness-110 text-[#2a0303] text-xs font-bold uppercase tracking-wider shadow-md transition-all cursor-pointer"
          >
            <MapPin className="w-3.5 h-3.5" />
            <span>Showroom Location</span>
          </button>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="flex items-center gap-2 lg:hidden">
          <button
            id="hamburger-menu-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded bg-[#1a0202] text-[#d4af37] hover:text-white border border-[#d4af37]/30 cursor-pointer"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div
          id="mobile-nav-drawer"
          className="lg:hidden mt-3 px-6 py-6 bg-[#1a0202]/98 border-b border-[#d4af37]/30 shadow-2xl backdrop-blur-xl animate-fadeIn"
        >
          <div className="flex flex-col space-y-4">
            <div className="text-xs text-[#d4af37] font-semibold tracking-[0.2em] uppercase pb-1 border-b border-[#d4af37]/20">
              Station Road, Rasra, Ballia
            </div>
            {navLinks.map((link) => (
              <button
                key={link.target}
                onClick={() => handleLinkClick(link.target)}
                className="text-left text-sm font-medium uppercase tracking-wider text-[#f5f2ed] hover:text-[#d4af37] py-2 border-b border-white/5 transition-colors flex items-center justify-between cursor-pointer"
              >
                <span>{link.label}</span>
                <span className="text-[#d4af37] text-xs">→</span>
              </button>
            ))}

            <div className="pt-2 grid grid-cols-2 gap-3">
              <a
                href={`tel:${STORE_INFO.phoneRaw}`}
                className="flex items-center justify-center gap-2 py-3 border border-[#d4af37] text-[#d4af37] text-xs font-bold uppercase tracking-wider hover:bg-[#d4af37] hover:text-[#2a0303] cursor-pointer"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>Call Now</span>
              </a>
              <a
                href={getGeneralWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 py-3 bg-[#25D366] text-white text-xs font-bold uppercase tracking-wider hover:brightness-110 cursor-pointer"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                <span>WhatsApp</span>
              </a>
            </div>

            <div className="grid grid-cols-2 gap-3 pt-1">
              <button
                onClick={() => handleLinkClick('catalogue-section')}
                className="flex items-center justify-center gap-2 py-2.5 bg-[#2a0303] border border-[#d4af37]/40 text-[#f5f2ed] text-xs font-bold uppercase tracking-wider hover:border-[#d4af37] cursor-pointer"
              >
                <span>Catalogue</span>
              </button>
              <button
                onClick={() => handleLinkClick('contact-section')}
                className="flex items-center justify-center gap-2 py-2.5 bg-[#d4af37] text-[#2a0303] text-xs font-bold uppercase tracking-wider hover:brightness-110 cursor-pointer"
              >
                <MapPin className="w-3.5 h-3.5" />
                <span>Showroom</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
