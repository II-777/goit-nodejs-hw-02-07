import { initMongoDB } from './db/initMongoConnection.js';
import setupServer from './server.js';
import dotenv from 'dotenv';

// Load environment variables into process.env
dotenv.config();

// Initialize MongoDB connection
initMongoDB()
  .then(() => {
    // Start the server only after MongoDB connection is established
    setupServer();
  })
  .catch((error) => {
    // Log an error message if the MongoDB connection fails
    console.error('[-] Failed to connect to MongoDB:', error);
  });
