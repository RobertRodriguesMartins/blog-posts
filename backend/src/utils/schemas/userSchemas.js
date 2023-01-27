const Joi = require('joi');

const required = 'Some required fields are missing';

const userSchema = {
  create: Joi.object({
    displayName: Joi.string().min(8).required().messages({
      'any.required': required,
      'string.empty': required,
      'string.min': '"displayName" length must be at least 8 characters long',
    }),
    email: Joi.string().min(1).email().required()
.messages({
      'any.required': required,
      'string.empty': required,
    }),
    password: Joi.string().min(6).required().messages({
      'any.required': required,
      'string.empty': required,
      'string.min': '"password" length must be at least 6 characters long',
    }),
    image: Joi.string().allow(null),
  }).required(),
  byId: Joi.object({
    id: Joi.number().positive().required().messages({
      'any.required': required,
      'string.empty': required,
    }),
  }).required(),
};

module.exports = userSchema;
