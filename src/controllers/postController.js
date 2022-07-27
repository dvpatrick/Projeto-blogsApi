const postService = require('../services/postService');
const postCategoryService = require('../services/postCategoryService');
const categoryService = require('../services/categoriesService');
const authService = require('../services/authService');

const categoriesController = {
  registerPost: async (req, res) => {
    const { authorization } = req.headers;

    authService.validateToken(authorization);

    categoryService.validateBody(req.body);

    const verifyIds = await categoryService.verifyIds(req.body.categoryIds);
    if (!verifyIds) res.status(400).json({ message: '"categoryIds" not found' });

    const postRegistred = await postService.register(req.body, 1);
    // console.log(categoryRegistred);

    // postCategoryService.bulkCreate(postRegistred.id, 1); // pega o id que o post foi registrado e manda pra ser vinculado na tabela de post category
    postCategoryService.bulkCreatee(req.body.categoryIds, postRegistred.id); 

    res.status(201).json(postRegistred);
  },

  getAllPost: async (req, res) => {
    const { authorization } = req.headers;
    authService.validateToken(authorization);

    const allCategories = await postService.getAll();

    res.status(200).json(allCategories);
  },
};

module.exports = categoriesController;