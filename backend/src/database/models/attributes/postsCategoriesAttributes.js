const { DataTypes } = require('sequelize');

/**
 * @type {import('sequelize').ModelAttributes}
 */
const postsCategoriesAttributes = {
  categoryId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    field: 'categoryId',
    primaryKey: true,
    references: {
      key: 'id',
      model: 'Categories',
    },
    onDelete: 'NO ACTION',
  },
  postId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    field: 'postId',
    primaryKey: true,
    references: {
      key: 'id',
      model: 'BlogPosts',
    },
    onDelete: 'CASCADE',
  },
};

module.exports = postsCategoriesAttributes;
