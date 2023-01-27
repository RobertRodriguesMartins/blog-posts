const { DataTypes } = require('sequelize');

/**
 * @type {import('sequelize').ModelAttributes}
 */
const blogPostsAttributes = {
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  content: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  userId: {
    type: DataTypes.INTEGER,
    allowNull: true,
    field: 'userId',
    references: {
      key: 'id',
      model: 'Users',
    },
    onDelete: 'SET NULL',
    onUpdate: 'NO ACTION',
  },
  published: {
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue: new Date(),
    onUpdate: 'NO ACTION',
  },
  updated: {
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue: new Date(),
    onUpdate: new Date(),
  },
};

module.exports = blogPostsAttributes;
