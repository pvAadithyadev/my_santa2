
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Legacy from './components/Legacy';
import Expertise from './components/Expertise';
import LogisticsChat from './components/LogisticsChat';
import Footer from './components/Footer';
import Snowfall from './components/Snowfall';

const App: React.FC = () => {
  return (
    <div className="relative min-h-screen bg-[#01160e] text-slate-200">
      <Snowfall />
      <Navbar />
      <main>
        <Hero />
        <Legacy />
        <Expertise />
        
        <section className="py-24 px-6 bg-[#022b21]/30 relative z-10">
          <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 items-center">
            <div className="flex-1">
              <h2 className="text-4xl font-bold mb-6 text-[#D4AF37]">Global Command & Control</h2>
              <p className="text-xl text-slate-300 font-light leading-relaxed mb-8">
                Our command center integrates real-time weather analytics, orbital reindeer tracking, and holiday-spirit modulation sensors to ensure 100% mission success.
              </p>
              <ul className="space-y-4">
                {[
                  'Hyper-local Chimney Navigation Algorithms',
                  'Sub-zero Payload Integrity Protection',
                  'AI-Driven Behavioral Analysis (Naughty/Nice Scoring)',
                  'Supersonic Reindeer Health Telemetry'
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-4 text-slate-400">
                    <div className="w-1.5 h-1.5 bg-[#D4AF37] rounded-full"></div>
                    <span className="text-sm font-bold uppercase tracking-widest">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex-1 w-full lg:w-auto">
              <LogisticsChat />
            </div>
          </div>
        </section>

        <section id="contact" className="py-32 px-6 relative z-10 text-center">
          <div className="max-w-3xl mx-auto velvet-gradient p-16 rounded-3xl border border-[#D4AF37]/40 shadow-2xl overflow-hidden relative">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -mr-32 -mt-32 blur-3xl"></div>
            <h2 className="text-4xl font-bold mb-8 relative z-10">Ready for Global Distribution?</h2>
            <p className="text-xl text-white/80 mb-12 relative z-10 font-light">
              Inquire about partnership opportunities, logistical consulting, or premium joy-delivery pipelines.
            </p>
            <button className="relative z-10 bg-white text-[#8b0000] px-12 py-4 rounded-full font-bold uppercase text-xs tracking-[0.3em] hover:bg-[#f7e7ce] transition-all transform hover:scale-105 duration-300">
              Initiate Contact
            </button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default App;
