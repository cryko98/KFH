import React, { useState } from 'react';
import { Copy, CheckCircle, ExternalLink, Star } from 'lucide-react';
import { CA, TOKEN_TICKER, HERO_IMAGE_URL, DEXSCREENER_URL } from '../constants';

const Hero: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(CA);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center pt-24 pb-20 overflow-hidden bg-zion-black">
      {/* Dynamic Background */}
      <div className="absolute inset-0 bg-luxury-gradient"></div>
      
      {/* Animated Grid */}
      <div className="absolute inset-0 opacity-10 pointer-events-none" style={{
        backgroundImage: 'linear-gradient(#D4AF37 1px, transparent 1px), linear-gradient(90deg, #D4AF37 1px, transparent 1px)',
        backgroundSize: '80px 80px',
        maskImage: 'radial-gradient(circle at center, black, transparent 70%)'
      }}></div>

      {/* Gold ambient lights */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-zion-gold/10 rounded-full blur-[100px] pointer-events-none animate-pulse"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col items-center">
        
        {/* 1. Card Image Section */}
        <div className="relative mb-12 group">
           {/* Strong Gold Glow behind */}
           <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-zion-gold/40 rounded-full blur-3xl opacity-60 group-hover:opacity-100 transition-opacity duration-700 animate-pulse"></div>
           
           {/* Image Container - Removed the boxy gradient background, focused on the image itself */}
           <div className="relative w-72 h-72 md:w-[28rem] md:h-[28rem] rounded-2xl overflow-hidden border-2 border-zion-gold/50 shadow-[0_0_50px_rgba(212,175,55,0.3)] hover:shadow-[0_0_80px_rgba(212,175,55,0.6)] transition-all duration-500 bg-black">
              <img 
                src={HERO_IMAGE_URL} 
                alt="Goyim Mascot" 
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
              />
           </div>
           
           {/* Ticker Label */}
           <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 bg-black px-8 py-2 border border-zion-gold shadow-[0_0_20px_rgba(212,175,55,0.4)] z-20">
              <span className="text-2xl font-display font-bold text-white tracking-widest">{TOKEN_TICKER}</span>
           </div>
        </div>

        {/* 2. Text & Content Section */}
        <div className="text-center max-w-5xl mx-auto animate-fade-in-up space-y-6 mt-8">
          
          <div className="inline-flex items-center gap-2 px-4 py-1 border border-zion-gold/30 rounded-full mb-2 bg-black/50 backdrop-blur">
             <div className="w-2 h-2 rounded-full bg-zion-gold animate-pulse"></div>
             <span className="text-xs font-mono text-zion-gold tracking-[0.2em] uppercase">Community Takeover Active</span>
          </div>

          <h1 className="text-5xl md:text-8xl font-display font-bold leading-none text-white tracking-tight drop-shadow-2xl">
            RISE OF THE <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-zion-gold via-white to-zion-gold animate-shine bg-[length:200%_auto] gold-glow">NATIONS</span>
          </h1>

          <div className="h-px w-24 bg-zion-gold mx-auto my-6 opacity-50"></div>

          <p className="text-xl md:text-3xl text-stone-200 font-display italic max-w-3xl mx-auto leading-relaxed">
            "They let the goyim deal in the real world."
          </p>

          {/* CA Box */}
          <div className="relative group max-w-xl mx-auto mt-10">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-zion-gold to-stone-500 opacity-30 group-hover:opacity-60 blur transition duration-500"></div>
            <div className="relative flex items-center bg-black border border-white/10 p-2">
               <div className="flex-1 px-4 overflow-hidden text-left">
                  <div className="text-[10px] text-zion-gold uppercase tracking-[0.3em] mb-1 font-bold">Solana Contract</div>
                  <div className="font-mono text-stone-300 truncate text-sm md:text-base">{CA}</div>
               </div>
               <button 
                  onClick={handleCopy}
                  className="bg-zion-gold text-black p-3 hover:bg-white transition-colors font-bold rounded-sm"
                >
                  {copied ? <CheckCircle className="w-5 h-5" /> : <Copy className="w-5 h-5" />}
                </button>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mt-12">
            <a href="#generator" className="w-full sm:w-auto bg-white text-black px-10 py-4 font-bold text-sm tracking-widest hover:bg-zion-gold transition-colors flex items-center justify-center gap-2 uppercase">
               <Star className="w-4 h-4" /> CREATE MEME
            </a>
            <a href={DEXSCREENER_URL} target="_blank" rel="noreferrer" className="w-full sm:w-auto border border-white/30 text-white px-10 py-4 font-bold text-sm tracking-widest hover:border-zion-gold hover:text-zion-gold transition-colors flex items-center justify-center gap-2 uppercase">
              <ExternalLink className="w-4 h-4" /> VIEW CHART
            </a>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Hero;