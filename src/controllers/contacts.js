// src/controllers/contacts.js
import pino from 'pino';
import createHttpError from 'http-errors';
import { getAllContacts, getContactById } from '../services/contacts.js';

const logger = pino();

export const getContactsController = async (req, res) => {
  try {
    const contacts = await getAllContacts();
    res.status(200).json({
      status: 200,
      message: "Successfully found contacts!",
      data: contacts,
    });
  } catch (error) {
    logger.error(error);
    res.status(500).json({ message: 'Error retrieving contacts' });
  }
};

export const getContactController = async (req, res) => {
  const { contactId } = req.params;
  try {
    const contact = await getContactById(contactId);
    if (!contact) {
      throw createHttpError(404, 'Contact not found');
    }
    res.status(200).json({
      status: 200,
      message: `Successfully found contact with id ${contactId}!`,
      data: contact,
    });
  } catch (error) {
    logger.error(error);
    res.status(500).json({ message: 'Error retrieving contact' });
  }
};