const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
  const UserModel = mongoose.model('User');

  const { user } = jwt.decode(req.headers.authorization);

  return UserModel.findById(user.id, 'id pseudo')
    .lean()
    .exec()
    .then(result => res.status(200).json(result))
    .catch(() => next({ status: 404, message: 'User does not exists.' }));
};
