import express from "express";
import mongoose from "mongoose";
import connectDB from "./config/dbConn.js";
import cors from "cors";
import dotenv from "dotenv";
import todoRoutes from "./routes/todoRoutes.js";

dotenv.config();

//connect database
connectDB();

const app = express();

//middlewares
app.use(express.json());
app.use(cors());

// routes
app.use("/api/v1/todo", todoRoutes);

app.use("*", (req, res) => {
  res.json({ message: "404 Not Found" });
});

const PORT = process.env.PORT || 3001;

mongoose.connection.once("open", () => {
  console.log("Connected to MongoDB");
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
});
