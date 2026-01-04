
import React, { useState, useEffect } from 'react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 py-6 px-6 lg:px-12 ${
      isScrolled ? 'bg-[#01160e]/95 backdrop-blur-md shadow-2xl py-4' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="text-2xl font-bold gold-gradient tracking-tighter">
          SC <span className="text-xs font-light tracking-[0.3em] ml-2 opacity-60">EXECUTIVE</span>
        </div>
        
        <div className="hidden md:flex gap-12 text-xs font-bold uppercase tracking-[0.2em] text-[#D4AF37]/80">
          <a href="#legacy" className="hover:text-[#D4AF37] transition-colors">Legacy</a>
          <a href="#operations" className="hover:text-[#D4AF37] transition-colors">Operations</a>
          <a href="#workshop" className="hover:text-[#D4AF37] transition-colors">Workshop</a>
          <a href="#contact" className="hover:text-[#D4AF37] transition-colors">Contact</a>
        </div>
        
        <div className="flex items-center gap-6">
          <div className="hidden lg:block h-px w-12 bg-[#D4AF37]/20"></div>
          <button className="gold-border text-[#D4AF37] px-6 py-2 text-[10px] font-bold uppercase tracking-widest hover:bg-[#D4AF37] hover:text-[#01160e] transition-all duration-300">
            Portfolio Access
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
