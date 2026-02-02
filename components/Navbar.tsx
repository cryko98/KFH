import React, { useState } from 'react';
import { Menu, X, Star } from 'lucide-react';
import { TOKEN_TICKER, HERO_IMAGE_URL, BUY_URL } from '../constants';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: 'Lore', href: '#lore' },
    { label: 'Generator', href: '#generator' },
    { label: 'About', href: '#about' },
    { label: 'Chart', href: '#chart' },
  ];

  return (
    <nav className="fixed w-full z-50 bg-white/95 backdrop-blur-md border-b border-goyim-red/20 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center flex-shrink-0">
             <img 
               src={HERO_IMAGE_URL} 
               alt="Logo" 
               className="h-12 w-12 rounded-full border-2 border-goyim-red object-cover mr-3 shadow-md"
             />
             <span className="text-2xl font-display font-bold text-goyim-red tracking-wider uppercase">
               {TOKEN_TICKER}
             </span>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-goyim-dark hover:text-goyim-red px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 uppercase tracking-wide"
                >
                  {item.label}
                </a>
              ))}
              <a 
                href={BUY_URL} 
                target="_blank" 
                rel="noreferrer"
                className="bg-goyim-red hover:bg-goyim-dark text-white px-6 py-2 rounded-full font-bold transition-all transform hover:scale-105 flex items-center shadow-lg shadow-goyim-red/30"
              >
                <Star className="w-4 h-4 mr-2 fill-white" />
                BUY NOW
              </a>
            </div>
          </div>

          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-goyim-dark hover:text-goyim-red hover:bg-goyim-light focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white border-t border-goyim-red/20">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-goyim-dark hover:text-goyim-red block px-3 py-2 rounded-md text-base font-medium"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </a>
            ))}
             <a 
                href={BUY_URL} 
                target="_blank" 
                rel="noreferrer"
                className="w-full mt-4 bg-goyim-red text-center text-white block px-3 py-3 rounded-md font-bold shadow-md"
              >
                BUY {TOKEN_TICKER}
              </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;