const socketIo = require("socket.io");

module.exports = {
  async bootstrap({ strapi }) {
    const io = socketIo(strapi.server.httpServer, {
      cors: {
        origin: "https://strapichatapp.vercel.app", // Frontend URL
        methods: ["GET", "POST"],
      },
    });

    // Handle connection events
    io.on("connection", (socket) => {
      // Fetch the username from the query parameters or default to "Guest"
      const username = socket.handshake.query.username?.trim() || "Guest";

      console.log(`New client connected: ${socket.id}, Username: ${username}`);

      // When a message is sent by the client
      socket.on("send_message", async (message) => {
        // Ensure the message has the required text field and it isn't empty
        if (!message.text?.trim()) {
          console.error("Message is missing required field: text");
          return;
        }

        // Add the username to the message object
        message.user = username;

        // Create a timestamp in ISO format
        const timestamp = new Date().toISOString();

        try {
          // Save the message to the Strapi database
          const savedMessage = await strapi.entityService.create("api::chat.chat", {
            data: {
              user: username, // Store the username of the sender
              text: message.text, // Store the message text
              timestamp: timestamp, // Store the timestamp of the message
            },
          });

          // Emit the message back to all connected clients, including the sender
          io.emit("receive_message", savedMessage);
        } catch (error) {
          console.error("Error saving message:", error);
        }
      });

      // Handle client disconnect event
      socket.on("disconnect", () => {
        console.log(`Client disconnected: ${socket.id}, Username: ${username}`);
      });
    });

    // Attach the Socket.IO instance to the Strapi server for global access
    strapi.io = io;
  },
};
