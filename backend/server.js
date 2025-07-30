import express from "express";
import dotenv from "dotenv";

import authRoutes from "./routes/auth.route.js";
import connectToMongo from "./db/connectToMongo.js";

dotenv.config();

const app = express();

const PORT = process.env.PORT || 3000;

app.use("/api/auth", authRoutes);

app.listen(PORT, () => {
  connectToMongo();
  console.log(`Server is running on port ${PORT}`);
});
