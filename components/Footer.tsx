
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="py-12 border-t border-[#D4AF37]/10 relative z-10 bg-[#01160e]">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="flex flex-col items-center md:items-start">
          <div className="text-2xl font-bold gold-gradient mb-2">SANTA CLAUS</div>
          <p className="text-slate-500 text-sm tracking-widest uppercase">Global Logistics Portfolio</p>
        </div>
        
        <div className="flex gap-8 text-[#D4AF37]/60 text-sm font-bold tracking-widest uppercase">
          <a href="#home" className="hover:text-[#D4AF37] transition-colors">Home</a>
          <a href="#legacy" className="hover:text-[#D4AF37] transition-colors">Legacy</a>
          <a href="#operations" className="hover:text-[#D4AF37] transition-colors">Operations</a>
          <a href="#workshop" className="hover:text-[#D4AF37] transition-colors">Workshop</a>
        </div>
        
        <div className="text-slate-600 text-[10px] tracking-[0.2em] uppercase">
          © 280-2024 North Pole Global Distribution Services. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
