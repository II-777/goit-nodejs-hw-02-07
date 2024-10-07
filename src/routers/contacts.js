// src/routers/contacts.js
import { Router } from 'express';
import { getContactsController, getContactController, createContactController } from '../controllers/contacts.js';
import { ctrlWrapper } from '../utils/ctrlWrapper.js';

// Create a new instance of an Express router
const router = Router();

// Route to get all contacts
router.get('/contacts', ctrlWrapper(getContactsController));

// Route to get a contact by ID
router.get('/contacts/:contactId', ctrlWrapper(getContactController));

// Route to create a new contact
router.post('/contacts', ctrlWrapper(createContactController));

// Export the router instance for use in other modules
export default router;