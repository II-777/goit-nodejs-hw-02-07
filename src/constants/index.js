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

// SMTP config constants
export const SMTP = {
  SMTP_HOST: 'SMTP_HOST',
  SMTP_PORT: 'SMTP_PORT',
  SMTP_USER: 'SMTP_USER',
  SMTP_PASSWORD: 'SMTP_PASSWORD',
  SMTP_FROM: 'SMTP_FROM',
};

// Handlebars constants
export const TEMPLATES_DIR = path.join(process.cwd(), 'src', 'templates');