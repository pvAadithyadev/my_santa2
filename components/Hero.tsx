
import React, { useState, useEffect } from 'react';
import { generateSantaHero } from '../services/geminiService';

const Hero: React.FC = () => {
  const [heroImage, setHeroImage] = useState('https://images.unsplash.com/photo-1544273677-242d22279ee1?auto=format&fit=crop&q=80&w=2000');
  const [isLoadingImage, setIsLoadingImage] = useState(true);

  useEffect(() => {
    const loadImage = async () => {
      const img = await generateSantaHero();
      setHeroImage(img);
      setIsLoadingImage(false);
    };
    loadImage();
  }, []);

  return (
    <div id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Santa Claus Global Headquarters" 
          className={`w-full h-full object-cover object-center transition-opacity duration-1000 ${isLoadingImage ? 'opacity-30 blur-sm' : 'opacity-40'}`}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#01160e] via-[#01160e]/80 to-transparent"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-20">
        <div className="max-w-3xl">
          <div className="inline-block px-4 py-1 border border-[#D4AF37] text-[#D4AF37] text-xs font-bold tracking-[0.3em] uppercase mb-8 animate-pulse">
            Established 280 AD
          </div>
          <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-8">
            <span className="block text-white">Santa Claus:</span>
            <span className="block gold-gradient">1000+ Years of Global Logistics & Joy Delivery</span>
          </h1>
          <p className="text-xl text-slate-300 mb-12 font-light leading-relaxed max-w-2xl">
            Pioneering the impossible through hyper-optimized distribution networks and artisan engineering. Redefining the boundaries of global delivery speed and high-precision gifting.
          </p>
          
          <div className="flex flex-wrap gap-6">
            <a 
              href="#operations"
              className="px-10 py-4 velvet-gradient text-white font-bold rounded-none border border-[#D4AF37]/30 hover:shadow-[0_0_30px_rgba(212,175,55,0.3)] transition-all duration-300 text-sm tracking-widest uppercase"
            >
              Explore Operations
            </a>
            <a 
              href="#workshop"
              className="px-10 py-4 border border-[#D4AF37] text-[#D4AF37] font-bold hover:bg-[#D4AF37] hover:text-[#01160e] transition-all duration-300 text-sm tracking-widest uppercase"
            >
              Consult the AI
            </a>
          </div>
        </div>
      </div>

      {/* Hero Stats (Decorative) */}
      <div className="absolute bottom-12 right-12 hidden lg:flex gap-12 text-right">
        <div>
          <div className="text-[#D4AF37] font-bold text-lg">9.8m/s²</div>
          <div className="text-xs uppercase tracking-widest text-slate-500">Gravity Efficiency</div>
        </div>
        <div className="w-px h-12 bg-[#D4AF37]/20"></div>
        <div>
          <div className="text-[#D4AF37] font-bold text-lg">0.0001s</div>
          <div className="text-xs uppercase tracking-widest text-slate-500">Chimney Entry Latency</div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
