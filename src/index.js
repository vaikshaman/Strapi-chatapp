const socketIo = require("socket.io");

module.exports = {
  async bootstrap({ strapi }) {
    const io = socketIo(strapi.server.httpServer, {
      cors: {
        origin: "http://localhost:3000", // Allow React frontend running on port 3000
        methods: ["GET", "POST"],
      },
    });

    io.on("connection", (socket) => {
      // Fetch the username from the query parameters sent during connection
      const username = socket.handshake.query.username || "Guest";

      console.log(`New client connected: ${socket.id}, Username: ${username}`);

      // When the client sends a message, save it to the database
      socket.on("send_message", async (message) => {
        console.log(`Message received from ${username}:`, message);

        // Ensure timestamp is in ISO format
        const timestamp = new Date().toISOString(); // Formats to '2025-01-22T08:30:00.000Z'

        // Validate that the message has the required fields
        if (!message.text) {
          console.error("Message is missing required field: text");
          return; // Don't proceed if the message is invalid
        }

        // Save the message to the database
        try {
          const savedMessage = await strapi.entityService.create("api::chat.chat", {
            data: {
              user: username, // Use the username from the connection
              text: message.text, // Ensure this is a string
              timestamp: timestamp, // Use ISO formatted timestamp
            },
          });

          // Emit the message back to all clients, including the sender
          io.emit("receive_message", savedMessage);
        } catch (error) {
          console.error("Error saving message:", error);
        }
      });

      socket.on("disconnect", () => {
        console.log(`Client disconnected: ${socket.id}, Username: ${username}`);
      });
    });

    strapi.io = io;
  },
};
