var express = require('express');
var logger = require('./logger.js');
var ctrl = require('./server/controllers/book-controller.js');

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
