const mongoose = require('mongoose');

const UserSchema = require.main.require('./app/models/user');
const ImageSchema = require.main.require('./app/models/image');

const db = require('./db.config');

mongoose.connect(`mongodb://${db.host}/${db.name}`, db.opts);

mongoose.connection.on('connected', () => {
  mongoose.model('User', UserSchema);
  mongoose.model('Image', ImageSchema);
});
