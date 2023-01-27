const { userService } = require('../services');
const CustomError = require('../utils/customError');
const runSchema = require('../utils/runSchema');
const jwtHandler = require('../utils/tokenHandler');
/**
 * @typedef {import('express').RequestHandler} handler
 */
/**
 * @type {{create: handler}}
 */
const userController = {
  create: async (req, res) => {
    const user = await runSchema('create', { ...req.body });
    const exists = await userService.findOneByEmail(user);
    if (exists) throw new CustomError('EmailInUseError', 'User already registered');

    const { password, image, ...correct } = await userService.create(user);
    const token = await jwtHandler.create(correct);
    return res.status(201).json({ token });
  },

  findAll: async (req, res) => {
    const users = await userService.findAll();

    return res.status(200).json(users);
  },

  findById: async (req, res) => {
    const { id } = await runSchema('byId', { ...req.params });
    const user = await userService.findById(id);

    if (!user) throw new CustomError('NotFoundError', 'User does not exist');
    return res.status(200).json(user);
  },
  remove: async (req, res) => {
    const user = await userService.findById(req.userId.id);
    if (!user) throw new CustomError('NotAllowedError', 'User does not exist');

    await userService.remove(req.userId.id);
    return res.status(204).end();
  },
};

module.exports = userController;
