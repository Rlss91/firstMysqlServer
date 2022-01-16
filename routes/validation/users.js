const Joi = require("joi");

const schema = Joi.object({
  name: Joi.string().alphanum().required(),
  email: Joi.string()
    .email({
      minDomainSegments: 2,
      tlds: { allow: ["com", "net"] },
    })
    .required()
    .messages({
      "any.required": "please input a valid email",
      "string.email": "please use mails only from .com and .net",
    }),
  password: Joi.string()
    .pattern(new RegExp("^[a-zA-Z0-9]{3,30}$"))
    .messages({
      "string.pattern.base": "please enter valid password",
    })
    .required(),
});

module.exports.schema = schema;
