import React, { useState, useEffect } from 'react';
import { Menu, X, Star } from 'lucide-react';
import { TOKEN_TICKER, HERO_IMAGE_URL, BUY_URL } from '../constants';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Lore', href: '#lore' },
    { label: 'Generator', href: '#generator' },
    { label: 'About', href: '#about' },
    { label: 'Chart', href: '#chart' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-zion-black/80 backdrop-blur-xl border-b border-white/5 py-2' : 'bg-transparent py-4'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center flex-shrink-0 group cursor-pointer">
             <div className="relative">
               <img 
                 src={HERO_IMAGE_URL} 
                 alt="Logo" 
                 className="h-10 w-10 rounded-full border border-zion-gold/50 object-cover mr-3 relative z-10"
               />
             </div>
             <span className="text-xl font-display font-bold text-white tracking-widest uppercase group-hover:text-zion-gold transition-colors">
               {TOKEN_TICKER}
             </span>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-stone-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 uppercase tracking-widest hover:tracking-[0.2em]"
                >
                  {item.label}
                </a>
              ))}
              <a 
                href={BUY_URL} 
                target="_blank" 
                rel="noreferrer"
                className="bg-white text-zion-black hover:bg-zion-gold hover:text-black px-6 py-2 rounded-sm font-bold transition-all duration-300 transform hover:-translate-y-0.5 flex items-center shadow-[0_0_15px_rgba(255,255,255,0.2)] hover:shadow-[0_0_20px_rgba(212,175,55,0.4)]"
              >
                <Star className="w-3 h-3 mr-2 fill-current" />
                BUY NOW
              </a>
            </div>
          </div>

          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-zion-gold focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-zion-black border-t border-white/10 absolute w-full">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-white hover:text-zion-gold block px-3 py-2 text-base font-medium tracking-widest"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </a>
            ))}
             <a 
                href={BUY_URL} 
                target="_blank" 
                rel="noreferrer"
                className="w-full mt-4 bg-white text-zion-black text-center block px-3 py-3 font-bold tracking-widest hover:bg-zion-gold transition-colors"
              >
                BUY NOW
              </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;