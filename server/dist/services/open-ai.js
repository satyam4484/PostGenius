import OpenAI from "openai";
import appConfigs from "../configs.js";
const openai = new OpenAI({ apiKey: appConfigs.OPEN_AI_API_KEY });
const generatePost = async (topic, tone, postType) => {
    try {
        const response = await openai.chat.completions.create({
            model: "gpt-4o",
            messages: [{ role: "user", content: `Write a ${tone} LinkedIn post about ${topic} with type of post ${postType}` }],
        });
        return response.choices[0]?.message?.content;
    }
    catch (error) {
        console.log("Error in getting response from OpenAI", error);
        return null;
    }
};
export default generatePost;
