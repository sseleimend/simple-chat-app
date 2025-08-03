import { useEffect } from "react";
import { useState } from "react";
import { createContext, useContext } from "react";
import { useAuthContext } from "./AuthContext.jsx";
import io from "socket.io-client";

export const SocketContext = createContext();

export const useSocketContext = () => {
  return useContext(SocketContext);
};

export const SocketProvider = ({ children }) => {
  const [socket, setSocket] = useState(null);
  const [onlineUsers, setOnlineUsers] = useState([]);
  const { authUser } = useAuthContext();

  useEffect(() => {
    if (!authUser) return;

    const socket = io("https://simple-chat-app-w5td.onrender.com", {
      query: {
        userId: authUser._id,
      },
    });

    setSocket(socket);
    socket.on("getOnlineUsers", (users) => {
      setOnlineUsers(users);
    });

    return () => socket.disconnect();
  }, [authUser]);

  return (
    <SocketContext.Provider value={{ socket, onlineUsers }}>
      {children}
    </SocketContext.Provider>
  );
};
