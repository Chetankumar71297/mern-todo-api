import express, { Express, Request, Response } from "express";
import mongoose, { Connection } from "mongoose";
import connectDB from "./config/dbConn.js";
import cors from "cors";
import dotenv from "dotenv";
import todoRoutes from "./routes/todoRoutes.js";
import corsOptions from "./config/corsOptions.js";

dotenv.config();

//connect database
connectDB();

const app: Express = express();

//middlewares
app.use(express.json());
app.use(cors(corsOptions));

// routes
app.use("/api/v1/todo", todoRoutes);

app.use("*", (req: Request, res: Response) => {
  res.json({ message: "404 Not Found" });
});

const PORT: string | number = process.env.PORT || 3001;

mongoose.connection.once("open", () => {
  console.log("Connected to MongoDB");
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
});
