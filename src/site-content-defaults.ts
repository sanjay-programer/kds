export interface FeatureItem {
  id: string;
  iconName: 'Leaf' | 'Award' | 'Truck' | 'ShieldCheck' | 'Heart' | 'Clock' | 'Check';
  title: string;
  subtitle: string;
}

export interface LocationBanner {
  id: string;
  tag: string;
  locationKey: string;
  title: string;
  subtitle: string;
  image: string;
  linkText: string;
}

export interface HeroContent {
  badge: string;
  titleLine1: string;
  titleLine2: string;
  titleHighlight: string;
  subtitle: string;
  buttonText: string;
  image: string;
}

export interface HeroSlide {
  id: string;
  badge: string;
  titleLine1: string;
  titleLine2: string;
  titleHighlight: string;
  subtitle: string;
  buttonText: string;
  buttonLink?: string;
  image: string;
}

export interface ContactInfo {
  phone: string;
  extraPhone?: string;
  email: string;
  shopName: string;
  address: string;
  landmark?: string;
  googleMapsUrl: string;
  latitude?: string;
  longitude?: string;
  hours: string;
  fssaiNumber?: string;
  fssaiText?: string;
  showFssai?: boolean;
}

export interface SocialLinks {
  facebook: string;
  instagram: string;
  twitter: string;
  whatsapp: string;
}

export interface DeliverySettings {
  enabled: boolean;
  pricingModel: 'km' | 'flat';
  flatRate: number;
  baseKm: number;
  basePrice: number;
  pricePerKm: number;
  freeDeliveryThreshold: number;
  maxKm?: number;
  flatOutsideRate: number;
}

export const DEFAULT_DELIVERY_SETTINGS: DeliverySettings = {
  enabled: true,
  pricingModel: 'km',
  flatRate: 80,
  baseKm: 5,
  basePrice: 50,
  pricePerKm: 10,
  freeDeliveryThreshold: 2000,
  maxKm: 50,
  flatOutsideRate: 100,
};

export interface SiteContent {
  announcement: string;
  hero: HeroContent;
  heroSlides?: HeroSlide[];
  features: FeatureItem[];
  locationBanners: LocationBanner[];
  contact: ContactInfo;
  delivery?: DeliverySettings;
  social: SocialLinks;
  footerBio: string;
}

export const DEFAULT_SITE_CONTENT: SiteContent = {
  announcement: 'Free pan-India shipping over ₹1,200 • Freshly hand-sorted & packed within 48h • Authentic Kashmiri Mamra, California Almonds, Medjool Dates & Goan Cashews',
  hero: {
    badge: "India's Premier Artisanal Dry Fruits & Nuts House",
    titleLine1: 'Pure Dry Fruits,',
    titleLine2: 'curated to',
    titleHighlight: 'perfection.',
    subtitle: 'From the alpine valleys of Kashmir and California groves to sun-drenched coastal orchards — hand-sorted, freshly packed, and delivered right to your door.',
    buttonText: 'Explore Collection',
    image: 'https://images.pexels.com/photos/11135641/pexels-photo-11135641.jpeg?auto=compress&cs=tinysrgb&h=800&w=1200',
  },
  heroSlides: [
    {
      id: 'slide-all-dry-fruits',
      badge: "India's Premier Artisanal Dry Fruits & Nuts House",
      titleLine1: 'Pure Heritage',
      titleLine2: 'dry fruits, from orchard',
      titleHighlight: 'to doorstep.',
      subtitle: 'Hand-selected Kashmiri Mamra Badam, California Almonds, Snow White Walnuts, Royal Medjool Dates & Goan Cashews — zero artificial polish, 100% natural vitality.',
      buttonText: 'Explore All Dry Fruits',
      image: 'https://images.pexels.com/photos/11135641/pexels-photo-11135641.jpeg?auto=compress&cs=tinysrgb&h=800&w=1200',
    },
    {
      id: 'slide-mamra-almonds',
      badge: 'Superfood Powerhouse • 100% Natural Oil',
      titleLine1: 'Authentic Kashmiri',
      titleLine2: 'Mamra Badam & Snow',
      titleHighlight: 'White Akhrot.',
      subtitle: 'Cultivated in high-altitude Himalayan orchards with more than 45% natural oil. Unrivaled brain clarity, heart resilience, and daily vitality.',
      buttonText: 'Shop Mountain Harvests',
      image: 'https://images.pexels.com/photos/12326584/pexels-photo-12326584.jpeg?auto=compress&cs=tinysrgb&h=800&w=1200',
    },
    {
      id: 'slide-cashews-coastal',
      badge: 'Direct Coastal Sourcing • W180 to W320',
      titleLine1: 'Coastal Cashews,',
      titleLine2: 'sun-dried to golden',
      titleHighlight: 'perfection.',
      subtitle: 'From the sunny coast of Goa to your home — discover W180 King Cashews, creamy raw kernels, and slow-roasted savory flavors.',
      buttonText: 'Shop Artisanal Cashews',
      image: 'https://images.pexels.com/photos/36631827/pexels-photo-36631827.jpeg?auto=compress&cs=tinysrgb&h=800&w=1200',
    },
    {
      id: 'slide-royal-dates-anjeer',
      badge: 'Natural Caramel • Zero Added Sugar',
      titleLine1: 'Royal Saudi Medjool',
      titleLine2: 'Dates & Afghani',
      titleHighlight: 'Wild Anjeer.',
      subtitle: 'Succulent pulpy Medjool dates and string-garland wild mountain figs. Packed with dietary fiber, natural iron, and sustained endurance.',
      buttonText: 'Shop Dates & Figs',
      image: 'https://images.pexels.com/photos/13682249/pexels-photo-13682249.jpeg?auto=compress&cs=tinysrgb&h=800&w=1200',
    },
  ],
  features: [
    { id: '1', iconName: 'Leaf', title: '100% Pure', subtitle: 'No Artificial Polish' },
    { id: '2', iconName: 'Award', title: 'Direct Farm Sourced', subtitle: 'Kashmir, Goa & California' },
    { id: '3', iconName: 'Clock', title: 'Nitrogen Fresh', subtitle: 'Packed within 48 Hours' },
    { id: '4', iconName: 'Truck', title: 'Pan-India Delivery', subtitle: 'Free Shipping over ₹1,200' },
  ],
  locationBanners: [],
  contact: {
    phone: '+91 98765 43210',
    extraPhone: '+91 91234 56789',
    email: 'care@krishadryfruits.in',
    shopName: 'Krisha Dry Fruits Flagship Store & Outlet',
    address: 'Near APMC Market, Yeshwanthpur, Bengaluru, Karnataka 560022, India',
    landmark: 'Near Yeshwanthpur APMC Wholesale Yard',
    googleMapsUrl: 'https://maps.google.com/?q=13.0285,77.5458',
    latitude: '13.0285',
    longitude: '77.5458',
    hours: 'Mon - Sat: 9:00 AM - 9:00 PM',
    fssaiNumber: '',
    fssaiText: '',
    showFssai: false,
  },
  delivery: DEFAULT_DELIVERY_SETTINGS,
  social: {
    facebook: 'https://facebook.com',
    instagram: 'https://instagram.com',
    twitter: 'https://twitter.com',
    whatsapp: 'https://wa.me/919876543210',
  },
  footerBio:
    'Connoisseur cashews directly sourced from certified multi-generation family farms along the Goa and Karnataka coastal belt. Freshly packed within 48 hours of artisanal processing.',
};
