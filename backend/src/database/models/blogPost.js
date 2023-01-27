const { blogPostsAttributes } = require('./attributes');

/**
 * @param {import('sequelize').Sequelize} sequelize
 */
const blogPostsGenerator = (sequelize) => {
  const blogPosts = sequelize.define('BlogPost', blogPostsAttributes, {
    timestamps: false,
    tableName: 'BlogPosts',
  });

  blogPosts.associate = (models) => {
    blogPosts.belongsTo(models.User, { foreignKey: 'userId', as: 'user' });
  };

  return blogPosts;
};

module.exports = blogPostsGenerator;
