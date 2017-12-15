var mongoose = require('mongoose');

var BookSchema = mongoose.Schema({
    title: String,
    author: String,
    genre: String,
    description: String,
    year: String
}, {
    timestamps: true
});

module.exports = mongoose.model('Book', BookSchema);