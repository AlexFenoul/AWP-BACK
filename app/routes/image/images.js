const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
  const ImageModel = mongoose.model('Image');

  const { user } = jwt.decode(req.headers.authorization);

  return ImageModel.find()
    .lean()
    .exec()
    .then(result => res.status(200).json(result))
    .catch(() => next({ status: 404, message: 'Images does not exists.' }));
};

