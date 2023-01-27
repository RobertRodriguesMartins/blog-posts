const { categoriesAttributes } = require('../models/attributes');

const categoriesMigration = {
  /**
   * @param {import("sequelize").QueryInterface} queryInterface
   */
  up: async (queryInterface) => {
    return queryInterface.createTable('Categories', categoriesAttributes);
  },
  /**
   * @param {import("sequelize").QueryInterface} queryInterface
   */
  down: async (queryInterface) => {
    return queryInterface.dropTable('Categories');
  },
};

module.exports = categoriesMigration;
