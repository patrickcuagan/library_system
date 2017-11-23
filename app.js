var Server = require('./server.js');
var router = require('./router.js');
var logger = require('./logger.js');
var mongoose = require('mongoose');
var config = require('config');

//database
var options = {
    keepAlive: 1, 
    useMongoClient: true 
};
mongoose.connect(config.get('db'), options);
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    logger.info('Database connection successful.');
});

var app = new Server(config.get('port'), router);
app.start();