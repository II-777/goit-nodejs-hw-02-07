// src/utils/env.js
import dotenv from 'dotenv';

// Load environment variables from the .env file
dotenv.config();

// Function to retrieve environment variables with optional default values
export function env(name, defaultValue) {
  // Attempt to get the value of the environment variable by its name
  const value = process.env[name];

  // If the environment variable exists, return its value
  if (value) return value;

  // If the environment variable doesn't exist but a default value is provided, return the default value
  if (defaultValue) return defaultValue;

  // If the environment variable is missing and no default value is provided, throw an error
  throw new Error(`Missing: process.env['${name}'].`);
}
