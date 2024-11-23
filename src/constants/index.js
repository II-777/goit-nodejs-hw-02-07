// src/constants/index.js
import path from 'node:path';

// Sorting constants
export const SORT_ORDER = {
  ASC: 'asc',
  DESC: 'desc',
};

// Authentication session constants
export const FIFTEEN_MINUTES = 15 * 60 * 1000;
export const ONE_DAY = 24 * 60 * 60 * 1000;

// SMTP config constants (password reset email)
export const SMTP = {
  SMTP_HOST: 'SMTP_HOST',
  SMTP_PORT: 'SMTP_PORT',
  SMTP_USER: 'SMTP_USER',
  SMTP_PASSWORD: 'SMTP_PASSWORD',
  SMTP_FROM: 'SMTP_FROM',
};

// Handlebars constants (password reset email)
export const TEMPLATES_DIR = path.join(process.cwd(), 'src', 'templates');

// Image upload constants
export const TEMP_UPLOAD_DIR = path.join(process.cwd(), 'temp');
export const UPLOAD_DIR = path.join(process.cwd(), 'uploads');

// Cloudinary constants (image upload)
export const CLOUDINARY = {
  CLOUD_NAME: 'CLOUD_NAME',
  API_KEY: 'API_KEY',
  API_SECRET: 'API_SECRET',
};

// Swagger constants (API Documentation)
export const SWAGGER_PATH = path.join(process.cwd(), 'docs', 'swagger.json');
