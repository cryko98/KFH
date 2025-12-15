import React from 'react';
import { TOKEN_NAME, SOCIAL_LINKS } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-dojo-paper border-t border-stone-200 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center">
        
        <div className="mb-6 md:mb-0 text-center md:text-left">
          <h3 className="text-2xl font-display font-bold text-dojo-ink mb-2">{TOKEN_NAME}</h3>
          <p className="text-stone-500 text-sm">© {new Date().getFullYear()} All rights reserved in the Dojo.</p>
        </div>

        <div className="flex space-x-6">
           <a 
             href={SOCIAL_LINKS.twitter} 
             target="_blank" 
             rel="noopener noreferrer"
             className="text-stone-500 hover:text-dojo-red transition-colors"
             aria-label="X (formerly Twitter)"
           >
             {/* X Logo SVG */}
             <svg viewBox="0 0 24 24" aria-hidden="true" className="w-6 h-6 fill-current">
               <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
             </svg>
           </a>
        </div>

      </div>
    </footer>
  );
};

export default Footer;