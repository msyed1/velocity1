
import React from 'react';
import { NAV_ITEMS } from '../constants';

const Navbar: React.FC = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-6 flex justify-center pointer-events-none">
      <div className="glass px-8 py-3 rounded-full flex items-center gap-12 pointer-events-auto shadow-2xl">
        <div className="text-xl font-bold tracking-tighter flex items-center gap-2">
          <div className="w-5 h-5 bg-white rounded-full"></div>
          VELOCITY
        </div>
        <div className="hidden md:flex items-center gap-8">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-sm font-medium text-white/60 hover:text-white transition-colors"
            >
              {item.label}
            </a>
          ))}
        </div>
        <button className="bg-white text-black px-5 py-2 rounded-full text-sm font-semibold hover:bg-neutral-200 transition-all">
          Get Started
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
