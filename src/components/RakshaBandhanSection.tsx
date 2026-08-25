import React from 'react';
import { Product } from '../types';
import { ProductCard } from './ProductCard';
import { Sparkles, Heart, Gift, MapPin, ArrowRight } from 'lucide-react';

interface RakshaBandhanSectionProps {
  products: Product[];
  onSelectProduct: (product: Product) => void;
  onExploreMore: () => void;
  onShowroomClick?: () => void;
}

export const RakshaBandhanSection: React.FC<RakshaBandhanSectionProps> = ({
  products,
  onSelectProduct,
  onExploreMore,
  onShowroomClick
}) => {
  const rakhiProducts = products.filter((p) => p.isRakhi);

  return (
    <section id="raksha-bandhan-section" className="relative py-16 sm:py-24 bg-[#1a0202] text-[#f5f2ed] border-t border-[#d4af37]/20 overflow-hidden">
      {/* Background festive ambient accents */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-[radial-gradient(ellipse_at_top,rgba(212,175,55,0.1),transparent_70%)] pointer-events-none" />
      <div className="absolute -left-32 top-1/3 w-80 h-80 bg-[#d4af37]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -right-32 bottom-1/4 w-80 h-80 bg-[#d4af37]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#d4af37]/10 border border-[#d4af37]/30 rounded-full mb-4">
            <span className="w-2 h-2 rounded-full bg-[#d4af37]"></span>
            <span className="text-[10px] uppercase tracking-widest text-[#d4af37] font-semibold">Festive Special Collection</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif leading-tight text-[#f5f2ed] mb-4">
            Silver Rakhis for a <span className="italic text-[#d4af37]">Special Bond</span>
          </h2>

          <div className="w-24 h-[1px] bg-[#d4af37]/40 mx-auto mb-5" />

          <p className="text-base sm:text-lg text-[#f5f2ed]/70 font-light leading-relaxed">
            Make Raksha Bandhan memorable with an elegant silver Rakhi from Gaytri Jewellers.
            Thoughtfully handcrafted for brothers who deserve something timeless.
          </p>
        </div>

        {/* 3 Quick Rakhi Perks */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-12 max-w-4xl mx-auto">
          <div className="flex items-center gap-3.5 p-4 bg-[#2a0303] border border-[#d4af37]/15">
            <div className="w-10 h-10 bg-[#3a0404] flex items-center justify-center shrink-0 border border-[#d4af37]/30 text-[#d4af37]">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-xs font-bold text-[#f5f2ed] uppercase tracking-wider">92.5 Sterling Silver</h3>
              <p className="text-[11px] text-[#f5f2ed]/60">Pure silver hallmarked artistry</p>
            </div>
          </div>

          <div className="flex items-center gap-3.5 p-4 bg-[#2a0303] border border-[#d4af37]/15">
            <div className="w-10 h-10 bg-[#3a0404] flex items-center justify-center shrink-0 border border-[#d4af37]/30 text-[#d4af37]">
              <Heart className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-xs font-bold text-[#f5f2ed] uppercase tracking-wider">Wearable Keepsake</h3>
              <p className="text-[11px] text-[#f5f2ed]/60">Convertible to pendant or bracelet</p>
            </div>
          </div>

          <div className="flex items-center gap-3.5 p-4 bg-[#2a0303] border border-[#d4af37]/15">
            <div className="w-10 h-10 bg-[#3a0404] flex items-center justify-center shrink-0 border border-[#d4af37]/30 text-[#d4af37]">
              <Gift className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-xs font-bold text-[#f5f2ed] uppercase tracking-wider">Velvet Gift Box</h3>
              <p className="text-[11px] text-[#f5f2ed]/60">Complimentary Roli &amp; Chawal</p>
            </div>
          </div>
        </div>

        {/* Silver Rakhi Product Grid (All 8 Designs) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-7 mb-12">
          {rakhiProducts.map((product) => (
            <ProductCard key={product.id} product={product} onSelect={onSelectProduct} />
          ))}
        </div>

        {/* Bottom Festive Showroom Bar */}
        <div className="bg-[#2a0303] border border-[#d4af37]/30 p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="text-center md:text-left">
            <h3 className="text-xl sm:text-2xl font-serif text-[#f5f2ed] mb-1">
              Looking for Custom Box Packaging or Bulk Festive Orders?
            </h3>
            <p className="text-xs sm:text-sm text-[#f5f2ed]/70">
              Visit our Rasra showroom at Station Road to view physical weights, custom box designs, and silver coin sets in person.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0">
            {onShowroomClick && (
              <button
                id="rakhi-section-showroom-cta"
                onClick={onShowroomClick}
                className="flex items-center gap-2 px-6 py-3.5 bg-[#d4af37] text-[#2a0303] font-bold text-xs sm:text-sm uppercase tracking-wider hover:brightness-110 transition-all shadow-md cursor-pointer"
              >
                <MapPin className="w-4 h-4" />
                <span>Showroom Location</span>
              </button>
            )}

            <button
              onClick={onExploreMore}
              className="flex items-center gap-2 px-5 py-3.5 border border-[#f5f2ed]/30 hover:bg-[#f5f2ed]/10 text-[#f5f2ed] text-xs sm:text-sm font-bold uppercase tracking-wider transition-colors cursor-pointer"
            >
              <span>View All Jewellery</span>
              <ArrowRight className="w-4 h-4 text-[#d4af37]" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
