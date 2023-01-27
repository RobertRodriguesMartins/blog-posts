const CustomError = require('../utils/customError');
const runSchema = require('../utils/runSchema');
const jwtHandler = require('../utils/tokenHandler');

/**
 * @type {import('express').RequestHandler}
 */
const tokenValidation = async (req, _res, next) => {
  const token = await runSchema('validate', req.headers.authorization).catch(
    (e) => {
      throw new CustomError('TokenError', e.message);
    },
  );
  await jwtHandler.verify(token).catch(() => {
    throw new CustomError('TokenError', 'Expired or invalid token');
  });
  req.token = token;
  req.userId = await jwtHandler.decode(token);

  next();
};

module.exports = tokenValidation;
