import React from 'react';
import { Product } from '../types';
import { Eye, Sparkles } from 'lucide-react';

interface ProductCardProps {
  product: Product;
  onSelect: (product: Product) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product, onSelect }) => {
  return (
    <div
      id={`product-card-${product.id}`}
      className="group relative flex flex-col justify-between bg-[#2a0303] p-4 border border-[#d4af37]/15 hover:border-[#d4af37]/60 shadow-[0_4px_25px_rgba(0,0,0,0.5)] transition-all duration-300 overflow-hidden"
    >
      {/* Image Container with Hover Shine */}
      <div
        className="relative w-full aspect-square overflow-hidden bg-[#3a0404] border border-[#d4af37]/10 cursor-pointer mb-3"
        onClick={() => onSelect(product)}
      >
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 filter contrast-105"
          loading="lazy"
        />

        {/* Subtle dark vignette */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#1a0202]/80 via-transparent to-black/20" />

        {/* Tag badge */}
        {product.tag && (
          <div className="absolute top-2.5 left-2.5 bg-[#d4af37] text-[#2a0303] text-[9px] font-bold px-2 py-0.5 uppercase tracking-widest shadow-md">
            {product.tag}
          </div>
        )}

        {/* Metal purity badge */}
        <div className="absolute bottom-2.5 left-2.5 bg-[#1a0202]/90 text-[10px] text-[#d4af37] px-2 py-0.5 border border-[#d4af37]/30 flex items-center gap-1 font-semibold">
          <Sparkles className="w-3 h-3 text-[#d4af37]" />
          <span>{product.metalType}</span>
        </div>

        {/* Quick View overlay hint on hover */}
        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center pointer-events-none">
          <span className="flex items-center gap-1.5 px-3 py-1.5 bg-[#1a0202] border border-[#d4af37]/60 text-xs text-[#d4af37] font-semibold uppercase tracking-wider shadow-lg">
            <Eye className="w-3.5 h-3.5" />
            <span>Quick View</span>
          </span>
        </div>
      </div>

      {/* Card Content */}
      <div className="flex-1 flex flex-col justify-between">
        <div>
          <div className="text-[10px] uppercase tracking-[0.2em] text-[#d4af37] font-semibold mb-1">
            {product.categoryLabel}
          </div>
          <h3
            className="text-base font-serif font-bold text-[#f5f2ed] group-hover:text-[#d4af37] transition-colors cursor-pointer line-clamp-1 mb-1.5"
            onClick={() => onSelect(product)}
          >
            {product.name}
          </h3>
          <p className="text-xs text-[#f5f2ed]/60 line-clamp-2 leading-relaxed mb-4">
            {product.description}
          </p>
        </div>

        {/* Action Button */}
        <div className="pt-2 border-t border-[#d4af37]/15">
          <button
            id={`btn-view-${product.id}`}
            onClick={() => onSelect(product)}
            className="w-full py-2.5 px-3 bg-[#d4af37] hover:brightness-110 text-[#2a0303] text-xs font-bold uppercase tracking-wider shadow transition-all flex items-center justify-center gap-1.5 cursor-pointer"
          >
            <Eye className="w-3.5 h-3.5 text-[#2a0303]" />
            <span>View Specifications</span>
          </button>
        </div>
      </div>
    </div>
  );
};
