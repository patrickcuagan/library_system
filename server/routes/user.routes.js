module.exports = function(app) {

    var user = require('../controllers/user.controller.js');

    // Create a new Note
    app.post('/signup', user.create);
    app.post('/trysignin', user.login);

 /*   // Retrieve all Notes
    app.get('/notes', user.findAll);

    // Retrieve a single Note with noteId
    app.get('/notes/:userId', user.findOne);

    // Update a Note with noteId
    app.put('/notes/:userId', user.update);

    // Delete a Note with noteId
    app.delete('/notes/:userId', user.delete);*/
}