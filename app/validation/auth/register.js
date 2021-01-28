const Joi = require('joi');

module.exports = (req, res, next) => {
  const schema = Joi.object().keys({
    pseudo: Joi.string().min(2).required(),
    password: Joi.string().required(),
  });

  Joi.validate({
    pseudo: req.body.pseudo,
    password: req.body.password,
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
