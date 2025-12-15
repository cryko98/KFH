import React from 'react';
import { Activity } from 'lucide-react';

const Chart: React.FC = () => {
  return (
    <section id="chart" className="py-16 bg-dojo-cream relative border-t border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-3 mb-8">
            <Activity className="text-dojo-red w-8 h-8" />
            <h2 className="text-3xl font-display font-bold text-dojo-ink">LIVE MARKET DATA</h2>
        </div>
        
        <div className="w-full h-[600px] rounded-2xl overflow-hidden border border-stone-300 shadow-xl bg-white">
            <iframe 
                src="https://dexscreener.com/solana/huscygyleb6yipcrovyiz74gqs41fgt3dcvgglfi6xnh?embed=1&theme=light" 
                className="w-full h-full border-0"
                title="DexScreener Chart"
            ></iframe>
        </div>
      </div>
    </section>
  );
};

export default Chart;