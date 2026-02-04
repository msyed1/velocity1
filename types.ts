
export interface ProductRoadmap {
  title: string;
  vision: string;
  mvpFeatures: string[];
  techStack: string[];
  timeline: string;
  monetization: string;
}

export interface NavItem {
  label: string;
  href: string;
}

export interface PricingPlan {
  name: string;
  price: string;
  description: string;
  features: string[];
  isPopular?: boolean;
}

export interface Testimonial {
  quote: string;
  author: string;
  role: string;
  company: string;
  image: string;
}
