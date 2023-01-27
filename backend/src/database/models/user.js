const { userAttributes } = require('./attributes');

/**
 * @param {import('sequelize').Sequelize} sequelize
 */
const userGenerator = (sequelize) => {
  const user = sequelize.define('User', userAttributes, {
    tableName: 'Users',
    timestamps: false,
  });

  user.associate = (models) => {
    user.hasMany(models.BlogPost, { foreignKey: 'userId', as: 'posts' });
  };

  return user;
};

module.exports = userGenerator;
