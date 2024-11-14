import Joi from 'joi';

// Middleware for POST /contacts
export const createContactSchema = Joi.object({
  name: Joi.string().min(3).max(20).required().messages({
    'string.base': 'Name must be a string.',
    'string.empty': 'Name cannot be empty.',
    'string.min': 'Name must be at least {#limit} characters long.',
    'string.max': 'Name must be at most {#limit} characters long.',
    'any.required': 'Name is required.'
  }),
  phoneNumber: Joi.string().min(3).max(20).required().messages({
    'string.base': 'Phone number must be a string.',
    'string.empty': 'Phone number cannot be empty.',
    'string.min': 'Phone number must be at least {#limit} characters long.',
    'string.max': 'Phone number must be at most {#limit} characters long.',
    'any.required': 'Phone number is required.'
  }),
  email: Joi.string().optional().email().messages({
    'string.base': 'Email must be a string.',
    'string.email': 'Email must be a valid email address.',
  }),
  isFavourite: Joi.boolean().optional().messages({
    'boolean.base': 'Is Favourite must be a boolean value.',
  }),
  contactType: Joi.string().optional().valid('work', 'home', 'personal').messages({
    'string.base': 'Contact Type must be a string.',
    'any.only': 'Contact Type must be one of: personal, work, home.',
    'any.required': 'Contact Type is required.'
  }),
});

// Middleware for PATCH /contacts/:contactId
export const updateContactSchema = Joi.object({
  name: Joi.string().min(3).max(20).optional().messages({
    'string.base': 'Name must be a string.',
    'string.empty': 'Name cannot be empty.',
    'string.min': 'Name must be at least {#limit} characters long.',
    'string.max': 'Name must be at most {#limit} characters long.',
  }),
  phoneNumber: Joi.string().min(3).max(20).optional().messages({
    'string.base': 'Phone number must be a string.',
    'string.empty': 'Phone number cannot be empty.',
    'string.min': 'Phone number must be at least {#limit} characters long.',
    'string.max': 'Phone number must be at most {#limit} characters long.',
  }),
  email: Joi.string().email().allow(null).optional().messages({
    'string.base': 'Email must be a string.',
    'string.email': 'Email must be a valid email address.',
  }),
  isFavourite: Joi.boolean().optional().messages({
    'boolean.base': 'Is Favourite must be a boolean value.',
  }),
  contactType: Joi.string().optional().valid('personal', 'work', 'home').messages({
    'string.base': 'Contact Type must be a string.',
    'any.only': 'Contact Type must be one of: personal, work, home.',
  }),
});
