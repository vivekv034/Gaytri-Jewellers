import React, { useEffect } from 'react';
import { Product } from '../types';
import { STORE_INFO, getProductWhatsAppUrl } from '../data/storeInfo';
import { X, MapPin, ShieldCheck, Sparkles, Check, Clock, Phone, MessageCircle } from 'lucide-react';

interface ProductDetailModalProps {
  product: Product | null;
  onClose: () => void;
  onDirectionsClick?: () => void;
}

export const ProductDetailModal: React.FC<ProductDetailModalProps> = ({
  product,
  onClose,
  onDirectionsClick
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (product) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [product, onClose]);

  if (!product) return null;

  return (
    <div
      id="product-detail-modal-backdrop"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md animate-fadeIn"
      onClick={onClose}
    >
      <div
        id={`product-modal-${product.id}`}
        className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-[#2a0303] border border-[#d4af37]/40 shadow-[0_20px_60px_rgba(0,0,0,0.9)] text-[#f5f2ed]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          id="btn-close-modal"
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2 bg-[#1a0202] hover:bg-[#3a0404] text-[#f5f2ed] transition-colors border border-[#d4af37]/30 cursor-pointer"
          aria-label="Close detail modal"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6 sm:p-8">
          {/* Image & Badges */}
          <div className="flex flex-col">
            <div className="relative w-full aspect-square overflow-hidden bg-[#3a0404] border border-[#d4af37]/20">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover filter contrast-105 hover:scale-105 transition-transform duration-700"
                loading="lazy"
              />
              {product.tag && (
                <div className="absolute top-3 left-3 bg-[#d4af37] text-[#2a0303] text-[9px] font-bold px-2.5 py-0.5 uppercase tracking-widest shadow-md">
                  {product.tag}
                </div>
              )}
              <div className="absolute bottom-3 left-3 bg-[#1a0202]/90 text-xs text-[#d4af37] px-2.5 py-1 border border-[#d4af37]/30 flex items-center gap-1.5 font-semibold">
                <Sparkles className="w-3.5 h-3.5 text-[#d4af37]" />
                <span>{product.metalType}</span>
              </div>
            </div>

            {/* Trust highlights under image */}
            <div className="mt-4 grid grid-cols-2 gap-2 text-xs text-[#f5f2ed]/70">
              <div className="flex items-center gap-2 p-2.5 bg-[#1a0202] border border-[#d4af37]/15">
                <ShieldCheck className="w-4 h-4 text-[#d4af37] shrink-0" />
                <span>Showroom Guarantee</span>
              </div>
              <div className="flex items-center gap-2 p-2.5 bg-[#1a0202] border border-[#d4af37]/15">
                <MapPin className="w-4 h-4 text-[#d4af37] shrink-0" />
                <span>Rasra Showroom</span>
              </div>
            </div>
          </div>

          {/* Details & Showroom Location */}
          <div className="flex flex-col justify-between">
            <div>
              <div className="text-[10px] uppercase tracking-[0.2em] text-[#d4af37] font-semibold mb-1">
                {product.categoryLabel}
              </div>
              <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#f5f2ed] mb-3 leading-tight">
                {product.name}
              </h2>

              <p className="text-sm text-[#f5f2ed]/70 leading-relaxed mb-4 font-light">
                {product.description}
              </p>

              {/* Craftsmanship Bullet Points */}
              {product.details && product.details.length > 0 && (
                <div className="mb-5 space-y-2 bg-[#1a0202] p-3.5 border border-[#d4af37]/20">
                  <h3 className="text-[10px] font-bold text-[#d4af37] uppercase tracking-widest mb-2">
                    Highlights &amp; Craftsmanship
                  </h3>
                  <ul className="space-y-1.5 text-xs text-[#f5f2ed]/80">
                    {product.details.map((detail, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <Check className="w-3.5 h-3.5 text-[#d4af37] mt-0.5 shrink-0" />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Showroom Availability Info */}
              <div className="p-3 bg-[#1a0202] border border-[#d4af37]/30 mb-6">
                <p className="text-xs text-[#d4af37] font-medium flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-[#d4af37]" />
                  <span>Available in Showroom · Open 10:00 AM – 8:30 PM</span>
                </p>
                <p className="text-[11px] text-[#f5f2ed]/50 mt-1">
                  Station Road, Rasra, Ballia. Custom weights, matching sets, and festive box presentation available on-site.
                </p>
              </div>
            </div>

            {/* Navigation & Action */}
            <div className="space-y-2.5 pt-2 border-t border-[#d4af37]/15">
              <a
                id={`modal-whatsapp-btn-${product.id}`}
                href={getProductWhatsAppUrl(product.name)}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2.5 px-5 py-3.5 bg-[#25D366] text-white font-bold text-xs uppercase tracking-widest shadow-lg hover:brightness-110 transition-all cursor-pointer"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Enquire via WhatsApp</span>
              </a>

              <div className="grid grid-cols-2 gap-2.5">
                <a
                  id={`modal-call-btn-${product.id}`}
                  href={`tel:${STORE_INFO.phoneRaw}`}
                  className="flex items-center justify-center gap-2 py-3 px-3 bg-[#1a0202] border border-[#d4af37]/50 text-[#d4af37] text-xs font-bold uppercase tracking-wider hover:bg-[#d4af37] hover:text-[#2a0303] transition-all cursor-pointer text-center"
                >
                  <Phone className="w-3.5 h-3.5 shrink-0" />
                  <span>Call {STORE_INFO.phoneDisplay}</span>
                </a>

                <a
                  id={`modal-directions-btn-${product.id}`}
                  href={STORE_INFO.mapDirectionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 py-3 px-3 bg-[#d4af37] text-[#2a0303] font-bold text-xs uppercase tracking-wider shadow hover:brightness-110 transition-all cursor-pointer text-center"
                >
                  <MapPin className="w-3.5 h-3.5 shrink-0 text-[#2a0303]" />
                  <span>Showroom Map</span>
                </a>
              </div>

              <button
                id={`modal-close-btn-${product.id}`}
                onClick={onClose}
                className="w-full py-2 px-4 bg-[#1a0202] hover:bg-[#3a0404] text-[#f5f2ed]/70 hover:text-[#f5f2ed] text-[11px] uppercase tracking-wider border border-[#d4af37]/20 transition-colors cursor-pointer"
              >
                Close &amp; Continue Browsing
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
