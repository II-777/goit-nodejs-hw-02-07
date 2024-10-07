// src/routers/contacts.js
import express from 'express';
import { getContactsController, getContactController } from '../controllers/contacts.js';

// Create a new instance of an Express router
const router = express.Router();

// Route to get all contacts
router.get('/', getContactsController);

// Route to get a contact by ID
router.get('/:contactId', getContactController);

// Export the router instance for use in other modules
export default router;