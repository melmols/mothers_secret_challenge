import { Server } from "socket.io";

let io;

export function attachWebSocket(server) {
  if (!io) {
    io = new Server(server);

    console.log("Connected to WebSocket 🔥.");

    io.of("/yaml").on("connection", (socket) => {
      socket.on("disconnect", () => {
        console.log("A user disconnected from /yaml route.");
      });
    });

    io.of("/nostromo").on("connection", (socket) => {
      socket.on("disconnect", () => {
        console.log("A user disconnected from /nostromo route.");
      });
    });
  }

  return io;
}
