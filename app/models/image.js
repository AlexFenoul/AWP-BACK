const mongoose = require('mongoose');

const { Schema } = mongoose;

const ImageSchema = new Schema({
    name: {
        type: String, required: [true, "can't be blank"],
    },
    description: {
        type: String, required: [true, "can't be blank"],
    },
    url: {
        type: String, required: [true, "can't be blank"]
    }
}, { timestamps: true });

module.exports = ImageSchema;