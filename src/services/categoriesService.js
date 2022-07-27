const Joi = require('joi');
// const jwt = require('jsonwebtoken');
const db = require('../database/models');

// const jwtCOnfig = {
//   expresIn: '7d',
//   algoritihm: 'HS256',
// };

const categoriesService = {
  validateBody: (data) => {
    const schema = Joi.object({
      title: Joi.string().required(),
      content: Joi.string().required(),
      categoryIds: Joi.array().required(),
    });

    const { error, value } = schema.validate(data);

    if (error) throw new Error('falta campos p/ preencher');

    return value;
  },

 register: async (name) => {
  const categoryRegistred = await db.Category.create({ name });

  return categoryRegistred.dataValues;
 },

 getAll: async () => {
  const allCategories = await db.Category.findAll();

  return allCategories;
 },

 verifyIds: async (arrayIds) => {
   const allCategories = await db.Category.findAll();
   
   const ifExists = arrayIds.every((id) => allCategories.some((category) => id === category.id));

   return ifExists;
 },
};

module.exports = categoriesService;