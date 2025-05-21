import { NextRequest, NextResponse } from 'next/server';
import generatePost_GEMINI from '@/app/lib/services/gemini-ai';
// import generatePost from '@/app/lib/services/open-ai'; // Uncomment if you want to use OpenAI

export async function POST(request: NextRequest) {
    try {
        const data = await request.json();
        const { topics, tone, postType } = data;

        if (!topics || !tone || !postType) {
            return NextResponse.json(
                { error: 'Missing required fields' },
                { status: 400 }
            );
        }

        const generatedPosts = await generatePost_GEMINI(topics, tone, postType);
        
        if (generatedPosts.status === "error") {
            throw new Error(generatedPosts.message);
        }
        
        return NextResponse.json({
            message: "Posts generated successfully",
            data: generatedPosts
        });
    } catch (error) {
        console.error("Error in generate_content API route:", error);
        return NextResponse.json(
            { error: "Internal server error" },
            { status: 500 }
        );
    }
}