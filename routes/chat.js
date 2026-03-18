import express from "express";
import { askAI } from "../services/openrouter.js";

const router = express.Router();

const modelsArr = ["openai/gpt-4o-mini", "anthropic/claude-3-haiku", "google/gemini-pro", "deepseek/deepseek-chat", "mistralai/mistral-7b-instruct"];

router.post("/", async (req, res) => {

  const { prompt, model } = req.body;

  if (!prompt) {
    return res.status(400).json({ error: "Prompt required" });
  }

  try {

    const answer = await askAI(prompt, model);

    res.json({
      success: true,
      response: answer
    });

  } catch (err) {
    res.status(500).json({
      error: "AI failed"
    });

  }

});

export default router;
