import React from 'react';
import { Globe, Users, Shield, Rocket } from 'lucide-react';
import { TOKEN_TICKER } from '../constants';

const About: React.FC = () => {
  return (
    <section id="about" className="py-32 bg-zion-black border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid md:grid-cols-2 gap-20 mb-32 reveal-on-scroll">
          <div>
            <h2 className="text-5xl font-display font-bold mb-10 text-white">
                THE <span className="text-zion-gold">MISSION</span>
            </h2>
            <p className="text-stone-400 text-xl leading-relaxed font-light mb-8">
               We are building a monument on the blockchain. <span className="text-white font-bold">{TOKEN_TICKER}</span> is not merely a token; it is a cultural statement. A decentralized reclamation of power.
            </p>
            
            <div className="border-l border-white/20 pl-8 space-y-8">
               <div>
                  <h3 className="text-white font-bold uppercase tracking-widest text-sm mb-2">Community Takeover</h3>
                  <p className="text-stone-500 font-mono text-sm">
                    The original dev faded. The community stepped up. We are now self-governed, resilient, and aiming for the stars.
                  </p>
               </div>
               <div>
                  <h3 className="text-white font-bold uppercase tracking-widest text-sm mb-2">Market Dominance</h3>
                  <p className="text-stone-500 font-mono text-sm">
                    Current Cap: 2M+. Target: 10M+. The math is simple, the momentum is undeniable.
                  </p>
               </div>
            </div>
          </div>
          
          <div className="grid gap-6">
             {[
               { icon: Globe, title: "Global Reach", desc: "A universal term recognized in every language." },
               { icon: Users, title: "No Cabal", desc: "Fair launch. No insider allocation. Pure market dynamics." },
               { icon: Shield, title: "Unruggable", desc: "Liquidity burnt. Contract renounced. Community owned." }
             ].map((item, idx) => (
               <div key={idx} className="group bg-zion-charcoal border border-white/5 p-8 hover:border-zion-gold/50 hover:bg-white/5 transition-all duration-300 flex items-start gap-6">
                  <div className="p-4 bg-black border border-white/10 group-hover:border-zion-gold/50 transition-colors">
                    <item.icon className="w-6 h-6 text-white group-hover:text-zion-gold" />
                  </div>
                  <div>
                    <h3 className="text-xl font-display text-white mb-2 group-hover:text-zion-gold transition-colors">{item.title}</h3>
                    <p className="text-stone-500 font-light text-sm">{item.desc}</p>
                  </div>
               </div>
             ))}
          </div>
        </div>

        {/* Tokenomics - Panoramic */}
        <div className="reveal-on-scroll relative overflow-hidden rounded-none border-y border-white/10 py-20 bg-black">
           <div className="absolute inset-0 bg-tallit-stripes opacity-10 pointer-events-none"></div>
           
           <div className="relative z-10 text-center">
               <div className="inline-flex items-center gap-2 border border-zion-gold/50 px-6 py-2 rounded-full text-zion-gold text-xs font-mono mb-10 tracking-widest uppercase">
                   <Rocket className="w-3 h-3" /> Road to 10M
               </div>
               
               <div className="grid md:grid-cols-3 gap-12 divide-y md:divide-y-0 md:divide-x divide-white/10 max-w-5xl mx-auto">
                  <div className="px-8">
                     <div className="text-6xl font-display text-white mb-2">1B</div>
                     <div className="text-xs text-stone-500 uppercase tracking-[0.3em]">Total Supply</div>
                  </div>
                  <div className="px-8 pt-12 md:pt-0">
                     <div className="text-6xl font-display text-white mb-2">0%</div>
                     <div className="text-xs text-stone-500 uppercase tracking-[0.3em]">Buy/Sell Tax</div>
                  </div>
                  <div className="px-8 pt-12 md:pt-0">
                     <div className="text-6xl font-display text-white mb-2">100%</div>
                     <div className="text-xs text-stone-500 uppercase tracking-[0.3em]">LP Burnt</div>
                  </div>
               </div>
           </div>
        </div>

      </div>
    </section>
  );
};

export default About;