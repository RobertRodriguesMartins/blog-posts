const { loginService } = require('../services');
const runSchema = require('../utils/runSchema');
const tokenHandler = require('../utils/tokenHandler');
/**
 * @typedef {import('express').RequestHandler} handler
 */
/**
 * @type {{login: handler}}
 */
const loginController = {
  login: async (req, res) => {
    const user = await runSchema('login', { ...req.body });
    const data = await loginService.login(user);

    const token = await tokenHandler.create(data);
    return res.status(200).json({ token });
  },
};

module.exports = loginController;
