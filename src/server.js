// src/server.js
import express from 'express';
import cors from 'cors';
import pinoHttp from 'pino-http';
import pino from 'pino';

// Create a logger configuration using pino
const logger = pino({
    transport: {
        target: 'pino-pretty',
        options: {
            colorize: true, // Optional: colors the output
        },
    },
});

// Create an Express application
const app = express();

// Middleware
app.use(cors());
app.use(pinoHttp({ logger })); // Use pino-http for logging HTTP requests

// Example route
app.get('/', (req, res) => {
    res.send('Welcome to the Express server!');
});

// Handle non-existing routes
app.use((req, res) => {
    res.status(404).json({ message: 'Not found' });
});

// Get port from environment variable or default to 3001
const PORT = process.env.PORT || 3001;

// Start the server
const setupServer = () => {
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });
};

export default setupServer;
