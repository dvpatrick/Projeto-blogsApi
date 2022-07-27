const loginService = require('../services/loginService');

const loginController = {
  login: async (req, res) => {
    const { email, password } = loginService.validateBody(req.body);

    const token = await loginService.login(email, password);

    res.status(200).json({ token });
  },
};

module.exports = loginController;