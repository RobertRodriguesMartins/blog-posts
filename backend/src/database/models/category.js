const { categoriesAttributes } = require('./attributes');

/**
 * @param {import('sequelize').Sequelize} sequelize
 */
const categoriesGenerator = (sequelize) => {
  const categories = sequelize.define('Category', categoriesAttributes, {
    tableName: 'Categories',
    timestamps: false,
  });

  return categories;
};

module.exports = categoriesGenerator;
