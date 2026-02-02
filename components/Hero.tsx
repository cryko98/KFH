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
      
      {/* Animated Mesh Grid */}
      <div className="absolute inset-0 opacity-20 pointer-events-none" style={{
        backgroundImage: 'linear-gradient(#2A2A2A 1px, transparent 1px), linear-gradient(90deg, #2A2A2A 1px, transparent 1px)',
        backgroundSize: '50px 50px',
        maskImage: 'radial-gradient(circle at center, black, transparent 80%)'
      }}></div>

      {/* Enhanced Golden Glow spotlights */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-zion-gold/20 rounded-full blur-[150px] pointer-events-none animate-pulse"></div>
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-zion-gold/10 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-white/5 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col items-center">
        
        {/* 1. Image Section - Adjusted to not cut the image */}
        <div className="relative mb-16 group perspective-1000">
          {/* Animated Glow Behind */}
          <div className="absolute inset-0 bg-zion-gold/40 blur-3xl rounded-full scale-110 opacity-60 animate-glow"></div>
          
          {/* Rings */}
          <div className="absolute -inset-4 border border-zion-gold/30 rounded-[3rem] animate-[spin_10s_linear_infinite] opacity-50"></div>
          <div className="absolute -inset-8 border border-white/10 rounded-[3.5rem] animate-[spin_15s_linear_infinite_reverse] opacity-30"></div>
          
          <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-[2.5rem] p-1 bg-gradient-to-b from-zion-gold via-zion-black to-zion-gold animate-float shadow-[0_0_80px_rgba(212,175,55,0.4)]">
            <div className="w-full h-full rounded-[2.4rem] overflow-hidden bg-black relative flex items-center justify-center">
               <img 
                src={HERO_IMAGE_URL} 
                alt="Goyim Mascot" 
                className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
              />
              {/* Subtle overlay for depth */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none"></div>
            </div>
          </div>
          
          {/* Floating Sticker */}
          <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 bg-black text-white font-display text-2xl md:text-4xl px-8 py-2 border border-zion-gold shadow-[0_0_20px_rgba(212,175,55,0.6)] tracking-widest uppercase z-20 whitespace-nowrap">
            {TOKEN_TICKER}
          </div>
        </div>

        {/* 2. Text & Content Section */}
        <div className="text-center max-w-5xl mx-auto animate-fade-in-up space-y-8">
          
          <div className="inline-flex items-center gap-3 px-6 py-2 border border-zion-gold/30 bg-zion-gold/5 backdrop-blur-md rounded-full mb-4 shadow-[0_0_15px_rgba(212,175,55,0.2)]">
             <span className="relative flex h-3 w-3">
               <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-zion-gold opacity-75"></span>
               <span className="relative inline-flex rounded-full h-3 w-3 bg-zion-gold"></span>
             </span>
             <span className="text-sm font-mono text-zion-gold tracking-widest uppercase font-bold">Community Takeover Active</span>
          </div>

          <h1 className="text-5xl md:text-8xl font-display font-bold leading-none text-white tracking-tight drop-shadow-2xl">
            RISE OF THE <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-zion-gold to-white animate-shine bg-[length:200%_auto] gold-glow">NATIONS</span>
          </h1>

          <div className="h-px w-32 bg-gradient-to-r from-transparent via-zion-gold to-transparent mx-auto my-8"></div>

          <p className="text-xl md:text-3xl text-stone-200 font-display italic max-w-3xl mx-auto leading-relaxed border-l-2 border-zion-gold pl-6 text-left md:text-center md:border-l-0 md:border-t-0">
            "They let the goyim deal in the real world."
          </p>

          {/* CA Box - Noir Style */}
          <div className="relative group max-w-2xl mx-auto mt-12">
            <div className="absolute -inset-1 bg-gradient-to-r from-zion-gold to-white opacity-30 group-hover:opacity-60 blur transition duration-500"></div>
            <div className="relative flex items-center bg-black border border-white/10 p-2 shadow-2xl">
               <div className="flex-1 px-4 overflow-hidden text-left">
                  <div className="text-[10px] text-zion-gold uppercase tracking-[0.3em] mb-1 font-bold">Solana Contract</div>
                  <div className="font-mono text-stone-300 truncate text-sm md:text-lg">{CA}</div>
               </div>
               <button 
                  onClick={handleCopy}
                  className="bg-zion-gold text-black p-4 hover:bg-white transition-colors font-bold"
                >
                  {copied ? <CheckCircle className="w-6 h-6" /> : <Copy className="w-6 h-6" />}
                </button>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mt-12">
            <a href="#generator" className="w-full sm:w-auto bg-white text-black px-12 py-5 font-bold text-lg tracking-widest hover:bg-zion-gold transition-colors shadow-[0_0_30px_rgba(255,255,255,0.1)] flex items-center justify-center gap-3">
               <Star className="w-5 h-5" /> CREATE MEME
            </a>
            <a href={DEXSCREENER_URL} target="_blank" rel="noreferrer" className="w-full sm:w-auto border border-white/30 text-white px-12 py-5 font-bold text-lg tracking-widest hover:border-zion-gold hover:text-zion-gold transition-colors flex items-center justify-center gap-3 backdrop-blur-sm">
              <ExternalLink className="w-5 h-5" /> VIEW CHART
            </a>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Hero;