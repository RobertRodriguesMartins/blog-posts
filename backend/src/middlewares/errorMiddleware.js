const cases = {
  ValidationError: 400,
  InvalidFieldsError: 400,
  TokenError: 401,
  NotFoundError: 404,
  EmailInUseError: 409,
  NotAllowedError: 401,
};
/**
 * @param {Error} err
 * @type {import('express').ErrorRequestHandler}
 */
const errorMiddleware = (err, _req, res, _next) => {
  const { name } = err;

  const code = cases[name];
  if (code) {
    return res.status(code).json({ message: err.message });
  }

  return res.status(500).json({ message: err.message });
};

module.exports = errorMiddleware;
