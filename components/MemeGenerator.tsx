import React, { useState } from 'react';
import { Sparkles, Dice5, Loader2, Image as ImageIcon, Zap } from 'lucide-react';
import { generateGoyimMeme } from '../services/geminiService';
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
      const imageBase64 = await generateGoyimMeme(promptToUse);
      setGeneratedImage(imageBase64);
    } catch (err: any) {
      setError(err.message || "Failed to generate meme. Try again later.");
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
    <section id="generator" className="py-24 bg-zion-black relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="text-center mb-16 reveal-on-scroll">
          <div className="inline-block px-4 py-1 border border-zion-gold/30 rounded-full mb-4">
             <span className="text-xs font-mono text-zion-gold uppercase tracking-[0.3em]">AI Powered Engine</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-display font-bold mb-4 text-white">
            <span className="text-zion-gold">GOYIM</span> CREATION SUITE
          </h2>
          <p className="text-stone-400 text-lg font-light max-w-2xl mx-auto">
             Harness the power of the protocol. Generate propaganda for the nations.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-8">
          
          {/* Controls - 2 cols */}
          <div className="lg:col-span-2 space-y-6 reveal-on-scroll">
             <div className="bg-zion-charcoal border border-white/5 p-8 h-full flex flex-col justify-between group hover:border-zion-gold/20 transition-colors duration-500">
                
                <div className="space-y-6">
                   <label className="text-sm font-bold text-white uppercase tracking-widest flex items-center gap-2">
                     <Zap className="w-4 h-4 text-zion-gold" />
                     Prompt Input
                   </label>
                   
                   <textarea
                    value={prompt}
                    onChange={(e) => setPrompt(e.target.value)}
                    placeholder="Describe your vision... (e.g., Goyim trading on Wall Street)"
                    className="w-full h-40 bg-black border border-white/10 p-4 text-white placeholder-stone-600 focus:outline-none focus:border-zion-gold transition-colors font-mono text-sm resize-none"
                    disabled={isLoading}
                  />

                  <button
                    onClick={() => handleGenerate()}
                    disabled={isLoading || !prompt}
                    className="w-full bg-stone-200 text-black h-14 font-bold tracking-widest uppercase hover:bg-zion-gold transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3 group/btn"
                  >
                    {isLoading ? <Loader2 className="animate-spin w-5 h-5" /> : (
                      <>
                        <Sparkles className="w-5 h-5 group-hover/btn:animate-spin" /> 
                        Generate Artifact
                      </>
                    )}
                  </button>

                  <div className="flex items-center justify-between pt-4 border-t border-white/5">
                      <span className="text-xs text-stone-500 font-mono">MODELS: GEMINI 2.5 FLASH</span>
                      <button
                        onClick={handleRandom}
                        disabled={isLoading}
                        className="text-xs font-bold text-stone-400 hover:text-white flex items-center gap-2 uppercase tracking-wider transition-colors"
                      >
                        <Dice5 className="w-4 h-4" />
                        RANDOMIZE
                      </button>
                  </div>
                </div>

                {error && (
                  <div className="mt-4 p-3 bg-red-900/20 border border-red-900/50 text-red-400 text-xs font-mono">
                    ERROR: {error}
                  </div>
                )}
             </div>
          </div>

          {/* Output - 3 cols */}
          <div className="lg:col-span-3 reveal-on-scroll delay-100">
             <div className="bg-black border border-white/10 h-[500px] w-full flex items-center justify-center relative overflow-hidden group">
                <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'linear-gradient(#333 1px, transparent 1px), linear-gradient(90deg, #333 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
                
                {isLoading ? (
                  <div className="text-center z-10">
                    <div className="relative w-24 h-24 mx-auto mb-6">
                       <div className="absolute inset-0 border-t-2 border-zion-gold rounded-full animate-spin"></div>
                       <div className="absolute inset-2 border-r-2 border-white rounded-full animate-spin reverse"></div>
                    </div>
                    <p className="text-zion-gold font-mono text-sm animate-pulse">PROCESSING NEURAL NETWORK...</p>
                  </div>
                ) : generatedImage ? (
                  <div className="relative w-full h-full p-4">
                    <div className="w-full h-full border border-white/5 relative bg-white/5">
                      <img src={generatedImage} alt="Generated Meme" className="w-full h-full object-contain" />
                      <div className="absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center gap-4 backdrop-blur-sm">
                        <span className="text-zion-gold font-mono text-xs tracking-widest mb-2">GENERATION COMPLETE</span>
                        <a 
                          href={generatedImage} 
                          download="goyim-artifact.png"
                          className="bg-white text-black px-8 py-3 font-bold uppercase tracking-wider hover:bg-zion-gold transition-colors"
                        >
                          Download Artifact
                        </a>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="text-center text-stone-600 z-10">
                    <ImageIcon className="w-16 h-16 mx-auto mb-4 opacity-20" />
                    <p className="font-mono text-xs tracking-widest uppercase">System Ready // Awaiting Input</p>
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