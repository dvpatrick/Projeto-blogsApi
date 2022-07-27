require('dotenv');

const jwt = require('jsonwebtoken');

const jwtMiddle = {
  validateToken: (req, _res, next) => {
    const { authorization } = req.headers;

    if (!authorization) {
      const err = new Error('Token not found');
      err.name = 'UnauthorizedError';
      throw err;
    }

    try {
      jwt.verify(authorization, process.env.JWT_SECRET);
      // next();
    } catch (err) {
      const error = new Error('Expired or invalid token');
      error.name = 'UnauthorizedError';
      console.log('error>>>>>>>>', error.name);
      throw error;
    }
    next();
  },
};

module.exports = jwtMiddle;
