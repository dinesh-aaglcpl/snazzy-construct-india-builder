export interface SectionStyle {
  padding?: string;
  margin?: string;
  backgroundColor?: string;
  textColor?: string;
  alignment?: 'left' | 'center' | 'right';
  borderRadius?: string;
  maxWidth?: string;
  animation?: string;
}

export interface BaseSection {
  id: string;
  type: string;
  name: string;
  visible: boolean;
  style?: SectionStyle;
  editable?: boolean;
}

export interface HeaderSection extends BaseSection {
  type: 'header';
  content: {
    logo: {
      text: string;
      image?: string;
    };
    navigation: {
      label: string;
      href: string;
    }[];
    cta: {
      text: string;
      href: string;
    };
  };
}

export interface HeroSection extends BaseSection {
  type: 'hero';
  content: {
    heading: string;
    subheading: string;
    image: string;
    cta: {
      text: string;
      href: string;
    };
  };
}

export interface AboutSection extends BaseSection {
  type: 'about';
  content: {
    heading: string;
    subheading: string;
    description: string;
    aboutUsCard: {
      title: string;
      content: string;
    };
    statistics: {
      projects: {
        number: string;
        label: string;
      };
      clients: {
        number: string;
        label: string;
      };
      awards: {
        number: string;
        label: string;
      };
    };
  };
}

export interface FeatureItem {
  id: string;
  icon: string;
  title: string;
  description: string;
}

export interface FeaturesSection extends BaseSection {
  type: 'features';
  content: {
    heading: string;
    subheading: string;
    features: FeatureItem[];
  };
}

export interface TestimonialItem {
  id: string;
  quote: string;
  name: string;
  position: string;
  image: string;
}

export interface TestimonialsSection extends BaseSection {
  type: 'testimonials';
  content: {
    heading: string;
    testimonials: TestimonialItem[];
    autoScroll: boolean;
    scrollSpeed: number;
  };
}

export interface WorkItem {
  id: string;
  title: string;
  description: string;
  image: string;
  category: string;
  link?: string;
}

export interface RecentWorksSection extends BaseSection {
  type: 'recent-works';
  content: {
    heading: string;
    subheading: string;
    works: WorkItem[];
    layout: 'grid' | 'carousel';
  };
}

export interface ContactSection extends BaseSection {
  type: 'contact';
  content: {
    heading: string;
    subheading: string;
    form: {
      fields: {
        name: string;
        type: string;
        placeholder: string;
        required: boolean;
      }[];
      submitText: string;
    };
    contactInfo: {
      email: string;
      phone: string;
      address: string;
    };
    mapPlaceholder: string;
  };
}

export interface FooterSection extends BaseSection {
  type: 'footer';
  content: {
    text: string;
    socialLinks: {
      platform: string;
      url: string;
      icon: string;
    }[];
    legalLinks: {
      text: string;
      href: string;
    }[];
  };
}

export type Section = 
  | HeaderSection 
  | HeroSection 
  | AboutSection
  | FeaturesSection 
  | TestimonialsSection 
  | RecentWorksSection 
  | ContactSection 
  | FooterSection;

export interface SiteConfig {
  metadata: {
    title: string;
    description: string;
    favicon?: string;
  };
  theme: {
    primaryColor: string;
    secondaryColor: string;
    fontFamily: string;
    fontSize: {
      base: string;
      headings: string;
    };
    borderRadius?: string;
    maxWidth?: string;
  };
  sections: Section[];
  loading?: boolean;
  editMode?: boolean;
}
