import { Server } from "socket.io";
import http from "http";
import e from "express";

const app = e();

const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: ["http://localhost:5000"],
    methods: ["GET", "POST"],
  },
});

export const getReceiverSocketId = (receiverId) =>
  usersConnected.get(receiverId);

const usersConnected = new Map();

io.on("connection", (socket) => {
  const userId = socket.handshake.query.userId;
  if (typeof userId !== "undefined") {
    usersConnected.set(userId, socket.id);
    io.emit("getOnlineUsers", [...usersConnected.keys()]);
  }
  socket.on("disconnect", () => {
    usersConnected.delete(userId);

    io.emit("getOnlineUsers", [...usersConnected.keys()]);
  });
});

export { app, io, server };
