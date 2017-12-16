module.exports = function(app) {

    var book = require('../controllers/book.controller.js');

    // Create a new Note
    app.post('/add_book', book.create);

    // Retrieve all Notes
    app.get('/get_books', book.findAll);

    // Retrieve a single Note with noteId
    app.get('/book/:bookId', book.findOne);

    // Update a Note with noteId
    app.put('/upd_book/:bookId', book.update);

    // Delete a Note with noteId
    app.delete('/del_book/:bookId', book.delete);
}