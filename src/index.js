// src/index.js 
import { initMongoConnection } from './db/initMongoConnection.js';
import setupServer from './server.js';

// Initialize MongoDB connection
initMongoConnection()
  .then(() => {
    setupServer();
  })
  .catch((error) => {
    console.error('MongoDB connection failed:', error);
  });
