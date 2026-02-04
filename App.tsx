
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Pricing from './components/Pricing';
import AIAdvisor from './components/AIAdvisor';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      <main>
        <Hero />
        
        {/* Work Grid placeholder - typically found in high-end studios */}
        <section id="work" className="py-24 px-6 max-w-7xl mx-auto">
          <div className="flex justify-between items-end mb-16">
            <div>
              <h2 className="text-4xl md:text-5xl font-serif mb-4">Selected Work.</h2>
              <p className="text-white/50">Shipping category-leading AI products.</p>
            </div>
            <button className="hidden md:block text-sm font-bold border-b border-white pb-1">View all projects</button>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="group cursor-pointer">
              <div className="aspect-[4/3] rounded-[40px] overflow-hidden bg-neutral-900 mb-6">
                <img 
                  src="https://picsum.photos/seed/ai1/800/600" 
                  alt="AI Platform" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <h3 className="text-xl font-bold mb-1">Synthetix</h3>
              <p className="text-white/40 text-sm uppercase tracking-widest">Generative Design Tool • Series A</p>
            </div>
            <div className="group cursor-pointer">
              <div className="aspect-[4/3] rounded-[40px] overflow-hidden bg-neutral-900 mb-6">
                <img 
                  src="https://picsum.photos/seed/ai2/800/600" 
                  alt="AI Platform" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <h3 className="text-xl font-bold mb-1">Cortex Labs</h3>
              <p className="text-white/40 text-sm uppercase tracking-widest">Market Intelligence Platform • Seed</p>
            </div>
          </div>
        </section>

        <section id="services" className="py-24 px-6 bg-[#0a0a0a]">
          <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-20 items-center">
            <div>
              <h2 className="text-4xl md:text-6xl font-serif mb-8 leading-tight">Elite talent for <span className="italic">elite</span> founders.</h2>
              <p className="text-white/50 text-lg mb-10 leading-relaxed">
                We replace the need for an expensive in-house design and engineering team, saving you hundreds of thousands in hiring costs and equity.
              </p>
              <div className="grid grid-cols-2 gap-8">
                <div>
                  <h4 className="font-bold mb-2">Fixed Monthly Rate</h4>
                  <p className="text-sm text-white/40">No hourly billing. No hidden fees. Just predictable output.</p>
                </div>
                <div>
                  <h4 className="font-bold mb-2">Elite Engineering</h4>
                  <p className="text-sm text-white/40">Work directly with senior engineers from top tech companies.</p>
                </div>
                <div>
                  <h4 className="font-bold mb-2">Fast Turnaround</h4>
                  <p className="text-sm text-white/40">Typical features delivered in 48 hours. MVPs in 4-6 weeks.</p>
                </div>
                <div>
                  <h4 className="font-bold mb-2">Flexible Scaling</h4>
                  <p className="text-sm text-white/40">Pause or cancel your subscription anytime as your needs evolve.</p>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="glass aspect-square rounded-[60px] flex items-center justify-center p-12">
                <div className="text-center">
                  <div className="w-24 h-24 bg-white/10 rounded-full mx-auto mb-6 flex items-center justify-center">
                    <svg className="w-12 h-12 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h3 className="text-3xl font-bold mb-4">Unlimited Requests</h3>
                  <p className="text-white/40">Queue up as many design or development requests as you like. We tackle them one by one, with blinding speed.</p>
                </div>
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-indigo-600/20 blur-3xl -z-10"></div>
            </div>
          </div>
        </section>

        <AIAdvisor />
        
        <Pricing />
        
        {/* Simple Newsletter/CTA */}
        <section className="py-24 px-6">
          <div className="max-w-5xl mx-auto glass p-12 md:p-20 rounded-[60px] text-center">
            <h2 className="text-4xl md:text-6xl font-serif mb-8 italic">Let's build something <br /> remarkable.</h2>
            <button className="bg-white text-black px-12 py-5 rounded-full font-bold text-xl hover:scale-105 transition-all">
              Schedule a Free Intro
            </button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default App;
