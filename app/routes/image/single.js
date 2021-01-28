const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
  const ImageModel = mongoose.model('Image');

  ImageModel.findOne({ _id: req.params.id })
    .lean()
    .exec()
    .then((image) => {
      return res.status(200).json(image);
    })
    .catch(() => next({ status: 404, message: 'Image does not exists.' }));
};
