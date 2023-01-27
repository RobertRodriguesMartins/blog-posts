const Joi = require('joi');

const required = 'Token not found';

const tokenSchema = {
  validate: Joi.string().min(1).required().messages({
    'any.required': required,
    'string.empty': required,
  }),
};

module.exports = tokenSchema;
