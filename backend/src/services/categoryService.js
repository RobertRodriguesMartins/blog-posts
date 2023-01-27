const models = require('../database/models');

const userService = {
  /**
   * @param {number[]} categories
   * @param {{name: string}} categoryObject
   */
  findByName: async (categoryObject) => {
    const category = await models.Category.findOne({
      where: {
        name: categoryObject.name,
      },
    });

    return category;
  },
  findManyByName: async (categories) => {
    const findedCategories = [];
    categories.forEach((categoryName) => {
      findedCategories.push(
        models.Category.findOne({
          where: {
            name: categoryName,
          },
          raw: true,
        }),
      );
    });
    const categoriesIds = [];
    const result = await Promise.all(findedCategories);
    result.forEach(({ id }) => {
      categoriesIds.push(id);
    });
    return categoriesIds;
  },
  findAll: async () => {
    const categories = await models.Category.findAll({
      raw: true,
    });

    return categories;
  },
  findById: async (id) => {
    const category = await models.Category.findOne({
      where: {
        id,
      },
    });

    return category;
  },
  create: async (categoryObject) => {
    const { dataValues: category } = await models.Category.create(
      categoryObject,
    );
    return category;
  },
  /**
   * @param {string[]} categories
   */
  findOrCreateMany: async (categories) => {
    const promises = [];
    categories.forEach((category) => {
      promises.push(
        models.Category.findOrCreate({
          where: {
            name: category,
          },
        }),
      );
    });
    await Promise.all(promises);
  },
};

module.exports = userService;
