/**
 * @type {Record<string, import('joi').Schema>} schemas
 */
const schemas = require('./schemas');

const runSchema = async (schemaName, valuesToVerify) => {
  const response = await schemas[schemaName].validateAsync(valuesToVerify);
  return response;
};

module.exports = runSchema;
