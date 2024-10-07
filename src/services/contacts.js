// src/services/contacts.js
import Contact from '../models/contact.js';

// Function to retrieve all contacts from the database
export const getAllContacts = async () => {
  // Use Mongoose's find method to fetch all contact documents
  return await Contact.find({});
};

// Function to retrieve a specific contact by its ID
export const getContactById = async (id) => {
  // Use Mongoose's findById method to fetch a contact document by its unique ID
  return await Contact.findById(id);
};
