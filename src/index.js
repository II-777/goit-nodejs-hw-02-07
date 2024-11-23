import { initMongoDB } from './db/initMongoConnection.js';
import setupServer from './server.js';
import dotenv from 'dotenv';

dotenv.config();

// Initialize MongoDB connection
initMongoDB()
  .then(() => {
    // Start the server only after MongoDB connection is established
    setupServer();
  })
  .catch((error) => {
    console.error('[-] Failed to connect to MongoDB:', error);
  });
