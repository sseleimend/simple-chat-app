import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import path from "path";

import authRoutes from "./routes/auth.route.js";
import messageRoutes from "./routes/message.route.js";
import userRoutes from "./routes/user.route.js";
import connectToMongo from "./db/connectToMongo.js";
import { app, server } from "./socket/socket.js";

dotenv.config();

const __dirname = path.resolve();

const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(cookieParser());

app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);
app.use("/api/users", userRoutes);

app.use(express.static(path.join(__dirname, "/frontend/dist")));

app.get((req, res) =>
  res.sendFile(path.join(__dirname, "frontend", "dist", "index.html"))
);

server.listen(PORT, () => {
  connectToMongo();
  console.log(`Server is running on port ${PORT}`);
});
