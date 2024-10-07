// src/server.js
import express from 'express';
import cors from 'cors';
import pinoHttp from 'pino-http';
import pino from 'pino';
import { getAllContacts, getContactById } from './services/contacts.js';

// Create a logger instance using Pino with pretty printing for easier reading in the console
const logger = pino({
    transport: {
        target: 'pino-pretty',
        options: {
            colorize: true,
        },
    },
});

// Create an instance of an Express application
const app = express();

// Middleware setup
app.use(cors()); // Enable CORS for all routes
app.use(express.json()); // Parse incoming JSON requests
app.use(pinoHttp({ logger })); // Use Pino HTTP logging middleware

// Route to get all contacts
app.get('/contacts', async (req, res) => {
  try {
    // Fetch all contacts from the service
    const contacts = await getAllContacts();
    // Respond with success status and contacts data
    res.status(200).json({
      status: 200,
      message: "Successfully found contacts!",
      data: contacts,
    });
  } catch (error) {
    // Log any errors that occur during the fetch
    logger.error(error);
    // Respond with an error status and message
    res.status(500).json({ message: 'Error retrieving contacts' });
  }
});

// Route to get a contact by ID
app.get('/contacts/:contactId', async (req, res) => {
  const { contactId } = req.params; // Extract contact ID from request parameters
  try {
    // Fetch the specific contact using its ID
    const contact = await getContactById(contactId);
    if (!contact) {
      // Respond with a 404 status if the contact is not found
      return res.status(404).json({ message: 'Contact not found' });
    }
    // Respond with success status and the contact data
    res.status(200).json({
      status: 200,
      message: `Successfully found contact with id ${contactId}!`,
      data: contact,
    });
  } catch (error) {
    // Log any errors that occur during the fetch
    logger.error(error);
    // Respond with an error status and message
    res.status(500).json({ message: 'Error retrieving contact' });
  }
});

// Handle non-existing routes (404)
app.use((req, res) => {
  res.status(404).json({ message: 'Not found' });
});

// Get port from environment variable or default to 3001
const PORT = process.env.PORT || 3001;

// Function to start the Express server
const setupServer = () => {
    app.listen(PORT, () => {
        // Log a message indicating the server is running
        console.log(`Server is running on port ${PORT}`);
    });
};

// Export the setupServer function for use in other modules
export default setupServer;