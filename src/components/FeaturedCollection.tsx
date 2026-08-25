import React from 'react';
import { Product } from '../types';
import { ProductCard } from './ProductCard';
import { Sparkles, Crown } from 'lucide-react';

interface FeaturedCollectionProps {
  products: Product[];
  onSelectProduct: (product: Product) => void;
}

export const FeaturedCollection: React.FC<FeaturedCollectionProps> = ({
  products,
  onSelectProduct,
}) => {
  const featuredProducts = products.filter((p) => p.featured).slice(0, 6);

  return (
    <section id="featured-section" className="py-16 sm:py-24 bg-[#1a0202] text-[#f5f2ed] border-t border-[#d4af37]/20 relative overflow-hidden">
      {/* Subtle decorative glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#d4af37]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#d4af37]/10 border border-[#d4af37]/30 rounded-full mb-3">
            <span className="w-2 h-2 rounded-full bg-[#d4af37]"></span>
            <span className="text-[10px] uppercase tracking-widest text-[#d4af37] font-semibold">Showroom Curations</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-[#f5f2ed] mb-3 leading-tight">
            Handpicked for <span className="italic text-[#d4af37]">You</span>
          </h2>

          <div className="w-20 h-[1px] bg-[#d4af37]/40 mx-auto mb-4" />

          <p className="text-sm sm:text-base text-[#f5f2ed]/70 font-light">
            A showcase of our most cherished designs — blending timeless heritage motifs with contemporary refinement.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {featuredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onSelect={onSelectProduct}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
