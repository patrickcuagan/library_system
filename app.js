var Server = require('./server.js');
var router = require('./router.js');
var config = require('config');


var app = new Server(config.get('port'), router);
app.start();

