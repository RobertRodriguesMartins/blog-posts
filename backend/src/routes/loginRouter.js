const Router = require('express').Router();
const { loginController } = require('../controllers');

Router.post('/', loginController.login);

module.exports = Router;
