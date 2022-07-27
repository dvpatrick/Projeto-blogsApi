require('dotenv');

const jwt = require('jsonwebtoken');

const authService = {
  validateToken: (token) => {
    if (!token) {
      const err = new Error('Token not found');
      err.name = 'UnauthorizedError';
      throw err;
    }

    try {
      jwt.verify(token, process.env.JWT_SECRET);
        return true;
    } catch (err) {
      const error = new Error('Expired or invalid token');
      error.name = 'UnauthorizedError';
      throw error;
    }
  },
};

module.exports = authService;
