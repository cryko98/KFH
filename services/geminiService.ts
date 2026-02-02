import { GoogleGenAI } from "@google/genai";
import { GENERATOR_REF_URL } from "../constants";

// Helper to convert image URL to Base64
// Handles CORS by resolving to null if the fetch fails, allowing the main function to fallback
const imageUrlToBase64 = async (url: string): Promise<string | null> => {
  try {
    // Attempt to fetch with CORS mode enabled
    const response = await fetch(url, { mode: 'cors', credentials: 'omit' });
    
    if (!response.ok) {
      console.warn('Failed to fetch reference image:', response.statusText);
      return null;
    }
    
    const blob = await response.blob();
    return new Promise((resolve) => {
      const reader = new FileReader();
      reader.onloadend = () => {
        const base64String = reader.result as string;
        // Remove the data URL prefix if present
        if (base64String.includes(',')) {
           resolve(base64String.split(',')[1]);
        } else {
           resolve(base64String);
        }
      };
      reader.onerror = () => {
        console.warn('Failed to read blob as base64');
        resolve(null);
      };
      reader.readAsDataURL(blob);
    });
  } catch (error) {
    // This catches CORS errors (TypeError: Failed to fetch)
    console.warn("CORS or Network error fetching reference image. Falling back to text description.", error);
    return null;
  }
};

export const generateKungFuMeme = async (prompt: string): Promise<string> => {
  // Check for API key existence
  if (!process.env.API_KEY) {
     throw new Error("API Key is missing.");
  }

  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  const model = 'gemini-2.5-flash-image';

  try {
    // 1. Attempt to fetch the reference image
    const referenceImageBase64 = await imageUrlToBase64(GENERATOR_REF_URL);
    let contents;

    // 2. Build contents based on whether we successfully got the image
    if (referenceImageBase64) {
      // IMAGE-TO-IMAGE MODE
      contents = {
        parts: [
          {
            inlineData: {
              mimeType: 'image/png', // Assuming PNG based on URL, but generic is fine usually
              data: referenceImageBase64
            }
          },
          {
            text: `Generate a new image based on this reference character.
            The character is a stylised, meme-like chubby hamster/creature (The 'Goyim' mascot).
            
            Action/Scene: ${prompt}.
            
            Guidelines:
            - Style: High quality digital art or meme style, retaining the likeness of the reference character.
            - Character: Must resemble the reference character provided (fur color, shape, facial features).
            - Atmosphere: Funny, crypto-native, viral.
            - Composition: Clear subject.`
          }
        ]
      };
    } else {
      // TEXT-ONLY FALLBACK MODE (Handles CORS/Fetch failures)
      contents = {
        parts: [
          {
            text: `Generate a high-quality meme image.
            
            Character Description: A cute, chubby, heroic hamster character (The 'Goyim' mascot), looking very similar to "Moodeng" or a Pygmy Hippo style hamster. It has smooth skin/fur, round body, and expressive face.
            
            Scene/Action: ${prompt}
            
            Style: Viral internet meme, cinematic lighting, vibrant colors, golden accents, highly detailed.`
          }
        ]
      };
    }

    const response = await ai.models.generateContent({
      model: model,
      contents: contents
    });

    const parts = response.candidates?.[0]?.content?.parts;
    if (parts) {
      for (const part of parts) {
         if (part.inlineData && part.inlineData.data) {
           return `data:image/png;base64,${part.inlineData.data}`;
         }
      }
    }
    
    throw new Error("The model generated text instead of an image. Please try refining your prompt.");

  } catch (error: any) {
    console.error("Gemini Generation Error:", error);
    if (error.message?.includes('429')) {
      throw new Error("Too many requests. Please wait a moment and try again.");
    }
    throw new Error(error.message || "Failed to generate meme.");
  }
};