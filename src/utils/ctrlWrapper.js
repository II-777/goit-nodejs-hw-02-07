// src/utils/ctrlWrapper.js
import pino from 'pino';

const logger = pino();

export const ctrlWrapper = (controller) => {
    return async (req, res, next) => {
      try {
        await controller(req, res, next);
      } catch (err) {
        logger.error(err);
        next(err);
      }
    };
  };
