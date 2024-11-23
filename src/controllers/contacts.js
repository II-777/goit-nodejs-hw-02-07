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

// Controller to handle a request to fetch all contacts
export const getContactsController = async (req, res) => {
  const { page, perPage } = parsePaginationParams(req.query);
  const { sortBy, sortOrder } = parseSortParams(req.query);
  const filter = parseFilterParams(req.query);

  const contacts = await getAllContacts({
    page,
    perPage,
    sortBy,
    sortOrder,
    filter,
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
  const contact = await getContactById(contactId);

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
  const newContact = await createContact(req.body);

  res.status(201).json({
    status: 201,
    message: 'Successfully created a contact!',
    data: newContact,
  });
};

// Controller to handle a request to update an existing contact
export const patchContactController = async (req, res) => {
  const { contactId } = req.params;
  const updatedContact = await updateContact(contactId, req.body);

  // If the contact is not found, throw a 404 error
  if (!updatedContact) {
      throw createHttpError(404, "Contact not found");
  }

  // Respond with a success message and the updated contact data
  res.status(200).json({
    status: 200,
    message: "Successfully patched a contact!",
    data: updatedContact,
  });
};

// Controller to handle a request to delete an existing contact
export const deleteContactController = async (req, res) => {
  const { contactId } = req.params;

  // Call the service to delete the contact
  const deletedContact = await deleteContact(contactId);

  // If the contact is not found, throw a 404 error
  if (!deletedContact) {
    throw createHttpError(404, "Contact not found");
  }

  // Respond with 204 No Content if the deletion is successful
  res.status(204).send();
};