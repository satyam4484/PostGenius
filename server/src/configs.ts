import dotenv from "dotenv";
dotenv.config();

console.log("INFO: Reading Environment Variables...");
const appConfigs = {
    PORT: process.env.PORT,
    OPEN_AI_API_KEY: process.env.OPEN_AI_API_KEY || '',
    GEMINI_AI_API_KEY: process.env.GEMINI_AI_API_KEY || ''
};

console.log("SUCESS: Environment variables read successfully.")


export default appConfigs;