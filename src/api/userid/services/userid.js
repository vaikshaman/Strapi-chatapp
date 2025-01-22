'use strict';

/**
 * userid service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::userid.userid');
