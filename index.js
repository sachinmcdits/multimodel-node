import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import chatRoute from "./routes/chat.js";

dotenv.config();

const app = express();

app.use(cors({
  origin: "http://localhost:5173", // your React app
  methods: ["GET", "POST"],
  credentials: true
}));
app.use(express.json());

app.use("/api/chat", chatRoute);

app.get("/", (req, res) => {
  res.send("AI SaaS running");
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
