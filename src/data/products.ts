import { Product, CategoryInfo } from '../types';

export const CATEGORIES: CategoryInfo[] = [
  {
    id: 'all',
    label: 'All Designs',
    tagline: 'Complete Showroom Collection',
    image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'silver-rakhi',
    label: 'Silver Rakhis',
    tagline: 'Timeless Raksha Bandhan Tokens',
    image: 'https://images.unsplash.com/photo-1611591477435-bc3277341ea2?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'necklaces',
    label: 'Haar & Necklaces',
    tagline: 'Bridal Haar, Rani Haar & Sets',
    image: 'https://images.unsplash.com/photo-1599643477877-530eb83abc8e?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'silver-jewellery',
    label: 'Silver Jewellery',
    tagline: 'Pure 92.5 Sterling Silver Elegance',
    image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'gold-jewellery',
    label: 'Gold Jewellery',
    tagline: 'Exquisite Traditional Craftsmanship',
    image: 'https://images.unsplash.com/photo-1601121141461-9d6647bca1ed?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'rings',
    label: 'Rings',
    tagline: 'Statement & Everyday Bands',
    image: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'earrings',
    label: 'Earrings',
    tagline: 'Jhumkas, Drops & Studs',
    image: 'https://images.unsplash.com/photo-1630019852942-f89202989a59?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'bangles',
    label: 'Bangles & Kadas',
    tagline: 'Heritage Carvings & Daily Wear',
    image: 'https://images.unsplash.com/photo-1611591477435-bc3277341ea2?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'bracelets',
    label: 'Bracelets',
    tagline: 'Delicate Wrist Charms',
    image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'festival-gifts',
    label: 'Festival Gifts',
    tagline: 'Silver Coins, Utensils & Keepsakes',
    image: 'https://images.unsplash.com/photo-1579783902614-a3fb3927b675?auto=format&fit=crop&w=600&q=80'
  }
];

