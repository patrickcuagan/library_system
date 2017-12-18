var express = require('express');
var logger = require('./logger.js');
var jwt = require("jsonwebtoken");
//var ctrl = require('./server/controllers/book-controller.js');
//var adminCtrl = require('./server/controllers/admin-controller.js');

//var sessionCtrl = require("./server/controllers/session.server.controller.js");
var bookCtrl = require("./server/controllers/book.controller.js");
var userCtrl = require("./server/controllers/user.controller.js");
var router = express.Router();

router.post("/add_book", bookCtrl.create);
router.delete("/book/:bookId", bookCtrl.delete);
router.put("/edit_book/:bookId", bookCtrl.update);

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
