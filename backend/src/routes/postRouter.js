const Router = require('express').Router();
const { postController } = require('../controllers');
const { tokenMiddleware } = require('../middlewares');

Router.get('/some', postController.findByOffset)
  .get('/offset', postController.findMaxOffset)
  .get('/count', postController.countAllPosts)
  .use(tokenMiddleware)
  .post('/', postController.create)
  .get('/search', postController.findOneByQuery)
  .get('/:id', postController.findOne)
  .get('/', postController.findAll)
  .put('/:id', postController.edit)
  .delete('/:id', postController.remove);

module.exports = Router;
