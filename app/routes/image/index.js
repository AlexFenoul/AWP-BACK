const image = require('express').Router();

const single = require('./single');
const create = require('./create');
const images = require('./images');

const Authentication = require.main.require('./app/validation/auth/auth');
const CreateValidation = require.main.require('./app/validation/image/create');
const GetImages = require.main.require('./app/validation/image/create');


image.get('/', images);


/**
 * @api {get} /note/:id Get note
 * @apiName GetNotes
 * @apiGroup Note
 *
 * @apiParam {String} id Note unique ID.
 *
 * @apiSuccess {String} title Title of the note.
 * @apiSuccess {String} text Text of the note.
 */
image.get('/:id', Authentication, single);


image.post('/', CreateValidation, create);

module.exports = image;
