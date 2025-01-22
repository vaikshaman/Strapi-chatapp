// ./config/server.js

module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  app: {
    keys: env.array('APP_KEYS'),
  },
  // Call socket function after Strapi initializes
  middleware: {
    async beforeStart() {
      await require("./functions/socket")({ strapi });
    }
  },
});
