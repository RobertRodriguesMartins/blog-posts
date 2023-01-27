const { postCategoriesAttributes } = require('../models/attributes');

const postsCategoriesMigration = {
  /**
   * @param {import("sequelize").QueryInterface} queryInterface
   */
  up: async (queryInterface) => {
    return queryInterface.createTable(
      'PostCategories',
      postCategoriesAttributes
    );
  },
  /**
   * @param {import("sequelize").QueryInterface} queryInterface
   */
  down: async (queryInterface) => {
    return queryInterface.dropTable('PostCategories');
  },
};

module.exports = postsCategoriesMigration;
