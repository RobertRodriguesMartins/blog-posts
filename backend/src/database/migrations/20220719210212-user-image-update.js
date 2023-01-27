const { userAttributes } = require('../models/attributes');

const usersMigration = {
  /**
   * @param {import("sequelize").QueryInterface} queryInterface
   */
  up: async (queryInterface) => {
    return queryInterface.changeColumn('Users', 'image', {
      ...userAttributes.image,
    });
  },
  /**
   * @param {import("sequelize").QueryInterface} queryInterface
   */
  down: async (queryInterface) => {
    await queryInterface.dropTable('Users');
    await queryInterface.createTable('Users', userAttributes);
  },
};

module.exports = usersMigration;
