import React from 'react';
import { Sparkles, ArrowRight, Gift } from 'lucide-react';

interface FestivalBannerProps {
  onViewRakhis: () => void;
  onExploreCatalogue?: () => void;
}

export const FestivalBanner: React.FC<FestivalBannerProps> = ({
  onViewRakhis,
  onExploreCatalogue
}) => {
  return (
    <section className="relative py-14 sm:py-20 bg-[#1a0202] border-y border-[#d4af37]/20 text-[#f5f2ed] overflow-hidden">
      {/* Decorative filigree texture overlay */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#d4af37_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 bg-[#d4af37]/10 border border-[#d4af37]/30 rounded-full mb-6 shadow-sm">
          <span className="w-2 h-2 rounded-full bg-[#d4af37]"></span>
          <span className="text-[10px] uppercase tracking-widest text-[#d4af37] font-semibold">Auspicious Raksha Bandhan 2026</span>
        </div>

        <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-[#f5f2ed] mb-4 leading-tight">
          This Raksha Bandhan, Gift Something <span className="italic text-[#d4af37]">Timeless</span>
        </h2>

        <p className="text-base sm:text-lg text-[#f5f2ed]/70 font-light max-w-2xl mx-auto mb-8 leading-relaxed">
          Elegant Silver Rakhis from Gaytri Jewellers — handcrafted with devotion to symbolize enduring love, protection, and cherished memories.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            id="banner-view-rakhis-btn"
            onClick={onViewRakhis}
            className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-4 bg-[#d4af37] text-[#2a0303] font-bold text-xs sm:text-sm uppercase tracking-widest hover:brightness-110 transition-all shadow-md cursor-pointer"
          >
            <Gift className="w-4 h-4 text-[#2a0303]" />
            <span>View Silver Rakhis</span>
            <ArrowRight className="w-4 h-4 text-[#2a0303]" />
          </button>

          {onExploreCatalogue && (
            <button
              id="banner-catalogue-btn"
              onClick={onExploreCatalogue}
              className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-4 border border-[#f5f2ed]/30 hover:bg-[#f5f2ed]/10 text-[#f5f2ed] text-xs sm:text-sm font-bold uppercase tracking-widest transition-all cursor-pointer"
            >
              <span>Explore All Jewellery</span>
            </button>
          )}
        </div>
      </div>
    </section>
  );
};
