import { GoogleGenAI } from "@google/genai";
import { HERO_IMAGE_URL } from "../constants";

// Helper to convert image URL to Base64
const imageUrlToBase64 = async (url: string): Promise<string> => {
  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error('Failed to fetch reference image');
    const blob = await response.blob();
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onloadend = () => {
        const base64String = reader.result as string;
        // Remove the data URL prefix (e.g., "data:image/png;base64,")
        const base64Data = base64String.split(',')[1];
        resolve(base64Data);
      };
      reader.onerror = reject;
      reader.readAsDataURL(blob);
    });
  } catch (error) {
    console.warn("CORS or Fetch error for reference image, using pure text description fallback.", error);
    return "";
  }
};

export const generateKungFuMeme = async (prompt: string): Promise<string> => {
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  
  // Use the latest standard model for image tasks
  const model = 'gemini-2.5-flash-image';

  // Try to get the reference image
  const referenceImageBase64 = await imageUrlToBase64(HERO_IMAGE_URL);

  try {
    let contents;

    // If we successfully got the base64, we use image-to-image generation/editing
    if (referenceImageBase64) {
      contents = {
        parts: [
          {
            inlineData: {
              mimeType: 'image/png',
              data: referenceImageBase64
            }
          },
          {
            text: `Generate a photorealistic, lifelike image based on this reference character. 
            The character is a real hamster (not a cartoon) in a dynamic Kung Fu action pose.
            
            Action/Scene: ${prompt}.
            
            Guidelines:
            - Style: Photorealistic, Cinematic Lighting, High Detail, 8k, Action Shot.
            - Character: Must look like the reference hamster but lifelike.
            - Atmosphere: Intense, Epic, Kung Fu Movie aesthetic.
            - Composition: Centered, dynamic angles.`
          }
        ]
      };
    } else {
      // Fallback: Text-to-Image using the same model if CORS blocks the reference image fetch
      contents = {
        parts: [
          {
            text: `Generate a photorealistic image.
            Subject: A photorealistic, lifelike Kung Fu Hamster with fluffy golden-brown fur and an orange headband.
            Action: ${prompt}. 
            Style: Cinematic, 8k, National Geographic meet Kung Fu Panda, realistic textures, dramatic lighting.`
          }
        ]
      };
    }

    const response = await ai.models.generateContent({
      model: model,
      contents: contents
    });

    // Extract image from response (iterating through parts to find inlineData)
    const parts = response.candidates?.[0]?.content?.parts;
    if (parts) {
      for (const part of parts) {
         if (part.inlineData && part.inlineData.data) {
           return `data:image/png;base64,${part.inlineData.data}`;
         }
      }
    }
    
    throw new Error("No image generated from the model.");

  } catch (error: any) {
    console.error("Gemini Generation Error:", error);
    throw new Error(error.message || "Failed to generate meme.");
  }
};