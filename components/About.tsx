import React from 'react';
import { Shield, Zap, TrendingUp } from 'lucide-react';
import { TOKEN_TICKER } from '../constants';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-dojo-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid md:grid-cols-2 gap-12 items-center mb-24">
          <div>
            <h2 className="text-4xl font-display font-bold mb-6 text-dojo-ink">THE LEGEND OF <span className="text-dojo-red">$KFH</span></h2>
            <p className="text-dojo-charcoal text-lg leading-relaxed mb-6">
              Born in the hidden valleys of the Solana blockchain, the Kung Fu Hamster trained for years in the ancient art of "Pump-Fu". 
              While other memecoins sleep, $KFH practices his kicks.
            </p>
            <p className="text-dojo-charcoal text-lg leading-relaxed">
              We are not just a coin; we are a dojo. A community of disciplined holders ready to strike the market with speed and precision.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
             <div className="bg-white p-6 rounded-2xl border border-stone-200 shadow-md transform hover:-translate-y-2 transition-transform">
                <Shield className="w-10 h-10 text-hamster-orange mb-4" />
                <h3 className="text-xl font-bold mb-2 text-dojo-ink">Unbreakable</h3>
                <p className="text-sm text-stone-500">Strong community defense against FUD.</p>
             </div>
             <div className="bg-white p-6 rounded-2xl border border-stone-200 shadow-md transform hover:-translate-y-2 transition-transform mt-8">
                <Zap className="w-10 h-10 text-dojo-red mb-4" />
                <h3 className="text-xl font-bold mb-2 text-dojo-ink">Fast Kicks</h3>
                <p className="text-sm text-stone-500">Built on Solana for lightning speed transactions.</p>
             </div>
          </div>
        </div>

        <div id="tokenomics" className="bg-gradient-to-r from-dojo-red to-red-900 rounded-3xl p-8 md:p-12 text-center relative overflow-hidden shadow-2xl">
           <div className="absolute top-0 left-0 w-full h-full opacity-10" style={{ backgroundImage: 'url("https://www.transparenttextures.com/patterns/cubes.png")' }}></div>
           
           <h2 className="text-4xl font-display font-bold mb-12 relative z-10 text-white">TOKENOMICS</h2>
           
           <div className="grid md:grid-cols-3 gap-8 relative z-10">
              <div className="bg-black/20 backdrop-blur-sm p-6 rounded-xl border border-white/10">
                 <div className="text-5xl font-bold mb-2 text-hamster-gold">1B</div>
                 <div className="text-sm uppercase tracking-widest opacity-80 text-white">Total Supply</div>
              </div>
              <div className="bg-black/20 backdrop-blur-sm p-6 rounded-xl border border-white/10">
                 <div className="text-5xl font-bold mb-2 text-hamster-gold">0%</div>
                 <div className="text-sm uppercase tracking-widest opacity-80 text-white">Tax</div>
              </div>
              <div className="bg-black/20 backdrop-blur-sm p-6 rounded-xl border border-white/10">
                 <div className="text-5xl font-bold mb-2 text-hamster-gold">LP</div>
                 <div className="text-sm uppercase tracking-widest opacity-80 text-white">Burnt</div>
              </div>
           </div>
        </div>

      </div>
    </section>
  );
};

export default About;