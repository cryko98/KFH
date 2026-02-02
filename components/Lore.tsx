import React from 'react';
import { LORE_IMAGE_URL } from '../constants';

const Lore: React.FC = () => {
  return (
    <section id="lore" className="py-20 bg-white border-t border-goyim-red/10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
                 <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-goyim-light">
                    <img src={LORE_IMAGE_URL} alt="Goyim Lore" className="w-full h-auto object-cover" />
                 </div>
            </div>

            <div className="text-left order-1 md:order-2">
                <span className="inline-block py-1 px-3 rounded-full bg-goyim-red/10 text-goyim-red text-sm font-bold mb-4 tracking-wider uppercase border border-goyim-red/20">
                    The Meaning
                </span>
                <h2 className="text-4xl md:text-5xl font-display font-bold mb-6 text-goyim-dark">
                    THE WORD OF <span className="text-goyim-red">NATIONS</span>
                </h2>
                <p className="text-lg md:text-xl text-stone-600 leading-relaxed mb-6">
                    <span className="font-bold text-goyim-dark">Goyim</span> is one of the most viral words right now—it’s blowing up like crazy on social media, with huge accounts posting about it.
                </p>
                <p className="text-lg md:text-xl text-stone-600 leading-relaxed mb-6">
                    It was reportedly one of Epstein’s favorite terms, and it was already a big meme even before the files were leaked.
                </p>
                <p className="text-lg md:text-xl text-stone-600 leading-relaxed p-6 bg-goyim-light rounded-xl border-l-4 border-goyim-red">
                    <span className="font-bold text-goyim-red">Goyim (גויים)</span> is a Hebrew word meaning “nations,” and in everyday usage it often refers to non-Jews.
                </p>
            </div>
        </div>

      </div>
    </section>
  );
};

export default Lore;