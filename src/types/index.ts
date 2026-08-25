export type CategoryType =
  | 'all'
  | 'silver-rakhi'
  | 'silver-jewellery'
  | 'gold-jewellery'
  | 'rings'
  | 'earrings'
  | 'necklaces'
  | 'bangles'
  | 'chains'
  | 'bracelets'
  | 'festival-gifts';

export interface Product {
  id: string;
  name: string;
  category: CategoryType;
  categoryLabel: string;
  description: string;
  details?: string[];
  image: string;
  isRakhi?: boolean;
  featured?: boolean;
  tag?: string;
  metalType: 'Pure 92.5 Silver' | 'Fine Silver' | 'Gold Finish' | 'Fine Gold Craft' | 'Rudraksha & Silver';
}

export interface StoreContact {
  name: string;
  tagline: string;
  address: string;
  street: string;
  locality: string;
  city: string;
  state: string;
  pincode: string;
  country: string;
  phoneDisplay: string;
  phoneRaw: string;
  whatsappNumber: string;
  mapDirectionsUrl: string;
  landmark: string;
}

export interface CategoryInfo {
  id: CategoryType;
  label: string;
  tagline: string;
  image: string;
}
