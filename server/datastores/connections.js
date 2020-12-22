'use strict';

module.exports = {
  database: {
    uri: process.env.DATABASE_URI,
    iamApiKey: process.env.DATABASE_APIKEY,
    adapter: 'mongodb',
  },
  redis: {
    uri: process.env.REDIS_URI,
    adapter: 'redis',
    // sslCA: 'filename.cer',
  },
};