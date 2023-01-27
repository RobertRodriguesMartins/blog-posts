const Joi = require('joi');

const required = '"name" is required';

const categorySchema = {
  createCategory: Joi.object({
    name: Joi.string().min(1).required().messages({
      'any.required': required,
      'string.empty': required,
    }),
  }).required(),
};

module.exports = categorySchema;
