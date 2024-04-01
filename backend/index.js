import path from "path";
import { dirname } from "path";
import express from "express";
import dotenv from "dotenv";
dotenv.config();
import mongoose from "mongoose";
const app = express();
const PORT = process.env.PORT || 5000;
import sales$profitsRouter from "./routes/sales&Profits.js";
import activityRouter from "./routes/activityAnalytics.js";

app.use("/api/v1/sales", sales$profitsRouter);
app.use("/api/v1/activities", activityRouter);
const __dirname = path.resolve();
app.use(express.static(path.join(__dirname, "/frontend/dist")));
app.get("*", (req, res) =>
  res.sendFile(path.resolve(__dirname, "frontend", "dist", "index.html"))
);
console.log(__dirname);
try {
  await mongoose.connect(process.env.MONGO_URL);
  console.log("db connected");
  app.listen(PORT, () => {
    console.log("server listening");
  });
} catch (error) {
  console.log(error);
  process.exit(1);
}
