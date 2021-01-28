const mongoose = require('mongoose');

const { Schema } = mongoose;

const UserSchema = new Schema({
  pseudo: {
    type: String, required: [true, "can't be blank"],
  },
  password: {
    type: String, required: [true, "can't be blank"],
  },
  favorite: [{
    type: Schema.ObjectId,
    ref: 'Image'
  }]
}, { timestamps: true });

module.exports = UserSchema;
