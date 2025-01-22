'use strict';

/**
 * chat service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = {
  // Custom function to save a message
  async createMessage(data) {
    // This will create a new message and save it to the database
    const message = await strapi.db.query('api::chat.chat').create({
      data: {
        user: data.user,
        text: data.text,
        timestamp: data.timestamp,
      },
    });
    return message;
  },

  // Optionally, you can keep the default behavior (this is optional if you need more functionality)
  ...createCoreService('api::chat.chat'),
};
