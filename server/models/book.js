var mongoose = require('mongoose');

var bookSchema = mongoose.Schema({
    title: String,
    author: String,
    genre: String,
    description: String,
    year: String
});

var Book = mongoose.model('Book', bookSchema);

module.exports = Book;
