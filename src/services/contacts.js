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
  userId,
}) => {
  const limit = perPage;
  const skip = (page - 1) * perPage;

  const contactsQuery = ContactsCollection.find({ userId });

  if (filter.contactType) {
    contactsQuery.where('contactType').equals(filter.contactType);
  }
  if (filter.isFavourite) {
    contactsQuery.where('isFavourite').equals(filter.isFavourite);
  }

  const contactsCount = await ContactsCollection.countDocuments({
    userId,
    ...filter,
  });

  const contacts = await contactsQuery
    .skip(skip)
    .limit(limit)
    .sort({ [sortBy]: sortOrder })
    .exec();

  const paginationData = paginationDataCalc(contactsCount, perPage, page);

  return {
    data: contacts,
    ...paginationData,
  };
};

// Function to retrieve a specific contact by its ID
export const getContactById = async (contactId, userId) => {
  const contact = await ContactsCollection.findOne({ _id: contactId, userId });
  return contact;
};

// Function to create a new contact
export const createContact = async (payload) => {
  const contact = await ContactsCollection.create(payload);
  return contact;
};

// Function to update an existing contact
export const updateContact = async (
  contactId,
  userId,
  payload,
  options = {},
) => {
  const rawResult = await ContactsCollection.findOneAndUpdate(
    { _id: contactId, userId },
    payload,
    {
      new: true,
      includeResultMetadata: true,
      ...options,
    },
  );

  // Log the result for debugging
  console.log('[!] Updated Contact in services:', rawResult.value);

  if (!rawResult || !rawResult.value) {
    return null;
  };

  return {
    contact: rawResult.value,
    isNew: Boolean(rawResult?.lastErrorObject?.upserted),
  };
};

// Function to delete an existing contact
export const deleteContact = async (contactId, userId) => {
  const contact = await ContactsCollection.findOneAndDelete({
    _id: contactId,
    userId,
  });
  return contact;
};
