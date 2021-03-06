var express = require('express');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var logger = require('./logger.js');
var mongoose = require('mongoose');
var config = require('config');

function Server(port, router) {

	this.port = port;

	this.router = router;

	this.start = function() {
		
		var app = express();

        //parsers
        app.use(bodyParser.urlencoded({ extended: true }));
        app.use(bodyParser.json());
        app.use(methodOverride());

        //database
        //database
		var options = {
		    keepAlive: 1, 
		    useMongoClient: true 
		};
		mongoose.connect(config.db, options);

		var db = mongoose.connection;
		db.on('error', console.error.bind(console, 'connection error:'));
		db.once('open', function() {
		    logger.info('Database connection successful.');
		});
		        //routes
        app.use('/public', express.static(__dirname + '/public'));
		app.use('/api', this.router);

		// // User profile
		app.get('/signin', function(req, res){
			res.sendfile(__dirname + '/public/views/signin.html');
		})

		app.get('/signup', function(req, res){
			res.sendfile(__dirname + '/public/views/signup.html');
		})

		// app.get('/profile', function(req, res){
		// 	res.sendfile(__dirname + '/public/views/profile.html');
		// })

		// app.get('/settings', function(req, res){
		// 	res.sendfile(__dirname + '/public/views/setting.html');
		// })

		// Books
		app.get('/', function(req, res){
			res.sendfile(__dirname + '/public/views/manage_books.html');
		})

		// app.get('/book', function(req, res){
		// 	res.sendfile(__dirname + '/public/views/book.html');
		// })

		// app.get('/search', function(req, res){
		// 	res.sendfile(__dirname + '/public/views/search.html');
		// })

		// // Admin
		// app.get('/manage_users', function(req, res){
		// 	res.sendfile(__dirname + '/public/views/manage_users.html');
		// })

		app.get('/manage_books', function(req, res){
			res.sendfile(__dirname + '/public/views/manage_books.html');
		})

		
		
		require('./server/routes/user.routes.js')(app);
		require('./server/routes/book.routes.js')(app);

		app.listen(port, function() {
			logger.info('Server started at port ' + port + '.');
		});
	};
}

module.exports = Server;
