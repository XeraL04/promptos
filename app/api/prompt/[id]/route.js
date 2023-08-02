import Prompt from "@models/prompt";
import { connectToDB } from "@utils/database";

// GET
export const GET = async (request,{params}) => {
    try {
        await connectToDB();
        const prompt = await Prompt.findById(params.id).populate('creator');
        
        if (!prompt) return new Response ("prompt not found",{status:404,message: "It's in the get prompt 404"});

        return new Response(JSON.stringify(prompt),{status: 200});
    } catch (error) {
        return new Response("Faild to fetch a prompt",{status: 500 ,message: "It's in the get prompt 500"});    
    }
}

// PATCH

export const PATCH = async (request,{params}) => {
    const {prompt, tag} = await request.json()

    try {
        await connectToDB();

        const existingPrompt = await Prompt.findById(params.id)

        if(!existingPrompt) return new Response("Prompt not found", {status:404,message: "It's in the patch route 404"})

        existingPrompt.prompt = prompt;
        existingPrompt.tag = tag;

        await existingPrompt.save();

        return new Response(JSON.stringify(existingPrompt),{status:200})
    } catch (error) {
        return new Response("Faild to update prompt",{status:500,message: "it's in the patch route 500"})
    }
}

// DELETE

export const DELETE = async (request, { params }) => {
    try {
        await connectToDB();

        // Find the prompt by ID and remove it
        await Prompt.findByIdAndRemove(params.id);

        return new Response("Prompt deleted successfully", { status: 200 });
    } catch (error) {
        return new Response("Error deleting prompt", { status: 500 });
    }
};