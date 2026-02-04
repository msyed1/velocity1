
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="py-20 px-6 border-t border-white/5 mt-24">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-end gap-12">
        <div className="max-w-md">
          <div className="text-2xl font-bold tracking-tighter flex items-center gap-2 mb-6">
            <div className="w-6 h-6 bg-white rounded-full"></div>
            VELOCITY
          </div>
          <p className="text-white/40 text-sm leading-relaxed mb-8">
            Building the infrastructure for the AI era. Trusted by YC founders and visionary builders worldwide.
          </p>
          <div className="flex gap-6 text-sm font-medium text-white/60">
            <a href="#" className="hover:text-white">Twitter</a>
            <a href="#" className="hover:text-white">LinkedIn</a>
            <a href="#" className="hover:text-white">Instagram</a>
          </div>
        </div>

        <div className="flex flex-col md:items-end text-sm text-white/40">
          <p className="mb-2">San Francisco, CA & Remote</p>
          <p className="mb-6">hello@velocityai.studio</p>
          <p>&copy; 2024 Velocity AI Product Studio. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
