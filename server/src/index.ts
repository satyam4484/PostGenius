import express from "express";
import cors from "cors";
import appConfigs from "./configs.js";

import generateRoutes from "./routes/generate_content.route.js";

const { PORT } = appConfigs;


const app = express();
app.use(cors());
app.use(express.json());


app.use("/api", generateRoutes);





app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
