// src/services/contacts.js
import { ContactsCollection } from '../db/models/contact.js';
import { SORT_ORDER } from '../constants/index.js';
import { paginationDataCalc } from '../utils/paginationDataCalc.js';

// Function to retrieve all contacts from the database
export const getAllContacts = async ({
  page,
  perPage,
  sortOrder = SORT_ORDER.ASC,
  sortBy = '_id',
  filter = {},
}) => {
  const limit = perPage;
  const skip = (page - 1) * perPage;

  const contactsQuery = ContactsCollection.find();
  if (filter.contactType) {
    contactsQuery.where('contactType').equals(filter.contactType);
  }
  if (filter.isFavourite) {
    contactsQuery.where('isFavourite').equals(filter.isFavourite);
  }
  const [contactsCount, contacts] = await Promise.all([
    ContactsCollection.find().merge(contactsQuery).countDocuments(),
    contactsQuery
      .skip(skip)
      .limit(limit)
      .sort({ [sortBy]: sortOrder })
      .exec(),
  ]);

  const paginationData = paginationDataCalc(contactsCount, perPage, page);

  return {
    data: contacts,
    ...paginationData,
  };
};

// Function to retrieve a specific contact by its ID
export const getContactById = async (id) => {
  return await ContactsCollection.findById(id);
};

// Function to create a new contact
export const createContact = async (contactData) => {
  const contact = new ContactsCollection(contactData);
  await contact.save();
  return contact;
};

// Function to update an existing contact
export const updateContact = async (id, updateData) => {
  // Set { new: true } to return the updated document
  return await ContactsCollection.findByIdAndUpdate(id, updateData, { new: true });
};

// Function to delete an existing contact
export const deleteContact = async (id) => {
  return await ContactsCollection.findByIdAndDelete(id);
};