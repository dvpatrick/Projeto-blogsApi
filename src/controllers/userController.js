const userService = require('../services/userService');
const authService = require('../services/authService');

const userController = {
  registerUser: async (req, res) => {
    const { displayName, email, password, image } = userService.validateBody(req.body);

    const userCreated = await userService.register(displayName, email, password, image);

    res.status(201).json({ token: userCreated });
  },

  getUsers: async (req, res) => {
    const { authorization } = req.headers;
    authService.validateToken(authorization);

    const allUsers = await userService.getUsers();

    res.status(200).json(allUsers);
  },

  getById: async (req, res) => {
    const { authorization } = req.headers;
    authService.validateToken(authorization);

    const user = await userService.getById(req.params.id);

    if (!user) res.status(404).json({ message: 'User does not exist' });

    res.status(200).json(user);
  },
};

module.exports = userController;