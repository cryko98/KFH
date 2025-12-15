import React, { useState } from 'react';
import { Menu, X, Zap } from 'lucide-react';
import { TOKEN_TICKER, HERO_IMAGE_URL, BUY_URL } from '../constants';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: 'About', href: '#about' },
    { label: 'Chart', href: '#chart' },
    { label: 'Generator', href: '#generator' },
    { label: 'Gallery', href: '#gallery' },
  ];

  return (
    <nav className="fixed w-full z-50 bg-dojo-cream/90 backdrop-blur-md border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center flex-shrink-0">
             <img 
               src={HERO_IMAGE_URL} 
               alt="Logo" 
               className="h-12 w-12 rounded-full border-2 border-dojo-red object-cover mr-3 shadow-sm"
             />
             <span className="text-2xl font-display font-bold text-dojo-ink tracking-wider">
               {TOKEN_TICKER}
             </span>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-dojo-charcoal hover:text-dojo-red px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 uppercase tracking-wide"
                >
                  {item.label}
                </a>
              ))}
              <a 
                href={BUY_URL} 
                target="_blank" 
                rel="noreferrer"
                className="bg-dojo-red hover:bg-red-700 text-white px-6 py-2 rounded-full font-bold transition-all transform hover:scale-105 flex items-center shadow-lg shadow-dojo-red/30"
              >
                <Zap className="w-4 h-4 mr-2" />
                BUY NOW
              </a>
            </div>
          </div>

          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-dojo-charcoal hover:text-dojo-red hover:bg-dojo-paper focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-dojo-cream border-t border-stone-200">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-dojo-charcoal hover:text-dojo-red block px-3 py-2 rounded-md text-base font-medium"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </a>
            ))}
             <a 
                href={BUY_URL} 
                target="_blank" 
                rel="noreferrer"
                className="w-full mt-4 bg-dojo-red text-center text-white block px-3 py-3 rounded-md font-bold shadow-md"
              >
                BUY $KFH
              </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;