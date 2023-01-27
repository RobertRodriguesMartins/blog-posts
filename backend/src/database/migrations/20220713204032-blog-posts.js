const { blogPostsAttributes } = require('../models/attributes');

const blogPostsMigration = {
  /**
   * @param {import("sequelize").QueryInterface} queryInterface
   */
  up: async (queryInterface) => {
    return queryInterface.createTable('BlogPosts', blogPostsAttributes);
  },
  /**
   * @param {import("sequelize").QueryInterface} queryInterface
   */
  down: async (queryInterface) => {
    return queryInterface.dropTable('BlogPosts');
  },
};

module.exports = blogPostsMigration;
