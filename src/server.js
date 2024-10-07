// src/server.js
import express from 'express';
import pino from 'pino-http';
import cors from 'cors';
import contactsRouter from './routers/contacts.js';
import { env } from './utils/env.js';

// Define the port to run the server, using the PORT environment variable or defaulting to 3001
const PORT = Number(env('PORT', '3000'));

// Function to start the Express server
const setupServer = () => {
  // Create an instance of an Express application
  const app = express();

  // Middleware setup
  app.use(express.json()); // Parse incoming JSON requests and make the data available in req.body
  app.use(cors()); // Enable CORS for all routes, allowing requests from different origins

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
  app.use('/contacts', contactsRouter);

  // Handle all other routes, including non-existing routes (404)
  app.use('*', (req, res ) => {
    res.status(404).json({
      message: 'Not found',
    });
  });

  // Global error handling middleware
  app.use((err, req, res, next) => {
    res.status(500).json({
      message: 'Something went wrong',
      error: err.message,
    });
  });

  // Export the setupServer function for use in other modules
  app.listen(PORT, () => {
      // Log a message indicating the server is running
      console.log(`Server is running on port ${PORT}`);
  });
};

export default setupServer;
