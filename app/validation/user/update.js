const Joi = require('joi');

module.exports = (req, res, next) => {
  const schema = Joi.object().keys({
    pseudo: Joi.string().min(2),
    password: Joi.string(),
    favorite: Joi.array(),
  }) 

  Joi.validate({
    pseudo: req.body.firstname,
    password: req.body.password,
    favorite: req.body.favorite,
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