export const PRODUCTS: Product[] = [
  // Specific Silver Rakhi Designs (Every item clearly mentions Rakhi in name)
  {
    id: 'rakhi-classic',
    name: 'Classic Silver Rakhi',
    category: 'silver-rakhi',
    categoryLabel: 'Silver Rakhi',
    description: 'Elegant silver Rakhi crafted for a timeless Raksha Bandhan gift, featuring intricate floral filigree and soft auspicious thread.',
    details: [
      'Pure Silver centrepiece with hallmark finish',
      'Skin-friendly handwoven royal red and gold silken cord',
      'Dual utility: Can be worn as a pendant or bracelet later',
      'Comes in a protective velvet gift box'
    ],
    image: 'https://images.unsplash.com/photo-1611591477435-bc3277341ea2?auto=format&fit=crop&w=800&q=80',
    isRakhi: true,
    featured: true,
    tag: 'Bestseller',
    metalType: 'Pure 92.5 Silver'
  },
  {
    id: 'rakhi-om',
    name: 'Om Silver Rakhi',
    category: 'silver-rakhi',
    categoryLabel: 'Silver Rakhi',
    description: 'A sacred Om motif handcrafted in fine silver, bringing divine blessings, spiritual peace, and prosperity to your brother.',
    details: [
      'Sacred Om emblem embossed in fine silver',
      'Embellished with auspicious rudraksha beads and silver beads',
      'Durable premium thread with adjustable clasp knot',
      'Special complimentary Roli & Chawal pack included'
    ],
    image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=800&q=80',
    isRakhi: true,
    featured: true,
    tag: 'Devotional',
    metalType: 'Pure 92.5 Silver'
  },
  {
    id: 'rakhi-rudraksha',
    name: 'Rudraksha & Silver Rakhi',
    category: 'silver-rakhi',
    categoryLabel: 'Silver Rakhi',
    description: 'Authentic 5-Mukhi Rudraksha beads encased in delicate sterling silver caps with a central silver Trishul & Damroo medallion.',
    details: [
      'Genuine sacred Rudraksha paired with sterling silver',
      'Symbol of protection, positive energy, and longevity',
      'Reinforced sacred red-yellow Mauli yarn',
      'Handcrafted by traditional karigars'
    ],
    image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=800&q=80',
    isRakhi: true,
    featured: true,
    tag: 'Auspicious',
    metalType: 'Rudraksha & Silver'
  },
  {
    id: 'rakhi-floral',
    name: 'Elegant Floral Silver Rakhi',
    category: 'silver-rakhi',
    categoryLabel: 'Silver Rakhi',
    description: 'A graceful blooming lotus pattern crafted with diamond-cut petal finishes and a central micro-shimmer stone.',
    details: [
      'Micro-carved lotus petal silver geometry',
      'High-gloss rhodium finish to prevent tarnishing',
      'Silken champagne tassel cord',
      'Luxury keepsake for elder or younger brother'
    ],
    image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=800&q=80',
    isRakhi: true,
    featured: false,
    tag: 'Artisan',
    metalType: 'Pure 92.5 Silver'
  },
  {
    id: 'rakhi-ganesha',
    name: 'Divine Ganesha Silver Rakhi',
    category: 'silver-rakhi',
    categoryLabel: 'Silver Rakhi',
    description: 'Lord Ganesha carved in pure sterling silver to bestow auspicious beginnings, health, and wisdom upon your beloved brother.',
    details: [
      'Detailed Lord Ganesha silver medallion',
      'Auspicious red-yellow sacred mauli binding',
      'Comes with traditional roli-chawal containers',
      'Hallmark certified 92.5 purity'
    ],
    image: 'https://images.unsplash.com/photo-1601121141461-9d6647bca1ed?auto=format&fit=crop&w=800&q=80',
    isRakhi: true,
    featured: true,
    tag: 'Devotional',
    metalType: 'Pure 92.5 Silver'
  },
  {
    id: 'rakhi-traditional',
    name: 'Traditional Indian Silver Rakhi',
    category: 'silver-rakhi',
    categoryLabel: 'Silver Rakhi',
    description: 'Rooted in heritage Indian royal designs, featuring hand-etched peacock and floral carvings with meenakari accents.',
    details: [
      'Antique silver finish with subtle enamel craftsmanship',
      'Heirloom quality build for lifelong preservation',
      'Braided multicolour silk thread with silver beads',
      'Handmade at our Rasra showroom'
    ],
    image: 'https://images.unsplash.com/photo-1601121141461-9d6647bca1ed?auto=format&fit=crop&w=800&q=80',
    isRakhi: true,
    featured: true,
    tag: 'Heritage',
    metalType: 'Fine Silver'
  },
  {
    id: 'rakhi-swastik',
    name: 'Shubh Swastik Silver Rakhi',
    category: 'silver-rakhi',
    categoryLabel: 'Silver Rakhi',
    description: 'Sacred Swastik emblem in high-polish sterling silver with ruby-hued gemstone accents and braided silk cord.',
    details: [
      'Auspicious Shubh Swastik centerpiece in 92.5 silver',
      'Reinforced silken thread with silver beads',
      'Traditional spiritual design',
      'Velvet pouch packaging'
    ],
    image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=800&q=80',
    isRakhi: true,
    featured: false,
    tag: 'Auspicious',
    metalType: 'Pure 92.5 Silver'
  },
  {
    id: 'rakhi-designer',
    name: 'Designer Silver Rakhi',
    category: 'silver-rakhi',
    categoryLabel: 'Silver Rakhi',
    description: 'Contemporary geometric silver centerpiece designed for the modern brother who loves minimalist luxury.',
    details: [
      'Matte and polished dual-texture silver plate',
      'Sleek modern wrist aesthetic',
      'Convertible to a casual daily wear bracelet',
      'Hypoallergenic and nickel-free'
    ],
    image: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=800&q=80',
    isRakhi: true,
    featured: false,
    tag: 'Modern',
    metalType: 'Pure 92.5 Silver'
  },
  {
    id: 'rakhi-minimal',
    name: 'Minimal Silver Rakhi',
    category: 'silver-rakhi',
    categoryLabel: 'Silver Rakhi',
    description: 'Understated silver infinity bar symbolising an eternal bond of love and care, paired with a sleek crimson cord.',
    details: [
      'Lightweight solid silver infinity symbol',
      'Comfortable for 24/7 continuous wrist wear',
      'Minimalist sleek look for shirts and suits',
      'High polish mirror shine'
    ],
    image: 'https://images.unsplash.com/photo-1630019852942-f89202989a59?auto=format&fit=crop&w=800&q=80',
    isRakhi: true,
    featured: false,
    tag: 'Minimal',
    metalType: 'Pure 92.5 Silver'
  },
  {
    id: 'rakhi-bhaiya-bhabhi',
    name: 'Bhaiya Bhabhi Royal Silver Rakhi & Lumba Set',
    category: 'silver-rakhi',
    categoryLabel: 'Silver Rakhi',
    description: 'A grand matching pair featuring a men\'s sterling silver Rakhi for brother and a graceful silver filigree hanging Lumba for sister-in-law.',
    details: [
      'Matching pure silver Rakhi & hanging Lumba pair',
      'Embellished with fine pearls and latkan bells',
      'Includes complimentary roli, chawal & greeting card',
      'Delivered in twin velvet jewellery box'
    ],
    image: 'https://images.unsplash.com/photo-1611591477435-bc3277341ea2?auto=format&fit=crop&w=800&q=80',
    isRakhi: true,
    featured: true,
    tag: 'Couple Set',
    metalType: 'Pure 92.5 Silver'
  },
  {
    id: 'rakhi-premium-gift',
    name: 'Premium Gift Silver Rakhi Box Set',
    category: 'silver-rakhi',
    categoryLabel: 'Silver Rakhi',
    description: 'An all-inclusive royal gift set featuring a heavy sterling silver Rakhi, silver coin, artisanal roli-chawal containers, and greeting card.',
    details: [
      'Sterling silver Rakhi + Pure silver Lakshmi-Ganesh coin',
      'Plush handcrafted velvet presentation box',
      'Greeting card with personalized message option',
      'The ultimate celebration gift for brother & bhabhi'
    ],
    image: 'https://images.unsplash.com/photo-1599643477877-530eb83abc8e?auto=format&fit=crop&w=800&q=80',
    isRakhi: true,
    featured: true,
    tag: 'Gift Hamper',
    metalType: 'Pure 92.5 Silver'
  },

  // Haar & Necklaces Collection (Every item explicitly mentions Haar in name)
  {
    id: 'haar-bridal-01',
    name: 'Royal Heritage Bridal Gold Haar',
    category: 'necklaces',
    categoryLabel: 'Haar & Necklaces',
    description: 'Majestic royal bridal Haar crafted with intricate temple gold carving and cascading drops, creating breathtaking wedding grandeur.',
    details: ['Traditional 22K gold craft finish', 'Adjustable dori back thread for snug fit', 'Matching jhumki accents included'],
    image: 'https://images.unsplash.com/photo-1599643477877-530eb83abc8e?auto=format&fit=crop&w=800&q=80',
    featured: true,
    tag: 'Bridal Haar',
    metalType: 'Fine Gold Craft'
  },
  {
    id: 'haar-rani-01',
    name: 'Traditional Kundan & Pearl Rani Haar',
    category: 'necklaces',
    categoryLabel: 'Haar & Necklaces',
    description: 'An opulent multi-strand Rani Haar featuring hand-set Jadau Kundan gemstones, cultured pearl drops, and green meenakari backing.',
    details: ['Layered royal Rani Haar silhouette', 'High-grade Kundan gemstone setting', 'Hand-strung micro pearls'],
    image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=800&q=80',
    featured: true,
    tag: 'Rani Haar',
    metalType: 'Fine Gold Craft'
  },
  {
    id: 'haar-choker-01',
    name: 'Antique Temple Style Gold Choker Haar',
    category: 'necklaces',
    categoryLabel: 'Haar & Necklaces',
    description: 'A statement gold-tone choker Haar etched with Goddess Lakshmi and floral motifs, lined with auspicious dangling pearls.',
    details: ['High-relief temple motif carving', 'Flexible neck contouring for comfortable wear', 'Intricate filigree border'],
    image: 'https://images.unsplash.com/photo-1601121141461-9d6647bca1ed?auto=format&fit=crop&w=800&q=80',
    featured: false,
    tag: 'Choker Haar',
    metalType: 'Fine Gold Craft'
  },
  {
    id: 'haar-silver-01',
    name: 'Pure 92.5 Sterling Silver Tribal Choker Haar',
    category: 'necklaces',
    categoryLabel: 'Haar & Necklaces',
    description: 'Handcrafted solid sterling silver choker Haar featuring geometric tribal engravings and oxidised antique patina finish.',
    details: ['Hallmark stamped 92.5 purity', 'Artisanal hand-hammered silver plaques', 'Adjustable braided black cord'],
    image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=800&q=80',
    featured: true,
    tag: 'Silver Haar',
    metalType: 'Pure 92.5 Silver'
  },

  // Handpicked & Other Jewellery Collections
  {
    id: 'silver-bracelet-01',
    name: 'Elegant Silver Bracelet',
    category: 'bracelets',
    categoryLabel: 'Bracelets',
    description: 'Artfully intertwined sterling silver links with a gleaming secure lock, creating an aura of timeless sophistication.',
    details: ['Pure 92.5 Sterling Silver', 'Smooth skin contact design', 'Adjustable extension links'],
    image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=800&q=80',
    featured: true,
    tag: 'Featured',
    metalType: 'Pure 92.5 Silver'
  },
  {
    id: 'silver-ring-01',
    name: 'Traditional Silver Ring',
    category: 'rings',
    categoryLabel: 'Rings',
    description: 'Hand-carved vintage filigree silver ring crowned with an authentic polished stone centerpiece.',
    details: ['Hallmark stamped silver', 'Artisan hand-engraved border', 'Comfort-fit inner band'],
    image: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=800&q=80',
    featured: true,
    tag: 'Handcrafted',
    metalType: 'Fine Silver'
  },
  {
    id: 'earrings-01',
    name: 'Designer Jhumka Earrings',
    category: 'earrings',
    categoryLabel: 'Earrings',
    description: 'Cascading floral drop jhumkas featuring delicate silver chime beads and royal festive presence.',
    details: ['Intricate dome carving', 'Lightweight for festive evenings', 'Secure stud push backs'],
    image: 'https://images.unsplash.com/photo-1630019852942-f89202989a59?auto=format&fit=crop&w=800&q=80',
    featured: true,
    tag: 'Festive',
    metalType: 'Fine Silver'
  },
  {
    id: 'bangles-01',
    name: 'Royal Carved Silver Kada',
    category: 'bangles',
    categoryLabel: 'Bangles & Kadas',
    description: 'Solid silver hand-carved kada featuring traditional lion-head or floral finials with high-relief artistry.',
    details: ['Solid 92.5 Sterling Silver', 'Screw hinge clasp for easy wearing', 'Antique dark patina accent'],
    image: 'https://images.unsplash.com/photo-1611591477435-bc3277341ea2?auto=format&fit=crop&w=800&q=80',
    featured: false,
    tag: 'Heritage',
    metalType: 'Pure 92.5 Silver'
  },
  {
    id: 'gifts-01',
    name: 'Festive Silver Laxmi-Ganesh Coin & Diya Set',
    category: 'festival-gifts',
    categoryLabel: 'Festival Gifts',
    description: 'Pure silver embossed coin accompanied by an ornate silver puja diya, ideal for Raksha Bandhan, Diwali, and Dhanteras gifting.',
    details: ['999 Purity silver coin', 'Tamper-proof gift blister pack', 'Accompanied by showroom certificate of weight'],
    image: 'https://images.unsplash.com/photo-1579783902614-a3fb3927b675?auto=format&fit=crop&w=800&q=80',
    featured: false,
    tag: 'Pooja & Gifting',
    metalType: 'Fine Silver'
  },
  {
    id: 'gold-chain-01',
    name: 'Classic Gold Finish Rope Chain',
    category: 'chains',
    categoryLabel: 'Chains',
    description: 'Precision diamond-cut links crafted with luminous brilliance for comfortable daily wear.',
    details: ['High tensile strength links', 'Durable lobster clasp', 'Flawless polished finish'],
    image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=800&q=80',
    featured: false,
    tag: 'Classic',
    metalType: 'Gold Finish'
  }
];

