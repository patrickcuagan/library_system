var express = require('express');
var logger = require('./logger.js');
var jwt = require("jsonwebtoken");
var ctrl = require('./server/controllers/book-controller.js');
var sessionCtrl = require("./server/controllers/session.server.controller.js");
var bookCtrl = require("./server/controllers/meeting.server.controller.js");
var router = express.Router();

//routes

router.post('/book', ctrl.create);
router.get('/book/:id', ctrl.getById);
router.get('/books', ctrl.getAll);
router.put('/book/:id', ctrl.update);
router.patch('/book/:id', ctrl.update);
router.delete('/book/:id', ctrl.delete);

router.use(function(err, req, res, next) {
    logger.error(err);
    next(err);
});

router.use(function(req, res, next) {
    var token = req.headers.authorization;

    if(!req.url.startsWith("/session"))
    {
        if(!token) {
            return res.status(401).send();
        } else {
            jwt.verify(token, "secret", function(error, decoded) {
                if(error) {
                    return res.status(401).send();
                } else {
                    req.decoded = decoded;
                    next();
                }
            });
        }
    } else {
        next();
    }
});

router.use(function(req, res, next) {
    if(!req.url.startsWith("/session")) {
        console.log(req.decoded);

        var access = req.decoded.access.split(",");

        if(req.url.includes("/book/:id") && access.includes("book_manage")) {
            next();
        } else {
            return res.status(401).send();
        }

    } else {
        next();
    }
});

router.use(function(err, req, res, next) {
    if(req.xhr) {
        res.status(500).json({ error: "Server exception occurred." });
    } else {
        next(err);
    }
});

router.use(function(err, req, res, next) {
    res.status(err.statusCode || 500).json({ error: err });
});

module.exports = router;
