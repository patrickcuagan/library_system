var Book = require('../models/book.js');
var mongoose = require('mongoose');

//POST /Book
exports.create = function(req, res) {

    var book = req.body;

    var entry = new Book({
        title: book.title,
	    author: book.author,
	    genre: book.genre,
	    description: book.description,
	    year: book.year
    });

    entry.save(function(err, data) {
        if(err) return console.error(err);
    });

    res.status(204).send();
}

//GET /Book/:id
exports.getById = function(req, res, next) {
    return next(new Error('Oops this is an intentional error'));

    var id = req.params.id;

    if(!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).send();
    } else {
        Book.findById(id, function(err, data) {
            if(err) return next(err);

            if(data) {
                res.status(200).json(data);
            } else {
                res.status(404).send();
            }
        });
    }
}

//GET /Book
exports.getAll = function(req, res) {

    Book.find(function(err, data) {
        if(err) return console.error(err);

        res.status(200).json(data);
    });
}

//PUT /Book/:id
exports.update = function(req, res) {
    
    var id = req.params.id;
    var book = req.body;

    Book.findById(id, function(err, entry) {
        if(err) return console.error(err);

        entry.yesterday = book.yesterday;
        entry.today = book.today;
        entry.impediment = book.impediment;

        entry.save(function(err, data) {
            if(err) return console.error(err);

            res.status(204).send();
        });
    });

}

//DELETE /Book/:id
exports.delete = function(req, res) {
    var id = req.params.id;
    Book.findByIdAndRemove(id, function(err, data) {
        if(err) return console.error(err);

        res.status(204).send();
    });
}
