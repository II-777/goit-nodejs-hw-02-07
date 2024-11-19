// src/controllers/contacts.js
import createHttpError from 'http-errors';
import {
  getAllContacts,
  getContactById,
  createContact,
  updateContact,
  deleteContact,
} from '../services/contacts.js';

import { parsePaginationParams } from '../utils/parsePaginationParams.js';
import { parseSortParams } from '../utils/parseSortParams.js';
import { parseFilterParams } from '../utils/parseFilterParams.js';

import { saveFileToUploadDir } from '../utils/saveFileToUploadDir.js';
import { saveFileToCloudinary } from '../utils/saveFileToCloudinary.js';
import { env } from '../utils/env.js';

// Controller to handle a request to fetch all contacts
export const getContactsController = async (req, res) => {
  const { page, perPage } = parsePaginationParams(req.query);
  const { sortBy, sortOrder } = parseSortParams(req.query);
  const filter = parseFilterParams(req.query);
  const userId = req.user._id;

  const contacts = await getAllContacts({
    page,
    perPage,
    sortBy,
    sortOrder,
    filter,
    userId,
  });

  res.status(200).json({
    status: 200,
    message: 'Successfully found contacts!',
    data: contacts,
  });
};

// Controller to handle a request to fetch a single contact
export const getContactByIdController = async (req, res) => {
  const { contactId } = req.params;
  const contact = await getContactById(contactId, req.user._id);

  if (!contact) {
    throw createHttpError(404, 'Contact not found');
  }

  res.status(200).json({
    status: 200,
    message: `Successfully found contact with id ${contactId}!`,
    data: contact,
  });
};

// Controller to handle a request to create a new contact 
export const createContactController = async (req, res) => {
  const photo = req.file;
  let photoUrl;
  if (photo) {
    if (env('ENABLE_CLOUDINARY') === 'true') {
      photoUrl = await saveFileToCloudinary(photo);
    } else {
      photoUrl = await saveFileToUploadDir(photo);
    }
  }
  const contactPayload = {
    ...req.body,
    photo: photoUrl,
    userId: req.user._id,
  };

  const newContact = await createContact(contactPayload);

  res.status(201).json({
    status: 201,
    message: 'Successfully created a contact!',
    data: newContact,
  });
};

// Controller to handle a request to update an existing contact
export const patchContactController = async (req, res) => {
  const { contactId } = req.params;
  const photo = req.file;
  let photoUrl;
  if (photo) {
    if (env('ENABLE_CLOUDINARY') === 'true') {
      photoUrl = await saveFileToCloudinary(photo);
    } else {
      photoUrl = await saveFileToUploadDir(photo);
    }
  }
  
  const updatedContact = await updateContact(contactId, req.user._id, {
    ...req.body,
    photo: photoUrl,
  });

  if (!updatedContact) {
    throw createHttpError(404, 'Contact not found');
  }

  // Respond with a success message and the updated contact data
  res.json({
    status: 200,
    message: "Successfully patched a contact!",
    data: updatedContact.contact,
  });
};

// Controller to handle a request to delete an existing contact
export const deleteContactController = async (req, res) => {
  const { contactId } = req.params;

  // Call the service to delete the contact
  const deletedContact = await deleteContact(contactId, req.user._id);

  // If the contact is not found, throw a 404 error
  if (!deletedContact) {
    throw createHttpError(404, "Contact not found");
  }

  // Respond with 204 No Content if the deletion is successful
  res.status(204).send();
};
