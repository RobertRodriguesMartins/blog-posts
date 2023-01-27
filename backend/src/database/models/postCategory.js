const { postCategoriesAttributes } = require('./attributes');

/**
 * @param {import('sequelize').Sequelize} sequelize
 */
const postsCategories = (sequelize) => {
  const postsCategories = sequelize.define(
    'PostCategory',
    postCategoriesAttributes,
    {
      tableName: 'PostCategories',
      timestamps: false,
    }
  );

  postsCategories.associate = (models) => {
    models.BlogPost.belongsToMany(models.Category, {
      as: 'categories',
      foreignKey: 'postId',
      through: models.PostCategory,
    });
    models.Category.belongsToMany(models.BlogPost, {
      as: 'posts',
      foreignKey: 'categoryId',
      through: models.PostCategory,
    });
  };

  return postsCategories;
};

module.exports = postsCategories;
