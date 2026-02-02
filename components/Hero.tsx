import React, { useState } from 'react';
import { Copy, CheckCircle, ExternalLink } from 'lucide-react';
import { CA, TOKEN_NAME, TOKEN_TICKER, HERO_IMAGE_URL, DEXSCREENER_URL } from '../constants';

const Hero: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(CA);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="relative pt-32 pb-16 overflow-hidden bg-goyim-light">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10" style={{
        backgroundImage: 'radial-gradient(#D6001C 1px, transparent 1px)',
        backgroundSize: '20px 20px'
      }}></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          
          <div className="lg:w-1/2 text-center lg:text-left">
            <div className="inline-block px-4 py-1 rounded-full bg-goyim-red/10 text-goyim-red font-semibold mb-6 animate-pulse border border-goyim-red/20">
              THE CHOSEN COIN OF SOLANA
            </div>
            <h1 className="text-5xl md:text-7xl font-display font-bold mb-6 leading-tight text-goyim-dark">
              RISE OF THE <span className="text-goyim-red text-shadow-glow">NATIONS</span>
              <br />
              <span>{TOKEN_NAME}</span>
            </h1>
            <p className="text-xl text-goyim-dark/80 mb-8 max-w-2xl mx-auto lg:mx-0">
              Goyim (גויים). The word is viral. The movement is unstoppable. 
              Join the nations in the biggest wealth transfer on the blockchain.
            </p>

            {/* CA Box */}
            <div className="bg-white border border-goyim-red/30 rounded-xl p-4 mb-8 flex items-center justify-between max-w-md mx-auto lg:mx-0 group hover:border-goyim-red transition-colors shadow-sm">
              <div className="flex flex-col items-start overflow-hidden">
                <span className="text-xs text-stone-500 uppercase tracking-widest font-semibold">Contract Address</span>
                <span className="text-sm md:text-base font-mono text-goyim-dark truncate w-full pr-4">{CA}</span>
              </div>
              <button 
                onClick={handleCopy}
                className="bg-goyim-light hover:bg-goyim-red hover:text-white text-goyim-dark p-2 rounded-lg transition-colors"
              >
                {copied ? <CheckCircle className="w-5 h-5" /> : <Copy className="w-5 h-5" />}
              </button>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a href="#generator" className="bg-goyim-red text-white hover:bg-goyim-dark px-8 py-3 rounded-full font-bold text-lg transition-transform hover:-translate-y-1 shadow-lg">
                Create Meme
              </a>
              <a href={DEXSCREENER_URL} target="_blank" rel="noreferrer" className="border-2 border-goyim-red text-goyim-red hover:bg-goyim-red hover:text-white px-8 py-3 rounded-full font-bold text-lg transition-colors flex items-center justify-center">
                DexScreener <ExternalLink className="w-4 h-4 ml-2" />
              </a>
            </div>
          </div>

          <div className="lg:w-1/2 flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 bg-goyim-red blur-[100px] opacity-20 rounded-full animate-pulse"></div>
              <img 
                src={HERO_IMAGE_URL} 
                alt="Goyim Mascot" 
                className="relative w-80 h-80 md:w-[500px] md:h-[500px] object-cover rounded-3xl shadow-2xl border-4 border-white transition-all duration-500 hover:scale-105"
              />
              <div className="absolute -bottom-6 -right-6 bg-white text-goyim-red font-display text-4xl px-6 py-4 rounded-xl shadow-lg border-2 border-goyim-red/20 transform -rotate-3">
                {TOKEN_TICKER}
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Hero;