const Joi = require('joi');

module.exports = (req, res, next) => {
  const schema = Joi.object().keys({
    name: Joi.string().min(2).required(),
    description: Joi.string().min(2).required(),
    url: Joi.string().min(2).required()
  });

  Joi.validate({
    name: req.body.name,
    description: req.body.description,
    url: req.body.url,
  },
  schema, (validateErr) => {
    if (validateErr) {
      return next({
        status: 400,
        message: 'Form is invalid.',
        error: validateErr.details,
      });
    }

    return next();
  });
};
