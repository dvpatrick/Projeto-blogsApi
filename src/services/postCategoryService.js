const db = require('../database/models');

const postCategoryService = {
 register: async (postId, categoryId) => {
  const postCategoryRegistred = await db.PostCategory.create({ postId, categoryId });

  // console.log(await db.PostCategory.findAll());

  return postCategoryRegistred.dataValues;
 },

 getAll: async () => {
  const allPostCategory = await db.PostCategory.findAll();

  return allPostCategory;
 },

 bulkCreatee: async (arrayCategoryId, postId) => {
  await db.PostCategory.bulkCreate(
    arrayCategoryId.map((category) => ({ postId, categoryId: category })),
    // arrayCategoryId.map((category) => ({ postId, categoryId: category.id })),
  );

  // console.log(await db.PostCategory.findAll());
 },
};

module.exports = postCategoryService;