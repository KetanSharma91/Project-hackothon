import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./db.js";
import job from "./routes/cron.js";

import roadmapRoute from "./routes/roadmapRoute.js"

dotenv.config();
// cmd to run the server npm run dev 
// download nodemon

const app = express();

app.use(cors());
app.use(express.json());

if (process.env.NODE_ENV === "production") job.start();

app.get("/api/health", (req, res) => {
  res.status(200).json({ status: "Ok" });
  console.log("working", process.env.NODE_ENV);
});

app.use("/api", roadmapRoute);

connectDB().then(() => {
  app.listen(5000, () => {
    console.log(`Server is up and running on PORT: 5000`);
  });
}).catch((err) => {
  console.error("Database connection failed:", err);
});