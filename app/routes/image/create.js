const mongoose = require('mongoose');
const bcrypt = require('bcrypt-nodejs');

module.exports = (req, res, next) => {
  const ImageModel = mongoose.model('Image');


  const Image = new ImageModel({
    name: req.body.name,
    description: req.body.description,
    url: req.body.url
  });

  ImageModel.countDocuments({ name: req.body.name }, (err, count) => {
    if (count !== 0) {
      return next({
        status: 401,
        message: 'Name is already taken by another image.',
      });
    }

    return Image.save((saveErr) => {
      if (saveErr) {
        return next({
          status: 500,
          message: 'Database error',
          error: [saveErr],
        });
      }

      return res.status(201).json({ success: true, message: 'Success' });
    });
  });
};
