import express from "express";
import dotenv from "dotenv";
import connectDb from "./config/connectDB.js";
import cookieParser from "cookie-parser";
import authRouter from "./route/authRoute.js";

dotenv.config();

const port = process.env.PORT || 5000;

const app = express();

// Middleware
app.use(express.json());
app.use(cookieParser());

// Routes
app.use("/api/auth", authRouter);

// Home Route
app.get("/", (req, res) => {
  res.send("Server Working ✅");
});

// Server Start
app.listen(port, async () => {
  console.log("🚀 Server started on port", port);
  await connectDb();
});