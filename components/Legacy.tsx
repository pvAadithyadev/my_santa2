
import React from 'react';
import { LegacyStat } from '../types';

const stats: LegacyStat[] = [
  { label: 'Operating History', value: '1,750', suffix: '+' },
  { label: 'Global Workforce', value: '12', suffix: 'k' },
  { label: 'Satisfaction Rate', value: '99.9', suffix: '%' },
  { label: 'Joy Units Delivered', value: '75', suffix: 'B' },
];

const Legacy: React.FC = () => {
  return (
    <section id="legacy" className="py-24 bg-[#01160e] relative z-10 border-y border-[#D4AF37]/10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl font-bold mb-8 text-[#D4AF37]">A Millennium of Magic</h2>
            <p className="text-xl text-slate-300 mb-6 font-light leading-relaxed">
              Founded in an era before digital systems, we have scaled our operations from a small artisanal workshop to a global leader in high-velocity gift distribution.
            </p>
            <p className="text-lg text-slate-400 font-light italic border-l-2 border-[#D4AF37] pl-6 py-2">
              "Excellence is not an act, but a habit of twelve months and one magical night." — CEO S. Claus
            </p>
          </div>
          
          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, i) => (
              <div key={i} className="bg-[#022b21] p-8 border border-[#D4AF37]/10 rounded-lg text-center transform hover:-translate-y-1 transition-all duration-300">
                <div className="text-4xl font-bold text-[#D4AF37] mb-2">
                  {stat.value}{stat.suffix}
                </div>
                <div className="text-sm uppercase tracking-widest text-slate-500 font-bold">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Legacy;
