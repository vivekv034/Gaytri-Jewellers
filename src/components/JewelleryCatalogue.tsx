import React, { useState, useMemo } from 'react';
import { Product, CategoryType } from '../types';
import { CATEGORIES } from '../data/products';
import { ProductCard } from './ProductCard';
import { Search, Filter, Sparkles, RefreshCw } from 'lucide-react';

interface JewelleryCatalogueProps {
  products: Product[];
  onSelectProduct: (product: Product) => void;
}

export const JewelleryCatalogue: React.FC<JewelleryCatalogueProps> = ({
  products,
  onSelectProduct,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<CategoryType>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const filteredProducts = useMemo(() => {
    return products.filter((item) => {
      const matchesCategory =
        selectedCategory === 'all' || item.category === selectedCategory;
      const matchesSearch =
        searchQuery.trim() === '' ||
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.categoryLabel.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.metalType.toLowerCase().includes(searchQuery.toLowerCase());

      return matchesCategory && matchesSearch;
    });
  }, [products, selectedCategory, searchQuery]);

  return (
    <section id="catalogue-section" className="py-16 sm:py-24 bg-[#2a0303] text-[#f5f2ed]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <span className="text-[11px] uppercase tracking-[0.3em] text-[#d4af37] font-semibold mb-2 block">
            Showroom Catalogue
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-[#f5f2ed] mb-4 leading-tight">
            Discover Our <span className="italic text-[#d4af37]">Jewellery</span>
          </h2>
          <div className="w-24 h-[1px] bg-[#d4af37]/40 mx-auto mb-4" />
          <p className="text-sm sm:text-base text-[#f5f2ed]/70 font-light">
            Explore handcrafted Silver Rakhis, sterling silver adornments, and heritage bridal jewelry created with authentic artistry.
          </p>
        </div>

        {/* Search & Filter Bar */}
        <div className="max-w-xl mx-auto mb-8">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#d4af37]" />
            <input
              id="jewellery-search-input"
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search jewellery by name, metal or style..."
              className="w-full pl-11 pr-10 py-3.5 bg-[#1a0202] border border-[#d4af37]/30 text-sm text-[#f5f2ed] placeholder-[#f5f2ed]/40 focus:outline-none focus:border-[#d4af37] focus:ring-1 focus:ring-[#d4af37] shadow-inner transition-all"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3.5 top-1/2 -translate-y-1/2 text-xs text-[#f5f2ed]/70 hover:text-white px-2 py-1 bg-[#3a0404] border border-[#d4af37]/20"
              >
                Clear
              </button>
            )}
          </div>
        </div>

        {/* Category Filter Chips */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-10 scrollbar-none justify-start lg:justify-center">
          {CATEGORIES.map((cat) => {
            const isSelected = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                id={`category-filter-btn-${cat.id}`}
                onClick={() => setSelectedCategory(cat.id)}
                className={`whitespace-nowrap px-4 py-2 text-xs font-bold uppercase tracking-wider transition-all duration-200 shrink-0 cursor-pointer ${
                  isSelected
                    ? 'bg-[#d4af37] text-[#2a0303] shadow-[0_0_15px_rgba(212,175,55,0.3)]'
                    : 'bg-[#1a0202] text-[#f5f2ed]/80 hover:text-[#d4af37] hover:bg-[#3a0404] border border-[#d4af37]/20'
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Results Counter */}
        <div className="flex items-center justify-between text-xs text-[#f5f2ed]/60 mb-6 px-1 border-b border-[#d4af37]/20 pb-2">
          <span>
            Showing <strong className="text-[#d4af37]">{filteredProducts.length}</strong> designs
            {selectedCategory !== 'all' && (
              <span> in <strong className="text-[#d4af37] capitalize">{selectedCategory.replace('-', ' ')}</strong></span>
            )}
          </span>

          {(selectedCategory !== 'all' || searchQuery) && (
            <button
              onClick={() => {
                setSelectedCategory('all');
                setSearchQuery('');
              }}
              className="text-[#d4af37] hover:underline flex items-center gap-1 cursor-pointer"
            >
              <RefreshCw className="w-3 h-3" />
              <span>Reset Filters</span>
            </button>
          )}
        </div>

        {/* Products Grid */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-7">
            {filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onSelect={onSelectProduct}
              />
            ))}
          </div>
        ) : (
          <div className="py-16 text-center bg-[#1a0202] border border-dashed border-[#d4af37]/30 max-w-md mx-auto p-8">
            <Sparkles className="w-8 h-8 text-[#d4af37] mx-auto mb-3 opacity-60" />
            <h3 className="text-lg font-serif font-bold text-[#f5f2ed] mb-1">
              No matching jewellery found
            </h3>
            <p className="text-xs text-[#f5f2ed]/60 mb-5">
              Try searching with different terms or check all designs in our Rasra showroom.
            </p>
            <button
              onClick={() => {
                setSelectedCategory('all');
                setSearchQuery('');
              }}
              className="px-6 py-3 bg-[#d4af37] text-[#2a0303] text-xs font-bold uppercase tracking-wider hover:brightness-110 transition-colors cursor-pointer"
            >
              View Full Collection
            </button>
          </div>
        )}
      </div>
    </section>
  );
};
