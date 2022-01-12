'use strict';

/**
 * test123 service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::test123.test123');
