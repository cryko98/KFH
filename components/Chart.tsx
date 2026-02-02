import React from 'react';
import { Activity } from 'lucide-react';
import { DEXSCREENER_URL } from '../constants';

const Chart: React.FC = () => {
  return (
    <section id="chart" className="py-16 bg-goyim-light relative border-t border-goyim-red/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-3 mb-8">
            <Activity className="text-goyim-red w-8 h-8" />
            <h2 className="text-3xl font-display font-bold text-goyim-dark">MARKET DATA</h2>
        </div>
        
        <div className="w-full h-[600px] rounded-2xl overflow-hidden border border-goyim-red/20 shadow-xl bg-white">
            <iframe 
                src={`${DEXSCREENER_URL}?embed=1&theme=light`} 
                className="w-full h-full border-0"
                title="DexScreener Chart"
            ></iframe>
        </div>
      </div>
    </section>
  );
};

export default Chart;