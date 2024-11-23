// src/routers/contacts.js
import { Router } from 'express';
import {
  getContactsController,
  getContactByIdController,
  createContactController,
  deleteContactController,
  patchContactController,
} from '../controllers/contacts.js';
import { ctrlWrapper } from '../utils/ctrlWrapper.js';
import { isValidId } from '../middlewares/isValidId.js';
import { validateBody } from '../middlewares/validateBody.js';
import {
  createContactSchema,
  updateContactSchema,
} from '../validation/contacts.js';
import { authenticate } from '../middlewares/authenticate.js';
import { upload } from '../middlewares/multer.js';

const router = Router();

// Enable authentication requirement
router.use(authenticate);

// Route to get all contacts
router.get('/', ctrlWrapper(getContactsController));

// Route to get a contact
router.get(
  '/:contactId',
  isValidId,
  ctrlWrapper(getContactByIdController),
);

// Route to create a new contact
router.post(
  '/',
  upload.single('photo'),
  validateBody(createContactSchema),
  ctrlWrapper(createContactController),
);

// Route to delete an existing contact
router.delete(
  '/:contactId',
  isValidId,
  ctrlWrapper(deleteContactController),
);

// Route to patch an existing contact
router.patch(
  '/:contactId',
  isValidId,
  upload.single('photo'),
  validateBody(updateContactSchema),
  ctrlWrapper(patchContactController),
);


export default router;
