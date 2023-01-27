const { Op } = require('sequelize');
const models = require('../database/models');
const CustomError = require('../utils/customError');

const myAssociations = {
  include: [
    { association: 'user', attributes: { exclude: ['password', 'image'] } },
    {
      association: 'categories',
      through: { attributes: [] },
    },
  ],
};

const postService = {
  /**
   * @param {{title: string, content: string, userId: number}} post
   */
  create: async (post) => {
    const { dataValues: created } = await models.BlogPost.create(post);
    return created;
  },
  countAllPosts: async () => {
    const countedPosts = await models.BlogPost.count();
    return countedPosts;
  },
  edit: async (id, post) => {
    await models.BlogPost.update(post, {
      where: {
        id,
      },
      fields: ['title', 'content'],
    });
  },
  findOne: async (id) => {
    const post = await models.BlogPost.findOne({
      where: {
        id,
      },
      ...myAssociations,
    });
    if (!post) throw new CustomError('NotFoundError', 'Post does not exist');
    return post;
  },
  findOneByQuery: async (name) => {
    const post = await models.BlogPost.findAll({
      where: {
        [Op.or]: [
          {
            content: {
              [Op.like]: `%${name}%`,
            },
          },
          {
            title: {
              [Op.like]: `%${name}%`,
            },
          },
        ],
      },
      ...myAssociations,
    });
    return post;
  },
  findAll: async () => {
    const post = await models.BlogPost.findAll({
      attributes: { exclude: ['password', 'image'] },
      ...myAssociations,
    });

    return post;
  },
  findMaxOffset: async () => {
    const rawOffset = await models.BlogPost.count();
    const offset = Math.floor(rawOffset / 10);
    return offset;
  },
  findByOffset: async (offset) => {
    const posts = await models.BlogPost.findAll({
      include: [
        {
          association: 'categories',
          through: { attributes: [] },
        },
      ],
      limit: 10,
      offset,
      order: [['id', 'DESC']],
    });
    return posts;
  },
  remove: async (id) => {
    await models.BlogPost.destroy({
      where: {
        id,
      },
    });
  },
};

module.exports = postService;
