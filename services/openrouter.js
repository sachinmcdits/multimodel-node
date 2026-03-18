import axios from "axios";
import dotenv from "dotenv";

dotenv.config();

export async function askAI(prompt, model = "openai/gpt-4o-mini") {
  try {

    const response = await axios.post(
      "https://openrouter.ai/api/v1/chat/completions",
      {
        model: model,
        messages: [
          { role: "user", content: prompt }
        ]
      },
      {
        headers: {
          "Authorization": `Bearer ${process.env.OPENROUTER_API_KEY}`,
          "Content-Type": "application/json"
        }
      }
    );

    return response.data.choices[0].message.content;

  } catch (error) {
    console.error(error.response?.data || error.message);
    throw new Error("AI request failed");
  }
}
