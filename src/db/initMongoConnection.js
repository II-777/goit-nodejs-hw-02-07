// src/db/initMongoDB.js
import mongoose from 'mongoose';
import dotenv from 'dotenv';

// Load environment variables from the .env file located one level up from the current directory
dotenv.config({ path: '../.env' });

// Define an asynchronous function to initialize the MongoDB connection
export const initMongoDB = async () => {
  try {
    // Retrieve MongoDB credentials and connection details from environment variables
    const user = process.env.MONGODB_USER;          // MongoDB username
    const pwd = process.env.MONGODB_PASSWORD;       // MongoDB password
    const url = process.env.MONGODB_URL;            // MongoDB URL (host)
    const db = process.env.MONGODB_DB;              // MongoDB database name

    // Attempt to connect to the MongoDB database using the mongoose connect method
    await mongoose.connect(
      `mongodb+srv://${user}:${pwd}@${url}/${db}?retryWrites=true&w=majority`,
    );

    // Log a success message if the connection is established
    console.log('[+] Mongo connection successfully established!');
  } catch (e) {
    // Log an error message if the connection fails, along with the error details
    console.log('[-] Error while setting up mongo connection', e);
    
    // Rethrow the error to propagate it up the call stack
    throw e;
  }
};
