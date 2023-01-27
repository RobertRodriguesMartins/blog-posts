const models = require('../database/models');

const postCategoryService = {
  /**
   * @param {number} postId
   */
  createPostCategory: async (postId, categories) => {
    const promises = [];
    categories.forEach((id) => {
      promises.push(models.PostCategory.create({ postId, categoryId: id }));
    });

    await Promise.all(promises);
  },
  findAll: async () => {
    const post = await models.PostCategory.findAll({
      raw: true,
      attributes: { exclude: ['password'] },
    });

    return post;
  },
  remove: async (id) => {
    await models.PostCategory.destroy({
      where: {
        postId: id,
      },
    });
  },
};

module.exports = postCategoryService;
