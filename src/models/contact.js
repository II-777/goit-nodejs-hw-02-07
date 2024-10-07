// src/models/contact.js
import mongoose from 'mongoose';

// Define a schema for the contact model using mongoose
const contactSchema = new mongoose.Schema({
  // The name of the contact; it is a required field of type String
  name: { type: String, required: true },
  // The phone number of the contact; it is a required field of type String
  phoneNumber: { type: String, required: true },
  // The email address of the contact; this field is optional
  email: { type: String },
  // A boolean flag indicating if the contact is marked as a favorite; defaults to false
  isFavourite: { type: Boolean, default: false },
  // The type of contact, which can be 'work', 'home', or 'personal';
  // this field is required and defaults to 'personal'
  contactType: {
    type: String,
    enum: ['work', 'home', 'personal'],
    required: true,
    default: 'personal'
  },
}, { 
  // Enable automatic creation of 'createdAt' and 'updatedAt' timestamps for each document
  timestamps: true 
});

// Create a Mongoose model named 'Contact' based on the defined schema
const Contact = mongoose.model('Contact', contactSchema);

// Export the Contact model for use in other parts of the application
export default Contact;
