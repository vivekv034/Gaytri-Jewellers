import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { RakshaBandhanSection } from './components/RakshaBandhanSection';
import { FestivalBanner } from './components/FestivalBanner';
import { JewelleryCatalogue } from './components/JewelleryCatalogue';
import { FeaturedCollection } from './components/FeaturedCollection';
import { TrustSection } from './components/TrustSection';
import { ShowroomContact } from './components/ShowroomContact';
import { Footer } from './components/Footer';
import { ProductDetailModal } from './components/ProductDetailModal';
import { PRODUCTS } from './data/products';
import { Product } from './types';

export default function App() {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const scrollToSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#2a0303] text-[#f5f2ed] flex flex-col selection:bg-[#d4af37] selection:text-[#2a0303]">
      {/* Sticky Header Navigation */}
      <Navbar onNavigate={scrollToSection} />

      <main className="flex-1">
        {/* Full-width Hero with Three.js 3D Procedural Silver Rakhi */}
        <HeroSection
          onExploreRakhis={() => scrollToSection('raksha-bandhan-section')}
          onExploreCatalogue={() => scrollToSection('catalogue-section')}
        />

        {/* Dedicated Raksha Bandhan Silver Rakhi Showcase */}
        <RakshaBandhanSection
          products={PRODUCTS}
          onSelectProduct={(prod) => setSelectedProduct(prod)}
          onExploreMore={() => scrollToSection('catalogue-section')}
          onShowroomClick={() => scrollToSection('contact-section')}
        />

        {/* Festival High-Converting Banner */}
        <FestivalBanner
          onViewRakhis={() => scrollToSection('raksha-bandhan-section')}
          onExploreCatalogue={() => scrollToSection('catalogue-section')}
        />

        {/* Full Jewellery Catalogue with Category Filtering & Search */}
        <JewelleryCatalogue
          products={PRODUCTS}
          onSelectProduct={(prod) => setSelectedProduct(prod)}
        />

        {/* Handpicked Spotlight Featured Collection */}
        <FeaturedCollection
          products={PRODUCTS}
          onSelectProduct={(prod) => setSelectedProduct(prod)}
        />

        {/* Trust & Craftsmanship Section */}
        <TrustSection onNavigate={scrollToSection} />

        {/* Physical Showroom Location & Directions */}
        <ShowroomContact />
      </main>

      {/* Showroom Footer */}
      <Footer onNavigate={scrollToSection} />

      {/* Full-Detail Interactive Product Modal */}
      <ProductDetailModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
        onDirectionsClick={() => scrollToSection('contact-section')}
      />
    </div>
  );
}
