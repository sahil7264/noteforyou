const mongoose = require('mongoose');
const { Schema } = mongoose;

const noteSchema = new Schema({
    title: { type: String, required: true },
    userId: { type: String, required: true },
    description: { type: String, required: true },
    access: { type: Number, required: true },
});

const note = mongoose.model('note', noteSchema);
module.exports = note;
