// src/routers/contacts.js
import { Router } from 'express';
import { getContactsController, getContactController } from '../controllers/contacts.js';
import { ctrlWrapper } from '../utils/ctrlWrapper.js';

// Create a new instance of an Express router
const router = Router();

// Route to get all contacts
router.get('/contacts', ctrlWrapper(getContactsController));

// Route to get a contact by ID
router.get('/contacts/:contactId', ctrlWrapper(getContactController));

// Export the router instance for use in other modules
export default router;