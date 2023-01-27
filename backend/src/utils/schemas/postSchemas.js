const Joi = require('joi');

const required = 'Some required fields are missing';

const postSchema = {
  createPost: Joi.object({
    title: Joi.string().min(1).required().messages({
      'any.required': required,
      'string.empty': required,
    }),
    content: Joi.string().min(1).required().messages({
      'any.required': required,
      'string.empty': required,
    }),
    categories: Joi.array().items(Joi.string().min(2).max(20)),
  }),
  findPost: Joi.object({
    id: Joi.number().positive().required().messages({
      'any.required': required,
      'string.empty': required,
    }),
  }).required(),
  editPost: Joi.object({
    title: Joi.string().min(1).required().messages({
      'any.required': required,
      'string.empty': required,
    }),
    content: Joi.string().min(1).required().messages({
      'any.required': required,
      'string.empty': required,
    }),
  }).required(),
  findPostByQuery: Joi.object({
    q: Joi.string().allow('').required().messages({
      'any.required': required,
    }),
  }).required(),
  findPostByOffset: Joi.object({
    q: Joi.number().min(0).required().messages({
      'any.required': required,
    }),
  }).required(),
};

module.exports = postSchema;
