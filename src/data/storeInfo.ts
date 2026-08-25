import { StoreContact } from '../types';

export const STORE_INFO: StoreContact = {
  name: 'Gaytri Jewellers',
  tagline: 'Timeless Elegance & Traditional Craftsmanship',
  address: 'Station Road, Rasra, Ballia, Uttar Pradesh – 221712, India',
  street: 'Station Road',
  locality: 'Rasra',
  city: 'Ballia',
  state: 'Uttar Pradesh',
  pincode: '221712',
  country: 'India',
  phoneDisplay: '+91 9565660101',
  phoneRaw: '+919565660101',
  whatsappNumber: '919565660101',
  landmark: 'Near Station Road Central Market',
  mapDirectionsUrl: 'https://www.google.com/maps/search/?api=1&query=Gaytri+Jewellers+Station+Road+Rasra+Ballia+Uttar+Pradesh+221712'
};

export function getWhatsAppUrl(message: string): string {
  const encoded = encodeURIComponent(message);
  return `https://wa.me/${STORE_INFO.whatsappNumber}?text=${encoded}`;
}

export function getGeneralWhatsAppUrl(): string {
  return getWhatsAppUrl('Namaste Gaytri Jewellers, I would like to know more about your jewellery collection.');
}

export function getRakhiWhatsAppUrl(): string {
  return getWhatsAppUrl('Namaste Gaytri Jewellers, I am interested in your Silver Rakhi collection. Please share designs, price and availability.');
}

export function getProductWhatsAppUrl(productName: string): string {
  return getWhatsAppUrl(`Namaste Gaytri Jewellers, I am interested in ${productName}. Please share price and availability.`);
}
