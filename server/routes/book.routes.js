module.exports = function(app) {

    var book = require('../controllers/book.controller.js');

    // Create a new Note
    app.post('/book', book.create);

    // Retrieve all Notes
    app.get('/book', book.findAll);

    // Retrieve a single Note with noteId
    app.get('/book/:bookId', book.findOne);

    // Update a Note with noteId
    app.put('/book/:bookId', book.update);

    // Delete a Note with noteId
    app.delete('/book/:bookId', book.delete);
}