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
    <div className="relative pt-32 pb-16 overflow-hidden bg-dojo-black">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10" style={{
        backgroundImage: 'radial-gradient(#D9381E 1px, transparent 1px)',
        backgroundSize: '30px 30px'
      }}></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          
          <div className="lg:w-1/2 text-center lg:text-left">
            <div className="inline-block px-4 py-1 rounded-full bg-dojo-red/20 text-dojo-red font-semibold mb-6 animate-pulse">
              SOLANA'S FIERCEST HAMSTER
            </div>
            <h1 className="text-5xl md:text-7xl font-display font-bold mb-6 leading-tight">
              ENTER THE <span className="text-dojo-red text-shadow-glow">DOJO</span> OF
              <br />
              <span className="text-white">{TOKEN_NAME}</span>
            </h1>
            <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto lg:mx-0">
              The only Kung Fu master small enough to fit in your pocket but strong enough to pump your bags. 
              Small paws, big kicks. 
            </p>

            {/* CA Box */}
            <div className="bg-dojo-gray/50 border border-dojo-gray rounded-xl p-4 mb-8 flex items-center justify-between max-w-md mx-auto lg:mx-0 group hover:border-dojo-red transition-colors">
              <div className="flex flex-col items-start overflow-hidden">
                <span className="text-xs text-gray-500 uppercase tracking-widest font-semibold">Contract Address</span>
                <span className="text-sm md:text-base font-mono text-white truncate w-full pr-4">{CA}</span>
              </div>
              <button 
                onClick={handleCopy}
                className="bg-dojo-black hover:bg-dojo-red text-white p-2 rounded-lg transition-colors"
              >
                {copied ? <CheckCircle className="w-5 h-5" /> : <Copy className="w-5 h-5" />}
              </button>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a href="#generator" className="bg-white text-dojo-black hover:bg-gray-200 px-8 py-3 rounded-full font-bold text-lg transition-transform hover:-translate-y-1">
                Create Meme
              </a>
              <a href={DEXSCREENER_URL} target="_blank" rel="noreferrer" className="border-2 border-dojo-red text-dojo-red hover:bg-dojo-red hover:text-white px-8 py-3 rounded-full font-bold text-lg transition-colors flex items-center justify-center">
                DexScreener <ExternalLink className="w-4 h-4 ml-2" />
              </a>
            </div>
          </div>

          <div className="lg:w-1/2 flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 bg-dojo-red blur-[100px] opacity-20 rounded-full animate-pulse"></div>
              <img 
                src={HERO_IMAGE_URL} 
                alt="Kung Fu Hamster" 
                className="relative w-80 h-80 md:w-[500px] md:h-[500px] object-cover rounded-3xl shadow-2xl border-4 border-dojo-black rotate-3 hover:rotate-0 transition-all duration-500"
              />
              <div className="absolute -bottom-6 -right-6 bg-hamster-orange text-dojo-black font-display text-4xl px-6 py-4 rounded-xl shadow-lg border-4 border-black transform -rotate-6">
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