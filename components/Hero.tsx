
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 pt-24 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-white/5 rounded-full blur-[120px] pointer-events-none"></div>
      
      <div className="inline-block glass px-4 py-1.5 rounded-full text-xs font-medium tracking-widest text-white/60 mb-8 border border-white/10">
        AI-FIRST PRODUCT STUDIO
      </div>
      
      <h1 className="text-6xl md:text-8xl lg:text-[110px] font-serif font-light leading-tight tracking-tight mb-8 max-w-5xl">
        We <span className="italic">build</span> the future of <br className="hidden md:block" /> 
        <span className="text-gradient">intelligent software.</span>
      </h1>
      
      <p className="text-lg md:text-xl text-white/50 max-w-2xl leading-relaxed mb-12">
        Velocity is an elite AI product studio trusted by founders to design, build, and launch market-defining products at startup speed.
      </p>
      
      <div className="flex flex-col md:flex-row gap-4">
        <a 
          href="#ai-strategist" 
          className="bg-white text-black px-8 py-4 rounded-full font-bold text-lg hover:scale-105 transition-transform shadow-xl shadow-white/5"
        >
          Validate your idea
        </a>
        <a 
          href="#pricing" 
          className="glass px-8 py-4 rounded-full font-bold text-lg hover:bg-white/10 transition-all border border-white/20"
        >
          View our plans
        </a>
      </div>

      <div className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-12 opacity-40 grayscale contrast-125">
        <div className="flex items-center justify-center font-bold text-2xl tracking-tighter">TECHSTAR</div>
        <div className="flex items-center justify-center font-bold text-2xl tracking-tighter">STRIPE</div>
        <div className="flex items-center justify-center font-bold text-2xl tracking-tighter">VERCEL</div>
        <div className="flex items-center justify-center font-bold text-2xl tracking-tighter">RAILWAY</div>
      </div>
    </section>
  );
};

export default Hero;
