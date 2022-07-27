// const Joi = require('joi');
const db = require('../database/models');

const postService = {
 register: async (dados, userId) => {
  const data = {
    title: dados.title,
    content: dados.content,
    userId,
  };
  const blogPosted = await db.BlogPost.create(data);

  return blogPosted.dataValues;
 },

 getAll: async () => {
  const allCategories = await db.BlogPost.findAll({
    include: [{
      // model: 'User', as: 'user',
      model: 'User',
    }],
  });

  return allCategories;
 },
};

module.exports = postService;