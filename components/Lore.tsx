import React, { useEffect } from 'react';
import { LORE_IMAGE_URL } from '../constants';
import { FileText, Scroll, Lock } from 'lucide-react';

const Lore: React.FC = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
          }
        });
      },
      { threshold: 0.15 }
    );

    const elements = document.querySelectorAll('.reveal-on-scroll');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="lore" className="py-32 bg-zion-charcoal relative overflow-hidden">
       {/* Background Noise/Texture */}
       <div className="absolute inset-0 opacity-5" style={{ filter: 'contrast(150%) brightness(150%)', backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="text-center mb-20 reveal-on-scroll">
            <h2 className="text-5xl md:text-7xl font-display font-bold text-white mb-6 tracking-tight">
                THE <span className="text-zion-gold italic">REVELATION</span>
            </h2>
            <div className="h-px w-40 bg-white/20 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-start">
            
            {/* Left: The Evidence */}
            <div className="reveal-on-scroll order-2 md:order-1">
                 <div className="relative group">
                    <div className="absolute -inset-2 bg-gradient-to-r from-zion-gold to-transparent opacity-20 blur-lg group-hover:opacity-40 transition-opacity"></div>
                    <div className="relative border border-white/10 bg-black p-2">
                        <div className="absolute top-4 left-4 z-20 bg-red-600 text-white text-[10px] font-bold px-2 py-1 uppercase tracking-widest shadow-lg">
                           Top Secret
                        </div>
                        <img src={LORE_IMAGE_URL} alt="Goyim Lore" className="w-full h-auto object-cover grayscale contrast-125 hover:grayscale-0 transition-all duration-700" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60"></div>
                        
                        {/* Overlay text */}
                        <div className="absolute bottom-6 left-6 right-6">
                           <p className="font-mono text-xs text-zion-gold mb-1">EVIDENCE #8821</p>
                           <p className="font-display text-xl text-white">"The files were not meant to be seen."</p>
                        </div>
                    </div>
                 </div>
                 
                 <div className="mt-8 flex gap-4">
                    <div className="flex-1 bg-white/5 border border-white/10 p-6 backdrop-blur-sm hover:border-zion-gold/30 transition-colors">
                        <Lock className="w-6 h-6 text-zion-gold mb-3" />
                        <h4 className="font-bold text-white mb-1 uppercase tracking-wider text-sm">Leaked Data</h4>
                        <p className="text-xs text-stone-400 font-mono">Encrypted transmission intercepted from the island servers.</p>
                    </div>
                 </div>
            </div>

            {/* Right: The Narrative */}
            <div className="text-left order-1 md:order-2 space-y-10 reveal-on-scroll">
                
                <div className="relative pl-8 border-l border-zion-gold/30">
                    <Scroll className="absolute -left-3 top-0 text-zion-black bg-zion-gold p-1 w-6 h-6 rounded-full" />
                    
                    <h3 className="text-3xl font-display text-white mb-6">
                        The Word They Fear
                    </h3>
                    
                    <div className="space-y-6 text-lg text-stone-300 font-light leading-relaxed">
                        <p>
                            <strong className="text-white">Goyim ($GOYIM)</strong> emerged from the shadows on Feb 1. Not just a token, but a mirror held up to the elite.
                        </p>
                        
                        <p>
                           Deep within the leaked Epstein files, a recurring theme surfaced. The distinct separation between the "architects" and the "cattle." The term <span className="text-zion-gold font-serif italic">"goyim"</span> was reportedly used with disdain, a mockery of the masses.
                        </p>
                        
                        <blockquote className="bg-white/5 p-6 border-l-2 border-zion-gold my-6 font-display italic text-xl text-white">
                           "They let the goyim deal in the real world."
                        </blockquote>

                        <p>
                            We have taken that word back. We have turned their disdain into our strength. The nations have united on the immutable ledger of Solana.
                        </p>
                    </div>
                </div>

                <div className="flex items-center gap-6">
                    <div className="text-right">
                        <div className="text-3xl font-bold text-white font-display">FEB 01</div>
                        <div className="text-xs text-zion-gold uppercase tracking-widest">Inception Date</div>
                    </div>
                    <div className="h-12 w-px bg-white/10"></div>
                    <div>
                        <div className="text-3xl font-bold text-white font-display">SOLANA</div>
                        <div className="text-xs text-zion-gold uppercase tracking-widest">Network</div>
                    </div>
                </div>

            </div>
        </div>

      </div>
    </section>
  );
};

export default Lore;