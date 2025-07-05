export interface Product {
  id: string;
  name: string;
  nameEn: string;
  description: string;
  descriptionEn: string;
  price: number;
  images: string[];
  category: string;
  categoryEn: string;
  ageRange: string;
  materials: string[];
  dimensions: {
    length: number;
    width: number;
    height: number;
  };
  weight: number;
  inStock: boolean;
  featured: boolean;
  slug: string;
}

export interface Translation {
  home: {
    hero: {
      title: string;
      subtitle: string;
      cta: string;
    };
    features: {
      title: string;
      items: {
        title: string;
        description: string;
      }[];
    };
    products: {
      title: string;
      subtitle: string;
      viewAll: string;
    };
    testimonials: {
      title: string;
    };
    newsletter: {
      title: string;
      subtitle: string;
      placeholder: string;
      button: string;
    };
  };
  products: {
    title: string;
    filters: {
      all: string;
      category: string;
      priceRange: string;
      ageRange: string;
    };
    quickView: string;
    addToCart: string;
    contactWhatsapp: string;
  };
  about: {
    title: string;
    story: {
      title: string;
      content: string;
    };
    mission: {
      title: string;
      content: string;
    };
    values: {
      title: string;
      items: {
        title: string;
        description: string;
      }[];
    };
  };
  contact: {
    title: string;
    form: {
      name: string;
      email: string;
      message: string;
      submit: string;
    };
    info: {
      address: string;
      phone: string;
      email: string;
    };
  };
  navigation: {
    home: string;
    products: string;
    about: string;
    contact: string;
  };
  common: {
    learnMore: string;
    viewDetails: string;
    backToHome: string;
    loading: string;
    error: string;
  };
}
