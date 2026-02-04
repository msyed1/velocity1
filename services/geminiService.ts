
import { GoogleGenAI, Type } from "@google/genai";
import { ProductRoadmap } from "../types";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });

export const generateProductRoadmap = async (idea: string): Promise<ProductRoadmap> => {
  const prompt = `Act as a senior product strategist at a world-class startup studio. 
    A founder has come to you with this idea: "${idea}".
    Create a detailed high-level product roadmap for their MVP.
    The response must be in JSON format and follow the defined schema.
    Be creative, technical, and realistic.`;

  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-pro-preview",
      contents: prompt,
      config: {
        thinkingConfig: { thinkingBudget: 16000 },
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            title: { type: Type.STRING },
            vision: { type: Type.STRING },
            mvpFeatures: {
              type: Type.ARRAY,
              items: { type: Type.STRING }
            },
            techStack: {
              type: Type.ARRAY,
              items: { type: Type.STRING }
            },
            timeline: { type: Type.STRING },
            monetization: { type: Type.STRING }
          },
          required: ["title", "vision", "mvpFeatures", "techStack", "timeline", "monetization"],
        },
      },
    });

    const text = response.text || "{}";
    return JSON.parse(text) as ProductRoadmap;
  } catch (error) {
    console.error("Error generating roadmap:", error);
    throw new Error("Failed to generate your product strategy. Please try again.");
  }
};
