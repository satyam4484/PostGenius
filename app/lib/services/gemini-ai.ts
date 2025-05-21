import { GoogleGenerativeAI } from "@google/generative-ai";
import appConfigs from "../configs";

const genAI = new GoogleGenerativeAI(appConfigs.GEMINI_AI_API_KEY);

const parseGeminiResponse = (response: string): any => {
    return response.split("---Separater---").map(post => ({
        content: post.trim()
    }));
};

const generatePost_GEMINI = async (topic: string, tone: string, postType: string) => {
    try {
        const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });
        const prompt = `
            Generate 3 engaging LinkedIn posts in a ${tone} tone about: ${topic}  
            Post type: ${postType}  

            🔹 Each post should:  
            - Offer a unique perspective, storytelling approach, or style.  
            - Maintain engagement with a conversational and impactful tone.  
            - Do not use **.  

            ✍️ Directly start each post and separate them using:  
            ---Separater---  

            Make the posts engaging, structured, and easy to read with proper use of colons, dashes, and line breaks.  
            Include relevant emojis where appropriate to enhance readability and expression.  
            `;

        const result = await model.generateContent(prompt);
        const response = await result.response;
        const responseText = response.text();
        return {
            status: "success",
            data: parseGeminiResponse(responseText)
        }
    } catch (error) {
        console.error("Gemini API Error:", error);
        return {
            status: "error",
            message: "Internal server error"
        }
    }
};

export default generatePost_GEMINI;