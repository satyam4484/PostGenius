import { Router } from "express";
import generateContent from "../controllers/controller.js";
const route = Router();
route.post("/generate-content", generateContent);
export default route;
