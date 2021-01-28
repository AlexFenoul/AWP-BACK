const user = require('express').Router();

const profile = require('./profile');
const update = require('./update');
const favorites = require('./favorites');

const Authentication = require.main.require('./app/validation/auth/auth');
const UpdateValidation = require.main.require('./app/validation/user/update');
const DeleteValidation = require.main.require('./app/validation/user/delete');

user.get('/', Authentication, profile);
user.put('/', Authentication, UpdateValidation, update);
user.get('/favorites', Authentication, favorites);

module.exports = user;
