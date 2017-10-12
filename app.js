var express = require('express');
var app = express();

app.use('/client', express.static(__dirname + '/client'));


// User profile
app.get('/signin', function(req, res){
	res.sendfile(__dirname + '/client/views/signin.html');
})

app.get('/signup', function(req, res){
	res.sendfile(__dirname + '/client/views/signup.html');
})

app.get('/profile', function(req, res){
	res.sendfile(__dirname + '/client/views/profile.html');
})

app.get('/settings', function(req, res){
	res.sendfile(__dirname + '/client/views/setting.html');
})

// Books
app.get('/', function(req, res){
	res.sendfile(__dirname + '/client/views/gallery.html');
})

app.get('/book', function(req, res){
	res.sendfile(__dirname + '/client/views/book.html');
})

app.get('/search', function(req, res){
	res.sendfile(__dirname + '/client/views/search.html');
})

// Admin
app.get('/manage_users', function(req, res){
	res.sendfile(__dirname + '/client/views/manage_users.html');
})

app.get('/manage_books', function(req, res){
	res.sendfile(__dirname + '/client/views/manage_books.html');
})


app.listen(3000, function(){
	console.log("Server started on port 3000");
})