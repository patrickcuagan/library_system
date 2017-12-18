var User = require('../models/user.model.js');

exports.create = function(req, res) {
    // Create and Save a new Note
    if(!req.body.username) {
        res.status(400).send({message: "Username can not be empty"});
    }
    if(!req.body.password) {
        res.status(400).send({message: "Password can not be empty"});
    }

    var user = new User({username: req.body.username, password: req.body.password});

    user.save(function(err, data) {
        if(err) {
            console.log(err);
            res.status(500).send({message: "Some error ocuured while creating the user."});
        } else {
            res.send(data);
        }
    });
};

exports.findAll = function(req, res) {
    // Retrieve and return all notes from the database.
    User.find(function(err, users){
        if(err) {
            res.status(500).send({message: "Some error ocuured while retrieving notes."});
        } else {
            res.send(users);
        }
    });
};

exports.findOne = function(req, res) {
    // Find a single note with a noteId
    User.findById(req.params.userId, function(err, data) {
        if(err) {
            res.status(500).send({message: "Could not retrieve note with id " + req.params.noteId});
        } else {
            res.send(data);
        }
    });
};

exports.update = function(req, res) {
    // Update a note identified by the noteId in the request
    User.findById(req.params.userId, function(err, user) {
        if(err) {
            res.status(500).send({message: "Could not find a note with id " + req.params.userId});
        }

        user.username = req.body.username;
        user.password = req.body.password;

        user.save(function(err, data){
            if(err) {
                res.status(500).send({message: "Could not update note with id " + req.params.userId});
            } else {
                res.send(data);
            }
        });
    });
};

exports.delete = function(req, res) {
    // Delete a note with the specified noteId in the request
    User.remove({_id: req.params.userId}, function(err, data) {
        if(err) {
            res.status(500).send({message: "Could not delete note with id " + req.params.id});
        } else {
            res.send({message: "Note deleted successfully!"})
        }
    });
};

exports.login = function (req, res){
    User.find(req.body, function (err, results){
        if (err){
            console.log("Error Out");
        }
        
        if (results && results.length === 1){
            var userData= results[0];
            res.send({username: userData.username});
        }   else {
            res.send({username: "fail"});
        }
    })
}

