
import React from 'react';
import { PRICING_PLANS } from '../constants';

const Pricing: React.FC = () => {
  return (
    <section id="pricing" className="py-24 px-6 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-serif mb-4">Transparent Pricing.</h2>
        <p className="text-white/50 text-lg">Choose a plan that fits your current stage.</p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {PRICING_PLANS.map((plan) => (
          <div 
            key={plan.name}
            className={`relative flex flex-col p-8 rounded-3xl transition-all duration-300 ${
              plan.isPopular 
                ? 'bg-white text-black scale-105 shadow-2xl z-10' 
                : 'glass hover:border-white/20'
            }`}
          >
            {plan.isPopular && (
              <div className="absolute top-0 right-8 -translate-y-1/2 bg-indigo-600 text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                Most Selected
              </div>
            )}
            <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
            <div className="text-4xl font-bold mb-4">{plan.price}<span className="text-sm font-normal opacity-60">/mo</span></div>
            <p className={`mb-8 text-sm ${plan.isPopular ? 'text-black/60' : 'text-white/50'}`}>
              {plan.description}
            </p>
            
            <ul className="space-y-4 mb-10 flex-grow">
              {plan.features.map((feature) => (
                <li key={feature} className="flex items-start gap-3 text-sm">
                  <svg className={`w-5 h-5 mt-0.5 shrink-0 ${plan.isPopular ? 'text-indigo-600' : 'text-white/40'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>

            <button className={`w-full py-4 rounded-xl font-bold transition-all ${
              plan.isPopular 
                ? 'bg-black text-white hover:bg-neutral-800' 
                : 'bg-white/10 text-white hover:bg-white/20'
            }`}>
              Get Started
            </button>
          </div>
        ))}
      </div>

      <div className="mt-16 text-center glass p-8 rounded-3xl max-w-2xl mx-auto border-dashed border-white/20">
        <h4 className="font-bold mb-2">Need a custom project instead?</h4>
        <p className="text-sm text-white/50 mb-4">We also offer fixed-price projects for specific milestones. Typical MVP builds start at $25k.</p>
        <button className="text-indigo-400 font-bold hover:text-indigo-300">Book a strategy call &rarr;</button>
      </div>
    </section>
  );
};

export default Pricing;
