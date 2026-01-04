
import React from 'react';
import { ExpertiseItem } from '../types';

const expertiseData: ExpertiseItem[] = [
  {
    id: '1',
    title: 'Global Logistics',
    description: 'Managing a real-time distribution network covering 195+ countries in a single 24-hour window.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    id: '2',
    title: 'Toy Engineering',
    description: 'Mastering traditional craftsmanship integrated with high-precision automated manufacturing.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
  {
    id: '3',
    title: 'High-Speed Aviation',
    description: 'R&D in supersonic reindeer propulsion and stealth chimney-entry technology.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
      </svg>
    ),
  },
];

const Expertise: React.FC = () => {
  return (
    <section id="operations" className="py-24 px-6 relative z-10 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold mb-4 text-[#D4AF37]">Pillars of Excellence</h2>
        <div className="h-1 w-24 bg-[#D4AF37] mx-auto opacity-50"></div>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {expertiseData.map((item) => (
          <div
            key={item.id}
            className="group p-8 border border-[#D4AF37]/20 bg-[#022b21]/40 backdrop-blur-md rounded-xl hover:border-[#D4AF37] transition-all duration-500 gold-shadow-hover"
          >
            <div className="text-[#D4AF37] mb-6 group-hover:scale-110 transition-transform duration-500">
              {item.icon}
            </div>
            <h3 className="text-2xl font-bold mb-4 text-[#D4AF37]">{item.title}</h3>
            <p className="text-slate-300 leading-relaxed font-light">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Expertise;
