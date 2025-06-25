import express from "express"
import {connectDB}  from "./config/db.js";
import notesRoutes from "./routes/notesRoutes.js";
import dotenv from "dotenv";
import rateLimiter from "./middleware/rateLimiter.js";
import cors from "cors";

dotenv.config();





const app = express()
const PORT = process.env.PORT || 5001;
app.use(cors({
  origin:"http://localhost:5173", // Allow requests from the frontend
}));
app.use(express.json()); // Middleware to parse JSON request bodies
app.use(rateLimiter); // Apply rate limiting middleware



app.use("/api/notes", notesRoutes);


connectDB().then(() => {
  app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
  });
});

