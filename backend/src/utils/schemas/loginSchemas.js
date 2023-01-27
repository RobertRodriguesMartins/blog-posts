const Joi = require('joi');

const loginSchema = {
  login: Joi.object({
    email: Joi.string().min(1).email().required()
.messages({
      'any.required': 'Some required fields are missing',
      'string.empty': 'Some required fields are missing',
    }),
    password: Joi.string().min(1).required().messages({
      'any.required': 'Some required fields are missing',
      'string.empty': 'Some required fields are missing',
    }),
  }).required(),
};

module.exports = loginSchema;
