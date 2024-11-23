// src/server.js
import express from 'express';
import pino from 'pino-http';
import cors from 'cors';
import router from './routers/index.js';
import { env } from './utils/env.js';
import { errorHandler } from './middlewares/errorHandler.js'
import { notFoundHandler } from './middlewares/notFoundHandler.js';
import cookieParser from 'cookie-parser';

// Define the port to run the server, using the PORT environment variable or defaulting to 3000
const PORT = Number(env('PORT', '3000'));

// Function to start the Express server
const setupServer = () => {
  // Create an instance of an Express application
  const app = express();

  // Middleware setup
  app.use(express.json()); // Parse incoming JSON requests and make the data available in req.body
  app.use(cors()); // Enable CORS for all routes, allowing requests from different origins
  app.use(cookieParser()); // Extract data from cookies

  // Use Pino HTTP logging middleware to log HTTP requests
  app.use(pino({
      transport: {
        target: 'pino-pretty',
      },
    }),
  );

  // Route for the root path
  app.get('/', (req, res) => {
    res.json({
      message: 'Hello World!',
    });
  });

  // Use the contacts router for handling routes starting with /contacts
  app.use(router);

  // Handle all other routes, including non-existing routes (404)
  app.use('*', notFoundHandler);

  // Global error handling middleware
  app.use(errorHandler);

  // Export the setupServer function for use in other modules
  app.listen(PORT, () => {
      // Log a message indicating the server is running
      console.log(`Server is running on http://localhost:${PORT}`);
  });
};

export default setupServer;