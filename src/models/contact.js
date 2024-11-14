// src/models/contact.js
import mongoose from 'mongoose';

// Define a schema for the contact model using mongoose
const contactSchema = new mongoose.Schema({
  name: { type: String, required: true },
  phoneNumber: { type: String, required: true },
  email: { type: String, required: false},
  isFavourite: { type: Boolean, default: false, required: false },
  contactType: {
    type: String,
    enum: ['work', 'home', 'personal'],
    default: 'personal',
    required: true
  },
}, { 
  // Enable automatic creation of 'createdAt' and 'updatedAt' timestamps for each document
  timestamps: true,
  versionKey: false 
});

// Create a Mongoose model named 'Contact' based on the defined schema
const ContactsCollection = mongoose.model('Contact', contactSchema);

export default ContactsCollection;