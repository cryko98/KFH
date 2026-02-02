import React from 'react';
import { Activity } from 'lucide-react';
import { DEXSCREENER_URL } from '../constants';

const Chart: React.FC = () => {
  return (
    <section id="chart" className="py-20 bg-zion-black relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-8 reveal-on-scroll">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-white/5 border border-white/10">
                  <Activity className="text-zion-gold w-6 h-6" />
              </div>
              <div>
                <h2 className="text-3xl font-display font-bold text-white">MARKET DATA</h2>
                <p className="text-stone-500 font-mono text-xs uppercase tracking-widest">Real-time financial feed</p>
              </div>
            </div>
            <div className="hidden md:block h-px flex-1 bg-white/10 ml-8"></div>
        </div>
        
        <div className="w-full h-[700px] border border-white/10 shadow-2xl bg-black reveal-on-scroll delay-100 relative group">
            <div className="absolute inset-0 bg-zion-gold/5 animate-pulse pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <iframe 
                src={`${DEXSCREENER_URL}?embed=1&theme=dark&info=0`} 
                className="w-full h-full border-0 grayscale hover:grayscale-0 transition-all duration-500"
                title="DexScreener Chart"
            ></iframe>
        </div>
      </div>
    </section>
  );
};

export default Chart;