// src/server.js
import express from 'express';
import cors from 'cors';
import pinoHttp from 'pino-http';
import pino from 'pino';
import { getAllContacts, getContactById } from './services/contacts.js';

const logger = pino({
    transport: {
        target: 'pino-pretty',
        options: {
            colorize: true,
        },
    },
});

const app = express();
app.use(cors());
app.use(express.json());
app.use(pinoHttp({ logger }));

// Route to get all contacts
app.get('/contacts', async (req, res) => {
  try {
    const contacts = await getAllContacts();
    res.status(200).json({
      status: 200,
      message: "Successfully found contacts!",
      data: contacts,
    });
  } catch (error) {
    logger.error(error); // Log the error
    res.status(500).json({ message: 'Error retrieving contacts' });
  }
});

// Route to get a contact by ID
app.get('/contacts/:contactId', async (req, res) => {
  const { contactId } = req.params;
  try {
    const contact = await getContactById(contactId);
    if (!contact) {
      return res.status(404).json({ message: 'Contact not found' });
    }
    res.status(200).json({
      status: 200,
      message: `Successfully found contact with id ${contactId}!`,
      data: contact,
    });
  } catch (error) {
    logger.error(error); // Log the error
    res.status(500).json({ message: 'Error retrieving contact' });
  }
});

// Handle non-existing routes
app.use((req, res) => {
  res.status(404).json({ message: 'Not found' });
});

// Get port from environment variable or default to 3001
const PORT = process.env.PORT || 3001;

const setupServer = () => {
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });
};

export default setupServer;
