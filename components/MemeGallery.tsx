import React from 'react';
import { MEME_GALLERY_IMAGES } from '../constants';
import { Download, ExternalLink } from 'lucide-react';

const MemeGallery: React.FC = () => {
  return (
    <section id="gallery" className="py-20 bg-dojo-black relative">
       {/* Background accent */}
       <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-dojo-red/10 rounded-full blur-3xl"></div>
       <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-96 h-96 bg-hamster-orange/10 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
            THE <span className="text-dojo-red">HALL</span> OF FAME
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Witness the legendary feats of Master Hamster. Download these sacred texts (memes) and spread the word of the Dojo.
          </p>
        </div>

        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {MEME_GALLERY_IMAGES.map((imgUrl, index) => (
            <div key={index} className="break-inside-avoid relative group rounded-2xl overflow-hidden border border-dojo-gray bg-dojo-gray/30 shadow-lg hover:shadow-dojo-red/20 transition-all duration-300">
              <img 
                src={imgUrl} 
                alt={`Meme ${index + 1}`} 
                className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-between p-4">
                 <span className="text-white font-bold text-sm">#KFH MEME</span>
                 <a 
                   href={imgUrl} 
                   target="_blank"
                   rel="noopener noreferrer"
                   className="bg-white/20 hover:bg-white/40 backdrop-blur-md p-2 rounded-full text-white transition-colors"
                   title="View Full Size"
                 >
                   <ExternalLink className="w-5 h-5" />
                 </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MemeGallery;