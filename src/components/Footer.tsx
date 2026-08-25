import React from 'react';
import { STORE_INFO, getGeneralWhatsAppUrl } from '../data/storeInfo';
import { MapPin, Sparkles, Clock, Navigation, Phone, MessageCircle } from 'lucide-react';

interface FooterProps {
  onNavigate: (sectionId: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="bg-[#1a0202] text-[#f5f2ed]/80 border-t border-[#d4af37]/20 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-[#d4af37]/15">
          {/* Brand Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-[#3a0404] border border-[#d4af37]/50 flex items-center justify-center">
                <span className="font-serif font-bold text-sm text-[#d4af37]">GJ</span>
              </div>
              <h3 className="font-serif text-lg font-bold tracking-widest text-[#d4af37]">
                GAYTRI JEWELLERS
              </h3>
            </div>

            <p className="text-xs leading-relaxed text-[#f5f2ed]/60">
              Station Road, Rasra, Ballia, Uttar Pradesh – 221712, India.
              Your trusted showroom for hallmark silver rakhis, pure sterling silver jewellery, and traditional fine craftsmanship.
            </p>

            <div className="pt-1">
              <span className="text-xs font-serif italic text-[#d4af37]">
                &ldquo;Beautiful Jewellery. Timeless Bonds.&rdquo;
              </span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-[#d4af37] mb-4">
              Quick Navigation
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <button
                  onClick={() => onNavigate('hero-section')}
                  className="hover:text-[#d4af37] transition-colors cursor-pointer"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('raksha-bandhan-section')}
                  className="hover:text-[#d4af37] transition-colors cursor-pointer"
                >
                  Silver Rakhi Collection
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('catalogue-section')}
                  className="hover:text-[#d4af37] transition-colors cursor-pointer"
                >
                  Jewellery Catalogue
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('featured-section')}
                  className="hover:text-[#d4af37] transition-colors cursor-pointer"
                >
                  Featured Collections
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('why-us-section')}
                  className="hover:text-[#d4af37] transition-colors cursor-pointer"
                >
                  Why Gaytri Jewellers
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('contact-section')}
                  className="hover:text-[#d4af37] transition-colors cursor-pointer"
                >
                  Showroom &amp; Directions
                </button>
              </li>
            </ul>
          </div>

          {/* Featured Collections List */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-[#d4af37] mb-4">
              Festival &amp; Craft
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <button
                  onClick={() => onNavigate('raksha-bandhan-section')}
                  className="hover:text-[#d4af37] transition-colors flex items-center gap-1.5 cursor-pointer text-left"
                >
                  <Sparkles className="w-3 h-3 text-[#d4af37]" />
                  <span>Classic &amp; Om Silver Rakhis</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('raksha-bandhan-section')}
                  className="hover:text-[#d4af37] transition-colors cursor-pointer text-left block"
                >
                  Rudraksha &amp; Silver Keepsakes
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('catalogue-section')}
                  className="hover:text-[#d4af37] transition-colors cursor-pointer text-left block"
                >
                  Pure 92.5 Silver Rings &amp; Bangles
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('catalogue-section')}
                  className="hover:text-[#d4af37] transition-colors cursor-pointer text-left block"
                >
                  Silver Coins &amp; Festive Pooja Sets
                </button>
              </li>
            </ul>
          </div>

          {/* Showroom Information */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-[#d4af37] mb-4">
              Showroom Location &amp; Contact
            </h4>
            <div className="space-y-3 text-xs">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#d4af37] shrink-0 mt-0.5" />
                <span>Station Road, Rasra, Ballia, Uttar Pradesh – 221712, India</span>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#d4af37] shrink-0" />
                <a href={`tel:${STORE_INFO.phoneRaw}`} className="hover:text-[#d4af37] font-medium">
                  {STORE_INFO.phoneDisplay}
                </a>
              </div>

              <div className="flex items-center gap-2.5">
                <MessageCircle className="w-4 h-4 text-[#25D366] shrink-0" />
                <a
                  href={getGeneralWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#25D366] hover:underline font-semibold"
                >
                  WhatsApp: {STORE_INFO.phoneDisplay}
                </a>
              </div>

              <div className="flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-[#d4af37] shrink-0" />
                <span>Open Daily: 10:00 AM – 8:30 PM</span>
              </div>

              <div className="pt-2">
                <a
                  href={STORE_INFO.mapDirectionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-[10px] uppercase tracking-wider text-[#d4af37] hover:underline border border-[#d4af37]/30 px-3 py-2 bg-[#2a0303]"
                >
                  <Navigation className="w-3 h-3 text-[#d4af37]" />
                  <span>Get Directions in Google Maps &rarr;</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom copyright line */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-[#f5f2ed]/50 gap-4">
          <p>© 2026 Gaytri Jewellers. All Rights Reserved.</p>
          <p className="flex items-center gap-1">
            <span>Crafted for Raksha Bandhan &amp; Fine Jewellery Celebrations</span>
          </p>
        </div>
      </div>
    </footer>
  );
};
