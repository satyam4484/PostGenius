import { config } from 'dotenv';

// Load environment variables from .env file
config();

console.log("INFO: Reading Environment Variables...");
const appConfigs = {
  OPEN_AI_API_KEY: process.env.OPEN_AI_API_KEY || '',
  GEMINI_AI_API_KEY: process.env.GEMINI_AI_API_KEY || ''
};

console.log("SUCCESS: Environment variables read successfully.");

export default appConfigs;