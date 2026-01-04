
import { GoogleGenAI } from "@google/genai";

const API_KEY = process.env.API_KEY || '';

export const getLogisticsAdvice = async (userMessage: string) => {
  if (!API_KEY) return "The North Pole systems are currently offline. Please try again later.";

  const ai = new GoogleGenAI({ apiKey: API_KEY });
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: userMessage,
      config: {
        systemInstruction: "You are the Executive Logistics AI for Santa Claus. You assist corporate partners and curious minds in understanding how the North Pole manages 1000+ years of global distribution, toy engineering, and high-speed aviation. Your tone is professional, sophisticated, and slightly magical. Use corporate-speak like 'optimizing joy-delivery pipelines' and 'leveraging chimney-entry efficiency.' Keep responses concise but authoritative.",
        temperature: 0.7,
      },
    });

    return response.text;
  } catch (error) {
    console.error("Gemini Error:", error);
    return "An error occurred while consulting our logistics database. We're dispatching an elf to fix it.";
  }
};

export const generateSantaHero = async () => {
  const ai = new GoogleGenAI({ apiKey: API_KEY });
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash-image',
      contents: {
        parts: [
          {
            text: 'A high-end cinematic professional portrait of Santa Claus as a sophisticated CEO with a well-groomed white beard, wearing a deep crimson velvet suit with gold trim, looking at a glowing holographic 3D world map in a dark modern luxury wood workshop. Midnight forest green atmosphere, warm champagne gold lighting, 8k resolution, ultra-detailed.',
          },
        ],
      },
    });

    for (const part of response.candidates[0].content.parts) {
      if (part.inlineData) {
        return `data:image/png;base64,${part.inlineData.data}`;
      }
    }
    return 'https://picsum.photos/1200/800?grayscale'; // Fallback
  } catch (error) {
    console.error("Image Generation Error:", error);
    return 'https://picsum.photos/1200/800?grayscale';
  }
};
