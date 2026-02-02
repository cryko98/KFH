import { GoogleGenAI } from "@google/genai";
import { GENERATOR_REF_URL } from "../constants";

// Helper to convert image URL to Base64
const imageUrlToBase64 = async (url: string): Promise<string | null> => {
  try {
    const response = await fetch(url, { mode: 'cors', credentials: 'omit' });
    if (!response.ok) return null;
    
    const blob = await response.blob();
    return new Promise((resolve) => {
      const reader = new FileReader();
      reader.onloadend = () => {
        const base64String = reader.result as string;
        resolve(base64String.includes(',') ? base64String.split(',')[1] : base64String);
      };
      reader.onerror = () => resolve(null);
      reader.readAsDataURL(blob);
    });
  } catch (error) {
    console.warn("Error fetching reference image:", error);
    return null;
  }
};

export const generateGoyimMeme = async (prompt: string): Promise<string> => {
  if (!process.env.API_KEY) {
     console.error("API Key missing");
  }

  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });
  const model = 'gemini-2.5-flash-image';

  // Sanitize prompt
  const cleanPrompt = prompt.replace(/\s+/g, " ").trim();

  // Fetch reference image
  const referenceImageBase64 = await imageUrlToBase64(GENERATOR_REF_URL);

  if (!referenceImageBase64) {
    throw new Error("Failed to load reference image system.");
  }

  // Helper function to parse response
  const extractImage = (response: any): string | null => {
      const parts = response.candidates?.[0]?.content?.parts;
      if (parts) {
        for (const part of parts) {
           if (part.inlineData && part.inlineData.data) {
             return `data:image/png;base64,${part.inlineData.data}`;
           }
        }
      }
      return null;
  };

  try {
    // Strict Image Editing / Inpainting instruction
    const response = await ai.models.generateContent({
      model: model,
      contents: {
        parts: [
          {
            inlineData: {
              mimeType: 'image/jpeg',
              data: referenceImageBase64
            }
          },
          {
            text: `Object: This specific character (black and white sketch).
            Task: Add the following accessories/clothing to the character: "${cleanPrompt}".
            
            STRICT CONSTRAINTS:
            1. DO NOT redraw the character. The face, hands, body, and pose MUST remain exactly identical to the reference image.
            2. The character MUST remain a black and white sketch.
            3. The NEW items (accessories, clothes, background elements) CAN be colorful.
            4. Do not change the aspect ratio or the framing.
            5. Simply overlay the requested items onto the existing character naturally.`
          }
        ]
      }
    });
    
    const img = extractImage(response);
    if (img) return img;
    
  } catch (e) {
    console.error("Generation failed:", e);
    // If generation fails, we throw an error rather than generating a random image, 
    // ensuring consistency with the strict character requirement.
    throw new Error("Neural network busy. Please try again.");
  }

  throw new Error("Generation produced no output. Try a different prompt."); 
};