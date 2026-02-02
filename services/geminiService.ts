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
     // Fail silently regarding the key to avoid crashing UI, but specific error will be thrown below
  }

  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });
  const model = 'gemini-2.5-flash-image';

  // Sanitize prompt slightly, but keep it direct
  const cleanPrompt = prompt.replace(/\s+/g, " ").trim();

  // Fetch reference image
  const referenceImageBase64 = await imageUrlToBase64(GENERATOR_REF_URL);

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

  // STRATEGY: 
  // 1. Try Image-to-Image with explicit instruction to keep the character + allow colored props.
  // 2. If that fails (refusal/error), try a slightly looser Image-to-Image.
  // 3. Last resort: Text-to-Image description of the specific character.

  if (referenceImageBase64) {
    try {
      // Primary Attempt: Strict Image Editing
      const response = await ai.models.generateContent({
        model: model,
        contents: {
          parts: [
            {
              inlineData: {
                mimeType: 'image/jpeg', // The new ref is a JPG
                data: referenceImageBase64
              }
            },
            {
              text: `Edit this image.
              
              INSTRUCTION: Keep the character (face, hands, body, pose, and drawing style) EXACTLY as it is in the reference. Do not change the character's identity.
              
              ACTION: Put the character in this outfit/situation: "${cleanPrompt}".
              
              STYLE GUIDE: 
              1. The character must remain a black and white sketch/drawing.
              2. The NEW clothing, accessories, or background CAN BE COLORED / VIBRANT.
              3. Do not change the facial expression unless the prompt asks for it.`
            }
          ]
        }
      });
      
      const img = extractImage(response);
      if (img) return img;
      
    } catch (e) {
      console.warn("Primary generation attempt failed. Retrying with backup strategy...", e);
    }
  }

  // Backup Attempt (Text-to-Image Fallback)
  // Designed to replicate the character if the image reference fails (e.g., safety block)
  try {
      const response = await ai.models.generateContent({
        model: model,
        contents: {
          parts: [
            {
              text: `Create a high-quality 2D cartoon/caricature image.
              
              SUBJECT: A funny merchant character with a beard, rubbing hands together, looking scheming but happy. Black and white sketch style for the skin/face.
              
              OUTFIT/ACTION: ${cleanPrompt}. 
              
              DETAILS: The clothing and accessories should be colorful and distinct, contrasting with the sketch style of the character.`
            }
          ]
        }
      });

      const img = extractImage(response);
      if (img) return img;

  } catch (e) {
      console.error("Fallback generation failed:", e);
      // We do not throw here if we can avoid it, but if both fail, we must.
  }

  throw new Error("System busy. Please try again."); 
};