const mongoose = require('mongoose');

const todoSchema = new mongoose.Schema({
    addres: {
        type: String,
        required: true
    },
    phon: {
        type: Number,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    gender: {
        type: String,
        required: true
    },
})
module.exports = mongoose.model('postAPI', todoSchema);