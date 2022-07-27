const categoriesService = require('../services/categoriesService');
const authService = require('../services/authService');

const categoriesController = {
  registerCategory: async (req, res) => {
    const { authorization } = req.headers;
    const { name } = req.body;

    authService.validateToken(authorization);
    if (!name) res.status(400).json({ message: '"name" is required' });

    const categoryRegistred = await categoriesService.register(name);
    console.log(categoryRegistred);

    res.status(201).json(categoryRegistred);
  },

  getAllCategories: async (req, res) => {
    const { authorization } = req.headers;
    authService.validateToken(authorization);

    const allCategories = await categoriesService.getAll();

    res.status(200).json(allCategories);
  },
};

module.exports = categoriesController;