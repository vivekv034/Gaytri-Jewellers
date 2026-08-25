import React from 'react';
import { STORE_INFO } from '../data/storeInfo';
import { MapPin, Navigation, Clock, Building2, Sparkles, CheckCircle2, ShieldCheck } from 'lucide-react';

export const ShowroomContact: React.FC = () => {
  return (
    <section id="contact-section" className="py-16 sm:py-24 bg-[#1a0202] text-[#f5f2ed] border-t border-[#d4af37]/20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-[11px] uppercase tracking-[0.3em] text-[#d4af37] font-semibold mb-2 block">
            Showroom &amp; Location
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-[#f5f2ed] mb-4 leading-tight">
            Visit <span className="italic text-[#d4af37]">Gaytri Jewellers</span>
          </h2>
          <div className="w-24 h-[1px] bg-[#d4af37]/40 mx-auto mb-4" />
          <p className="text-sm sm:text-base text-[#f5f2ed]/70 font-light">
            We warmly welcome you to our physical showroom at Station Road, Rasra, Ballia.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left Column: Address & Visiting Information (7 cols) */}
          <div className="lg:col-span-7 flex flex-col justify-between p-6 sm:p-8 bg-[#2a0303] border border-[#d4af37]/20 shadow-xl">
            <div>
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 bg-[#3a0404] border border-[#d4af37]/30 flex items-center justify-center shrink-0 text-[#d4af37]">
                  <Building2 className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-2xl font-serif font-bold text-[#f5f2ed]">
                    {STORE_INFO.name}
                  </h3>
                  <p className="text-xs text-[#d4af37] font-medium tracking-wide uppercase">
                    Station Road Showroom · Rasra, Ballia
                  </p>
                </div>
              </div>

              <div className="space-y-4 text-sm text-[#f5f2ed]/80 border-y border-[#d4af37]/15 py-5 my-5">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-[#d4af37] shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-[#f5f2ed]">Showroom Address:</strong>
                    <span>{STORE_INFO.address}</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-[#d4af37] shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-[#f5f2ed]">Showroom Timings:</strong>
                    <span>Open 7 Days a Week: 10:00 AM – 8:30 PM</span>
                  </div>
                </div>
              </div>

              {/* Showroom Features */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                <div className="flex items-center gap-2 p-3 bg-[#1a0202] border border-[#d4af37]/15 text-xs text-[#f5f2ed]/80">
                  <CheckCircle2 className="w-4 h-4 text-[#d4af37] shrink-0" />
                  <span>Physical Jewellery &amp; Rakhi Trials</span>
                </div>
                <div className="flex items-center gap-2 p-3 bg-[#1a0202] border border-[#d4af37]/15 text-xs text-[#f5f2ed]/80">
                  <ShieldCheck className="w-4 h-4 text-[#d4af37] shrink-0" />
                  <span>On-Spot Hallmark Purity Testing</span>
                </div>
              </div>
            </div>

            {/* Direct Google Maps Directions CTA */}
            <div>
              <a
                id="contact-directions-btn"
                href={STORE_INFO.mapDirectionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2.5 py-4 px-6 bg-[#d4af37] text-[#2a0303] text-xs sm:text-sm font-bold uppercase tracking-widest shadow-md hover:brightness-110 transition-all cursor-pointer"
              >
                <Navigation className="w-4 h-4 text-[#2a0303]" />
                <span>Get Directions via Google Maps</span>
              </a>
            </div>
          </div>

          {/* Right Column: Visual Location Frame & Landmark Guide (5 cols) */}
          <div className="lg:col-span-5 p-6 sm:p-8 bg-[#2a0303] border border-[#d4af37]/30 shadow-2xl flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#d4af37]">
                  <Sparkles className="w-4 h-4" />
                  <span>Landmark &amp; Visiting Guide</span>
                </div>
              </div>

              <div className="h-48 sm:h-56 w-full bg-[#1a0202] border border-[#d4af37]/20 flex flex-col items-center justify-center p-6 text-center relative overflow-hidden mb-6">
                <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#d4af37_1.5px,transparent_1.5px)] [background-size:16px_16px]" />
                <div className="relative z-10">
                  <div className="w-12 h-12 bg-[#3a0404] border border-[#d4af37] flex items-center justify-center mx-auto mb-3 shadow-[0_0_20px_rgba(212,175,55,0.3)]">
                    <MapPin className="w-6 h-6 text-[#d4af37]" />
                  </div>
                  <h4 className="font-serif font-bold text-base text-[#f5f2ed] mb-1">
                    Station Road, Rasra
                  </h4>
                  <p className="text-xs text-[#f5f2ed]/70 max-w-xs">
                    Located centrally on Station Road with convenient approach and parking.
                  </p>
                </div>
              </div>

              <div className="space-y-2.5 text-xs text-[#f5f2ed]/70 bg-[#1a0202] p-4 border border-[#d4af37]/15">
                <p className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#d4af37]" />
                  <span>Easy landmark access from Rasra Railway Station road.</span>
                </p>
                <p className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#d4af37]" />
                  <span>Dedicated showcase for Silver Rakhis during Raksha Bandhan season.</span>
                </p>
                <p className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#d4af37]" />
                  <span>Custom gift boxing &amp; silver weight certifications available on spot.</span>
                </p>
              </div>
            </div>

            <div className="pt-6">
              <a
                href={STORE_INFO.mapDirectionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 py-3 px-4 border border-[#d4af37]/60 text-[#d4af37] text-xs font-bold uppercase tracking-wider hover:bg-[#d4af37] hover:text-[#2a0303] transition-colors"
              >
                <span>Open in Google Maps Application</span>
                <Navigation className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
