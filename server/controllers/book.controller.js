var Book = require('../models/book.model.js');

exports.create = function(req, res) {
    // Create and Save a new Note
    if(!req.body.title) {
        res.status(400).send({message: "Title can not be empty"});
    }
    if(!req.body.author) {
        res.status(400).send({message: "Author can not be empty"});
    }
    if(!req.body.genre) {
        res.status(400).send({message: "Genre can not be empty"});
    }
    if(!req.body.description) {
        res.status(400).send({message: "Description can not be empty"});
    }
    if(!req.body.year) {
        res.status(400).send({message: "Year can not be empty"});
    }

    var book = new Book({title: req.body.title, author: req.body.author, genre: req.body.genre, description: req.body.description, year: req.body.year});

    book.save(function(err, data) {
        if(err) {
            console.log(err);
            res.status(500).send({message: "Some error ocuured while creating the book."});
        } else {
            res.send(data);
        }
    });
};

exports.findAll = function(req, res) {
    // Retrieve and return all notes from the database.
    Book.find(function(err, books){
        if(err) {
            res.status(500).send({message: "Some error ocuured while retrieving books."});
        } else {
            res.send(books);
        }
    });
};

exports.findOne = function(req, res) {
    // Find a single note with a noteId
    Book.findById(req.params.bookId, function(err, data) {
        if(err) {
            res.status(500).send({message: "Could not retrieve book with id " + req.params.bookId});
        } else {
            res.send(data);
        }
    });
};

exports.update = function(req, res) {
    // Update a note identified by the noteId in the request
    console.log(req.params.bookId);
    Book.findById(req.params.bookId, function(err, book) {
        if(err) {
            res.status(500).send({message: "Could not find a book with id " + req.params.bookId});
        }

        book.title = req.body.title;
        book.genre = req.body.genre;
        book.author = req.body.author;
        book.description = req.body.description;
        book.year = req.body.year;

        book.save(function(err, data){
            if(err) {
                res.status(500).send({message: "Could not update book with id " + req.params.bookId});
            } else {
                res.send(data);
            }
        });
    });
};

exports.delete = function(req, res) {
    // Delete a note with the specified noteId in the request
    Book.remove({_id: req.params.bookId}, function(err, data) {
        if(err) {
            res.status(500).send({message: "Could not delete book with id " + req.params.id});
        } else {
            res.send({message: "Book deleted successfully!"})
        }
    });
};

