const Joi = require('joi');
const jwt = require('jsonwebtoken');
const db = require('../database/models');
require('dotenv/config');

const jwtConfig = {
  expiresIn: '7d',
  algorithm: 'HS256',
};

const userService = {
  validateBody: (data) => {
    const schema = Joi.object({
      displayName: Joi.string().required().min(8),
      email: Joi.string().email().required(),
      password: Joi.string().required().min(6),
      image: Joi.string(),
    });

    const { error, value } = schema.validate(data);

    if (error) throw error;

    return value;
  },

  register: async (displayName, email, password, image) => {
    const user = await db.User.create({
      // attributes: { exclude: [displayName, image] }, // nao funfou
      displayName,
      email,
      password,
      image,
    });

    const data = { email: user.dataValues.email,
      password: user.dataValues.password,
      id: user.dataValues.id };

    const token = jwt.sign({ data }, process.env.JWT_SECRET, jwtConfig);

    return token;
  },

  getUsers: async () => {
    const allUsers = await db.User.findAll({
      attributes: { exclude: ['password'] },
    });
    return allUsers;
  },

  getById: async (id) => {
    const user = await db.User.findOne({
      attributes: { exclude: ['password'] },
      where: { id },
    });

    console.log('user>>>>srvcUsr', user);

    return user;
  },
};

module.exports = userService;