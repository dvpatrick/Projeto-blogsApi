const Joi = require('joi');
const jwt = require('jsonwebtoken');
const db = require('../database/models');
require('dotenv/config');

const jwtConfig = {
  expiresIn: '7d',
  algorithm: 'HS256',
};

const loginService = {
  validateBody: (data) => {
    const schema = Joi.object({
      email: Joi.string().email().required(),
      password: Joi.string().required(),
    });

    const { error, value } = schema.validate(data);

    if (error) throw error;

    return value;
  },

  login: async (email, password) => {
    const user = await db.User.findOne({
      attributes: { exclude: ['image', 'updatedAt', 'crestedtAt', 'displayName'] },
      where: { email },
    });

    // const user = await db.User.findAll();

    // console.log('retorno do findOne no db, dentro do services', user);

    if (!user || user.password !== password) {
      const err = new Error('Invalid fields');
      err.name = 'ValidationError';
      throw err;
    }

    const newUser = user.dataValues;
    // console.log('new user>>>', newUser);

    const token = jwt.sign({ data: newUser }, process.env.JWT_SECRET, jwtConfig);

    return token;
  },
};

module.exports = loginService;