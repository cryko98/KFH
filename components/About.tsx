import React from 'react';
import { Globe, Users } from 'lucide-react';
import { TOKEN_TICKER } from '../constants';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid md:grid-cols-2 gap-12 items-center mb-24">
          <div>
            <h2 className="text-4xl font-display font-bold mb-6 text-goyim-dark">ABOUT <span className="text-goyim-red">{TOKEN_TICKER}</span></h2>
            <p className="text-stone-600 text-lg leading-relaxed mb-6">
              In a world of fleeting trends, the nations rise. $goyim captures the cultural zeitgeist, turning a viral term into a decentralized movement.
            </p>
            <p className="text-stone-600 text-lg leading-relaxed">
              Transparent, community-driven, and historically significant. 
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
             <div className="bg-goyim-light p-6 rounded-2xl border border-goyim-red/20 shadow-md transform hover:-translate-y-2 transition-transform">
                <Globe className="w-10 h-10 text-goyim-red mb-4" />
                <h3 className="text-xl font-bold mb-2 text-goyim-dark">Global</h3>
                <p className="text-sm text-stone-500">A term known across the world, united on the blockchain.</p>
             </div>
             <div className="bg-goyim-light p-6 rounded-2xl border border-goyim-red/20 shadow-md transform hover:-translate-y-2 transition-transform mt-8">
                <Users className="w-10 h-10 text-goyim-dark mb-4" />
                <h3 className="text-xl font-bold mb-2 text-goyim-dark">Community</h3>
                <p className="text-sm text-stone-500">The nations coming together for one ticker.</p>
             </div>
          </div>
        </div>

        <div id="tokenomics" className="bg-gradient-to-r from-goyim-red to-goyim-dark rounded-3xl p-8 md:p-12 text-center relative overflow-hidden shadow-2xl">
           <div className="absolute top-0 left-0 w-full h-full opacity-10" style={{ backgroundImage: 'url("https://www.transparenttextures.com/patterns/cubes.png")' }}></div>
           
           <h2 className="text-4xl font-display font-bold mb-12 relative z-10 text-white">TOKENOMICS</h2>
           
           <div className="grid md:grid-cols-3 gap-8 relative z-10">
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20">
                 <div className="text-5xl font-bold mb-2 text-goyim-gold">1B</div>
                 <div className="text-sm uppercase tracking-widest opacity-80 text-white">Total Supply</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20">
                 <div className="text-5xl font-bold mb-2 text-goyim-gold">0%</div>
                 <div className="text-sm uppercase tracking-widest opacity-80 text-white">Tax</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20">
                 <div className="text-5xl font-bold mb-2 text-goyim-gold">LP</div>
                 <div className="text-sm uppercase tracking-widest opacity-80 text-white">Burnt</div>
              </div>
           </div>
        </div>

      </div>
    </section>
  );
};

export default About;