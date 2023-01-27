const { userAttributes } = require('../models/attributes');

const usersMigration = {
  /**
   * @param {import("sequelize").QueryInterface} queryInterface
   */
  up: async (queryInterface) => {
    return queryInterface.createTable('Users', userAttributes);
  },
  /**
   * @param {import("sequelize").QueryInterface} queryInterface
   */
  down: async (queryInterface) => {
    return queryInterface.dropTable('Users');
  },
};

module.exports = usersMigration;
