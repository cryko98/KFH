import React, { useState } from 'react';
import { Sparkles, Dice5, Download, Share2, Loader2, Image as ImageIcon } from 'lucide-react';
import { generateKungFuMeme } from '../services/geminiService';
import { RANDOM_PROMPTS } from '../constants';

const MemeGenerator: React.FC = () => {
  const [prompt, setPrompt] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [generatedImage, setGeneratedImage] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleGenerate = async (customPrompt?: string) => {
    const promptToUse = customPrompt || prompt;
    if (!promptToUse.trim()) return;

    setIsLoading(true);
    setError(null);
    setGeneratedImage(null);

    try {
      const imageBase64 = await generateKungFuMeme(promptToUse);
      setGeneratedImage(imageBase64);
    } catch (err: any) {
      setError(err.message || "Failed to generate meme. The dojo is closed momentarily.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleRandom = () => {
    const randomIndex = Math.floor(Math.random() * RANDOM_PROMPTS.length);
    const randomPrompt = RANDOM_PROMPTS[randomIndex];
    setPrompt(randomPrompt);
    handleGenerate(randomPrompt);
  };

  return (
    <section id="generator" className="py-20 bg-dojo-paper relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4 text-dojo-ink">
            <span className="text-dojo-red">AI</span> DOJO GENERATOR
          </h2>
          <p className="text-dojo-charcoal text-lg">
            Create legendary Kung Fu memes using the official master as reference.
          </p>
        </div>

        <div className="bg-white border border-stone-200 rounded-2xl p-6 md:p-8 shadow-xl">
          <div className="flex flex-col gap-6">
            
            {/* Input Section */}
            <div className="flex flex-col md:flex-row gap-4">
              <input
                type="text"
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                placeholder="Ex: Hamster catching a fly with chopsticks..."
                className="flex-1 bg-stone-50 border border-stone-300 rounded-xl px-5 py-4 text-dojo-ink placeholder-stone-400 focus:outline-none focus:border-dojo-red focus:ring-1 focus:ring-dojo-red transition-all"
                disabled={isLoading}
              />
              <button
                onClick={() => handleGenerate()}
                disabled={isLoading || !prompt}
                className="bg-dojo-red hover:bg-red-700 disabled:opacity-50 disabled:cursor-not-allowed text-white px-8 py-4 rounded-xl font-bold transition-all flex items-center justify-center min-w-[140px] shadow-lg shadow-dojo-red/20"
              >
                {isLoading ? <Loader2 className="animate-spin w-5 h-5" /> : <><Sparkles className="w-5 h-5 mr-2" /> CREATE</>}
              </button>
            </div>

            <div className="flex justify-center">
               <button
                onClick={handleRandom}
                disabled={isLoading}
                className="text-stone-500 hover:text-hamster-orange text-sm font-semibold flex items-center gap-2 transition-colors"
              >
                <Dice5 className="w-4 h-4" />
                ROLL RANDOM KUNG FU SCENARIO
              </button>
            </div>

            {/* Error Message */}
            {error && (
              <div className="p-4 bg-red-50 border border-red-100 rounded-xl text-red-600 text-center">
                {error}
              </div>
            )}

            {/* Output Area */}
            <div className="aspect-square md:aspect-video w-full bg-stone-100 rounded-xl flex items-center justify-center overflow-hidden border-2 border-dashed border-stone-300 relative group">
              {isLoading ? (
                <div className="text-center">
                  <div className="w-16 h-16 border-4 border-dojo-red border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
                  <p className="text-stone-500 animate-pulse">Summoning Chi...</p>
                </div>
              ) : generatedImage ? (
                <div className="relative w-full h-full">
                  <img src={generatedImage} alt="Generated Meme" className="w-full h-full object-contain" />
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
                    <a 
                      href={generatedImage} 
                      download="kung-fu-hamster.png"
                      className="bg-white text-black p-3 rounded-full hover:scale-110 transition-transform"
                      title="Download"
                    >
                      <Download className="w-6 h-6" />
                    </a>
                  </div>
                </div>
              ) : (
                <div className="text-center text-stone-400">
                  <ImageIcon className="w-16 h-16 mx-auto mb-4 opacity-50" />
                  <p>Your masterpiece will appear here</p>
                </div>
              )}
            </div>
            
          </div>
        </div>
      </div>
    </section>
  );
};

export default MemeGenerator;