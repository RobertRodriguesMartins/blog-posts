const Router = require('express').Router();
const { categoryController } = require('../controllers');
const { tokenMiddleware } = require('../middlewares');

Router.use(tokenMiddleware)
  .post('/', categoryController.create)
  .get('/', categoryController.findAll);

module.exports = Router;
