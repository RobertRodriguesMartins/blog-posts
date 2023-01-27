require('dotenv').config();
/**
 * @type {import('sequelize').Options}
 */
const options = {
  host:
    process.env.MYSQL_PROD_HOSTNAME || process.env.MYSQL_HOSTNAME || 'localhost',
  port: process.env.MYSQL_PROD_PORT || '3306',
  database: process.env.MYSQL_PROD_DB_NAME || 'blogs-api',
  username: process.env.MYSQL_PROD_USER || 'root',
  password: process.env.MYSQL_PROD_PASSWORD || 'password',
  dialect: 'mysql',
  dialectOptions: {
    timezone: 'Z',
  },
  logging: process.env.DEBUG !== 'false',
};

module.exports = options;
