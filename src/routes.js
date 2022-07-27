const { login } = require('./controllers/loginController'); // atencao se da pra desestruturar assim
const { registerUser, getUsers, getById } = require('./controllers/userController');
const { registerCategory, getAllCategories } = require('./controllers/categoriesController');
const { registerPost, getAllPost } = require('./controllers/postController');

module.exports = {
  login,
  registerUser,
  getUsers,
  getById,
  registerCategory,
  getAllCategories,
  registerPost,
  getAllPost,

};
