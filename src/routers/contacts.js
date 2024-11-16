// src/routers/contacts.js
import { Router } from 'express';
import {
  getContactsController,
  getContactByIdController,
  createContactController,
  patchContactController,
  deleteContactController,
} from '../controllers/contacts.js';
import { ctrlWrapper } from '../utils/ctrlWrapper.js';
import { isValidId } from '../middlewares/isValidId.js';
import { validateBody } from '../middlewares/validateBody.js';
import {
  createContactSchema,
  updateContactSchema,
} from '../validation/contacts.js';

const router = Router();

// Route to get all contacts
router.get('/contacts', ctrlWrapper(getContactsController));

// Route to get a contact
router.get(
  '/contacts/:contactId',
  isValidId,
  ctrlWrapper(getContactByIdController),
);

// Route to create a new contact
router.post(
  '/contacts',
  validateBody(createContactSchema),
  ctrlWrapper(createContactController),
);

// Route to patch an existing contact
router.patch(
  '/contacts/:contactId',
  validateBody(updateContactSchema),
  isValidId,
  ctrlWrapper(patchContactController),
);

// Route to delete an existing contact
router.delete(
  '/contacts/:contactId',
  isValidId,
  ctrlWrapper(deleteContactController),
);

export default router;