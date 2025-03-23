import { Router } from "express";
import generateContent from "../controllers/generate_content.controller.js";
const route = Router();
route.post("/generate-content", generateContent);
export default route;
