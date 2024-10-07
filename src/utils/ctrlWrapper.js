// src/utils/ctrlWrapper.js
import pino from 'pino';

const logger = pino();

// The ctrlWrapper function takes a controller function as an argument
// and returns a new function that wraps the controller in error handling logic.
export const ctrlWrapper = (controller) => {
    return async (req, res, next) => {
      try {
        // Executes the controller function with the request, response, and next objects.
        await controller(req, res, next);
      } catch (err) {
        logger.error(err);
        // If the controller throws an error, pass it to the next middleware or error handler.
        next(err);
      }
    };
  };
