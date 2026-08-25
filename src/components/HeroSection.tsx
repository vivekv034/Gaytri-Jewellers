import React from 'react';
import { STORE_INFO } from '../data/storeInfo';
import { Hero3D } from './Hero3D';
import { MapPin, ArrowRight } from 'lucide-react';

interface HeroSectionProps {
  onExploreRakhis: () => void;
  onExploreCatalogue: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onExploreRakhis,
  onExploreCatalogue,
}) => {
  return (
    <section
      id="hero-section"
      className="relative min-h-[92vh] sm:min-h-screen pt-28 pb-16 flex items-center justify-center bg-[#2a0303] text-[#f5f2ed] overflow-hidden"
    >
      {/* Background ambient lighting effects matching Elegant Dark */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-[#d4af37]/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute -top-32 right-1/4 w-[600px] h-[600px] bg-[#1a0202] rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(#d4af37_0.6px,transparent_0.6px)] [background-size:32px_32px] opacity-10 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          {/* Left Hero Text Content */}
          <div className="lg:col-span-6 xl:col-span-7 space-y-6 text-center lg:text-left z-10">
            {/* Showroom location tag & festival badge */}
            <div className="inline-flex flex-wrap items-center justify-center lg:justify-start gap-2.5">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#d4af37]/10 border border-[#d4af37]/30 rounded-full shadow-sm">
                <span className="w-2 h-2 rounded-full bg-[#d4af37]"></span>
                <span className="text-[10px] uppercase tracking-widest text-[#d4af37] font-semibold">Raksha Bandhan Collection</span>
              </div>

              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#1a0202] border border-[#d4af37]/20 text-[#f5f2ed]/70 text-[10px] uppercase tracking-widest">
                <MapPin className="w-3 h-3 text-[#d4af37]" />
                <span>Station Road, Rasra, Ballia</span>
              </span>
            </div>

            {/* Sub-brand / Store name */}
            <div className="space-y-2">
              <span className="text-[11px] uppercase tracking-[0.3em] text-[#d4af37] font-semibold block">
                {STORE_INFO.name} · SINCE TRADITION
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif leading-[1.1] text-[#f5f2ed] font-normal">
                Celebrate the <span className="italic text-[#d4af37]">Bond of Love</span> with Silver Rakhi
              </h1>
            </div>

            {/* Supporting Text */}
            <p className="text-base sm:text-lg text-[#f5f2ed]/70 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-light">
              Beautiful Silver Rakhis for a timeless Raksha Bandhan celebration. Discover elegant
              handcrafted designs at Gaytri Jewellers, Rasra.
            </p>

            {/* CTAs matching Elegant Dark */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <button
                id="hero-explore-rakhi-btn"
                onClick={onExploreRakhis}
                className="w-full sm:w-auto bg-[#d4af37] text-[#2a0303] px-8 py-4 text-xs sm:text-sm font-bold uppercase tracking-widest hover:brightness-110 transition-all flex items-center justify-center gap-2 shadow-[0_0_25px_rgba(212,175,55,0.3)] cursor-pointer"
              >
                <span>Explore Silver Rakhis</span>
                <ArrowRight className="w-4 h-4 text-[#2a0303]" />
              </button>

              <button
                id="hero-catalogue-btn"
                onClick={onExploreCatalogue}
                className="w-full sm:w-auto border border-[#f5f2ed]/30 px-8 py-4 text-xs sm:text-sm font-bold uppercase tracking-widest flex items-center justify-center gap-2 hover:bg-[#f5f2ed]/10 text-[#f5f2ed] transition-all cursor-pointer"
              >
                <span>View All Jewellery</span>
              </button>
            </div>

            {/* Micro Highlights & Trust badges */}
            <div className="pt-6 grid grid-cols-3 gap-3 max-w-lg mx-auto lg:mx-0 text-left border-t border-[#d4af37]/20">
              <div className="p-3 bg-[#1a0202] border border-[#d4af37]/15">
                <span className="text-[11px] font-bold text-[#d4af37] block uppercase tracking-wider">
                  Pure 92.5
                </span>
                <span className="text-[10px] text-[#f5f2ed]/60 uppercase tracking-widest">Sterling Silver</span>
              </div>
              <div className="p-3 bg-[#1a0202] border border-[#d4af37]/15">
                <span className="text-[11px] font-bold text-[#d4af37] block uppercase tracking-wider">
                  Showroom
                </span>
                <span className="text-[10px] text-[#f5f2ed]/60 uppercase tracking-widest">Rasra, Ballia</span>
              </div>
              <div className="p-3 bg-[#1a0202] border border-[#d4af37]/15">
                <span className="text-[11px] font-bold text-[#d4af37] block uppercase tracking-wider">
                  Hallmark
                </span>
                <span className="text-[10px] text-[#f5f2ed]/60 uppercase tracking-widest">Certified Quality</span>
              </div>
            </div>
          </div>

          {/* Right Hero: Three.js Interactive 3D Jewellery Animation */}
          <div className="lg:col-span-6 xl:col-span-5 relative flex items-center justify-center">
            {/* Soft decorative golden aura backdrop */}
            <div className="absolute w-[400px] h-[400px] bg-[#d4af37]/5 rounded-full border border-[#d4af37]/10 animate-pulse pointer-events-none" />

            <div className="relative w-full bg-[#1a0202]/80 border border-[#d4af37]/30 p-2 shadow-[0_0_50px_rgba(212,175,55,0.2)] backdrop-blur-sm">
              <Hero3D onExploreClick={onExploreRakhis} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
