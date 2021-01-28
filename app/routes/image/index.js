const image = require('express').Router();

const single = require('./single');
const create = require('./create');
const images = require('./images');

const Authentication = require.main.require('./app/validation/auth/auth');
const CreateValidation = require.main.require('./app/validation/image/create');


image.get('/', images);
image.get('/:id', Authentication, single);
image.post('/', CreateValidation, create);

module.exports = image;
