import React from 'react';
import { TOKEN_NAME, SOCIAL_LINKS } from '../constants';
import { Mail } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black border-t border-white/10 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          
          <div className="text-center md:text-left">
            <h3 className="text-3xl font-display font-bold text-white mb-2">{TOKEN_NAME}</h3>
            <p className="text-stone-500 text-xs uppercase tracking-widest mb-4">© {new Date().getFullYear()} The Nations Protocol.</p>
            <a href="mailto:Goyimonsolana@gmail.com" className="text-stone-400 hover:text-zion-gold text-sm transition-colors flex items-center justify-center md:justify-start gap-2 font-mono">
              <Mail className="w-4 h-4" />
              Goyimonsolana@gmail.com
            </a>
          </div>

          <div className="flex gap-6">
             <a 
               href={SOCIAL_LINKS.twitter} 
               target="_blank" 
               rel="noopener noreferrer"
               className="group border border-white/10 p-4 hover:bg-white hover:text-black transition-all duration-300"
               aria-label="X (formerly Twitter)"
             >
               <svg viewBox="0 0 24 24" aria-hidden="true" className="w-5 h-5 fill-stone-400 group-hover:fill-black transition-colors">
                 <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
               </svg>
             </a>
             <a 
               href={SOCIAL_LINKS.dexscreener} 
               target="_blank" 
               rel="noopener noreferrer"
               className="group border border-white/10 p-4 hover:bg-zion-gold hover:text-black transition-all duration-300"
               aria-label="DexScreener"
             >
                <span className="font-bold text-stone-400 group-hover:text-black text-xs font-mono">DEX</span>
             </a>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;