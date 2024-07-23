import { connectToDB } from "@utils/database";
import Prompt from "@models/prompt";

export const POST = async (req) => {
  try {
    const { prompt, userId, tag } = await req.json();

    await connectToDB();
    const promptData = {
      prompt,
      creator: userId,
      tag: tag,
    };

    const newPrompt = new Prompt(promptData);

    await newPrompt.save();

    return new Response(JSON.stringify(newPrompt), { status: 201 });
  } catch (error) {
    return new Response("Failed to create prompt", { status: 500 });
  }
};
