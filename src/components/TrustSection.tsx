import React from 'react';
import { STORE_INFO } from '../data/storeInfo';
import { Shield, Sparkles, UserCheck, Award, MapPin, ArrowUpRight, Gift } from 'lucide-react';

interface TrustSectionProps {
  onNavigate?: (sectionId: string) => void;
}

export const TrustSection: React.FC<TrustSectionProps> = ({ onNavigate }) => {
  const trustCards = [
    {
      icon: Shield,
      title: 'Trusted Showroom',
      description: 'A dedicated jewellery destination serving families in Rasra and Ballia with authentic advice, fair pricing, and personal care.',
      accent: 'text-[#d4af37]'
    },
    {
      icon: Sparkles,
      title: 'Handcrafted Artistry',
      description: 'Traditional filigree and modern minimalist silver styling tailored for festive Raksha Bandhan moments and timeless daily grace.',
      accent: 'text-[#d4af37]'
    },
    {
      icon: Award,
      title: '92.5 Hallmark Guarantee',
      description: 'Certified sterling silver purity ensuring enduring shine, durability, and skin-friendly hypoallergenic comfort.',
      accent: 'text-[#d4af37]'
    },
    {
      icon: Gift,
      title: 'Velvet Presentation Box',
      description: 'Each silver Rakhi is elegantly paired with celebratory roli, chawal, and protective packaging suitable for gifting.',
      accent: 'text-[#d4af37]'
    },
    {
      icon: UserCheck,
      title: 'Personalized Attention',
      description: 'Our in-showroom specialists help you select the ideal silver weight, design size, and customized festive combinations.',
      accent: 'text-[#d4af37]'
    }
  ];

  return (
    <section id="why-us-section" className="py-16 sm:py-24 bg-[#2a0303] text-[#f5f2ed] border-t border-[#d4af37]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-[11px] uppercase tracking-[0.3em] text-[#d4af37] font-semibold mb-2 block">
            Our Commitment
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-[#f5f2ed] mb-4 leading-tight">
            Why <span className="italic text-[#d4af37]">Gaytri Jewellers</span>?
          </h2>
          <div className="w-24 h-[1px] bg-[#d4af37]/40 mx-auto mb-4" />
          <p className="text-sm sm:text-base text-[#f5f2ed]/70 font-light">
            Dedicated to bringing timeless craftsmanship, authentic materials, and direct personal service to our patrons.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {trustCards.map((card, idx) => {
            const Icon = card.icon;
            return (
              <div
                key={idx}
                className="group p-6 bg-[#1a0202] border border-[#d4af37]/15 hover:border-[#d4af37]/50 transition-all duration-300 shadow-lg flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 bg-[#3a0404] border border-[#d4af37]/30 flex items-center justify-center mb-5 group-hover:scale-105 transition-transform duration-300">
                    <Icon className={`w-6 h-6 ${card.accent}`} />
                  </div>
                  <h3 className="text-xl font-serif font-bold text-[#f5f2ed] mb-2.5">
                    {card.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#f5f2ed]/60 leading-relaxed">
                    {card.description}
                  </p>
                </div>

                <div className="mt-5 pt-3 border-t border-[#d4af37]/15 flex items-center justify-between text-xs text-[#d4af37] font-medium">
                  <span className="uppercase tracking-wider text-[10px]">Gaytri Jewellers</span>
                  <ArrowUpRight className="w-4 h-4 opacity-70 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                </div>
              </div>
            );
          })}

          {/* Showroom Visit Card */}
          <div className="p-6 bg-[#1a0202] border border-[#d4af37]/30 flex flex-col justify-between shadow-xl">
            <div>
              <div className="w-12 h-12 bg-[#3a0404] border border-[#d4af37]/40 flex items-center justify-center mb-5">
                <MapPin className="w-6 h-6 text-[#d4af37]" />
              </div>
              <h3 className="text-xl font-serif font-bold text-[#f5f2ed] mb-2">
                Visit Rasra Showroom
              </h3>
              <p className="text-xs sm:text-sm text-[#f5f2ed]/60 leading-relaxed mb-4">
                {STORE_INFO.address}. Open daily from 10:00 AM to 8:30 PM. Browse our full jewellery collection and festive silver Rakhis in person.
              </p>
            </div>

            <a
              href={STORE_INFO.mapDirectionsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 py-3.5 bg-[#d4af37] text-[#2a0303] text-xs font-bold uppercase tracking-wider shadow-md hover:brightness-110 transition-all cursor-pointer"
            >
              <MapPin className="w-4 h-4 text-[#2a0303]" />
              <span>Get Directions to Showroom</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
