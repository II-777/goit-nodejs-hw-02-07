// src/middlewares/validateBody.js

// Middleware for validation
export const validateBody = (schema) => async (req, res, next) => {
  try {
    await schema.validateAsync(req.body, {
      abortEarly: false,
      convert: true,
    });
    next();
  } catch (err) {
    const errorDetails = err.details.map((detail) => ({
      message: detail.message,
      path: detail.path,
      type: detail.type,
    }));

    res.status(400).json({
      status: 400,
      message: 'Bad Request',
      errors: errorDetails,
    });
  }
};