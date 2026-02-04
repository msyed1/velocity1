
import { NavItem, PricingPlan, Testimonial } from './types';

export const NAV_ITEMS: NavItem[] = [
  { label: 'Work', href: '#work' },
  { label: 'Services', href: '#services' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'AI Strategist', href: '#ai-strategist' },
];

export const PRICING_PLANS: PricingPlan[] = [
  {
    name: "Standard",
    price: "$4,995",
    description: "Perfect for seed-stage startups needing a solid MVP.",
    features: [
      "One request at a time",
      "Average 48-hour delivery",
      "Unlimited revisions",
      "Web & Mobile design",
      "Dedicated Project Manager"
    ]
  },
  {
    name: "Growth",
    price: "$7,995",
    description: "Scale your product with advanced AI features and complex logic.",
    features: [
      "Two requests at a time",
      "Priority support",
      "Fullstack AI integration",
      "User research & testing",
      "Weekly strategy calls",
      "Brand identity design"
    ],
    isPopular: true
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "White-glove service for established companies and complex systems.",
    features: [
      "Dedicated studio team",
      "Custom development",
      "Infrastructure scaling",
      "Enterprise security",
      "24/7 Support"
    ]
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    quote: "Velocity transformed our napkin sketch into a Series A funded product in just 8 weeks.",
    author: "Sarah Jenkins",
    role: "Founder",
    company: "Flux AI",
    image: "https://picsum.photos/seed/sarah/200/200"
  },
  {
    quote: "The subscription model for product development is a game changer. No more billing surprises.",
    author: "Marcus Chen",
    role: "CTO",
    company: "Lumina Health",
    image: "https://picsum.photos/seed/marcus/200/200"
  }
];
