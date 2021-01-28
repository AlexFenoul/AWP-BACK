const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt-nodejs');

module.exports = (req, res, next) => {
  const UserModel = mongoose.model('User');

  const { user } = jwt.decode(req.headers.authorization);

  return UserModel.findOne({ _id: user.id }, (err, userObj) => {
    if (!userObj) {
      return next({ status: 404, message: 'User does not exists.' });
    }

    userObj.pseudo = req.body.pseudo || userObj.pseudo;
    userObj.favorite = req.body.favorite || userObj.favorite;

    const response = {
      _id: userObj._id,
      pseudo: userObj.pseudo,
      favorite: userObj.favorite,
      createdAt: userObj.createdAt,
    };

    return userObj.save(() => res.status(200).json(response));
  });
};
