import generatePost_GEMINI from "../services/gemini-ai.js";
const generate_content = async (req, res) => {
    try {
        const data = req.body;
        const generatedPosts = await generatePost_GEMINI(data.topics, data.tone, data.postType);
        if (generatedPosts.status === "error") {
            throw new Error(generatedPosts.message);
        }
        res.status(200).send({ Message: "Posts generated successfully", data: generatedPosts });
    }
    catch (error) {
        console.log("Error in generate_content controller: ", error);
        res.status(500).send("Internal server error");
    }
};
export default generate_content;
