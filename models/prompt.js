import { Schema, model, models } from "mongoose";

const PromptSchema = new Schema({
  prompt: {
    type: String,
    required: [true, "Prommpt is required"],
  },
  creator: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  tag: {
    type: String,
  },
});

const Prompt = models.Prompt || model("Prompt", PromptSchema);

export default Prompt;
