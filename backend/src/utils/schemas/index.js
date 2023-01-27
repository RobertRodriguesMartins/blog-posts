const loginSchemas = require('./loginSchemas');
const userSchemas = require('./userSchemas');
const tokenSchemas = require('./tokenSchemas');
const categorySchemas = require('./categorySchemas');
const postSchemas = require('./postSchemas');

module.exports = {
  ...loginSchemas,
  ...userSchemas,
  ...tokenSchemas,
  ...categorySchemas,
  ...postSchemas,
};
