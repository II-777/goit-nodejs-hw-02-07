// src/db/initMongoDB.js
import mongoose from 'mongoose';
import { env } from '../utils/env.js';

// Initialize the MongoDB connection
export const initMongoConnection = async () => {
    // Retrieve MongoDB credentials and connection details from environment variables
    const user = env('MONGODB_USER');    // MongoDB username
    const pwd = env('MONGODB_PASSWORD'); // MongoDB password
    const url = env('MONGODB_URL');      // MongoDB URL (host)
    const db = env('MONGODB_DB');        // MongoDB database name 
 
    await mongoose.connect(
      `mongodb+srv://${user}:${pwd}@${url}/${db}?retryWrites=true&w=majority`,);
    console.log('Mongo connection successfully established!');
};
