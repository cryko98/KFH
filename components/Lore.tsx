import React, { useEffect } from 'react';

const Lore: React.FC = () => {
  // Ensure twitter widgets reload if navigating (useful in SPA, though just script in index.html covers most cases)
  useEffect(() => {
    // @ts-ignore
    if (window.twttr) {
      // @ts-ignore
      window.twttr.widgets.load();
    }
  }, []);

  return (
    <section id="lore" className="py-20 bg-dojo-paper border-t border-stone-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-12">
          <span className="inline-block py-1 px-3 rounded-full bg-hamster-orange/20 text-hamster-orange text-sm font-bold mb-4 tracking-wider uppercase border border-hamster-orange/30">
            The Origin Story
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6 text-dojo-ink">
            THE <span className="text-dojo-red">VIRAL</span> AWAKENING
          </h2>
          <p className="text-lg md:text-xl text-dojo-charcoal leading-relaxed mb-8">
            Legends aren't made overnight... except for <span className="font-bold text-dojo-ink">$KFH</span>. 
            It all began with a single post that shook the internet. 
            <br/><br/>
            In just <span className="text-dojo-red font-bold">24 hours</span>, the original Kung Fu Hamster image amassed over <span className="text-dojo-red font-bold">16 MILLION views</span>, 
            instantaneously cementing its status as a global phenomenon. The dojo doors opened, and the world rushed in.
          </p>
        </div>

        <div className="flex justify-center">
            <div className="w-full max-w-[550px] overflow-hidden rounded-xl shadow-[0_0_30px_rgba(217,56,30,0.15)] border border-stone-300 bg-white">
                <blockquote className="twitter-tweet" data-theme="light">
                    <a href="https://twitter.com/animalkyat/status/2000094283437916458"></a>
                </blockquote>
            </div>
        </div>

      </div>
    </section>
  );
};

export default Lore;