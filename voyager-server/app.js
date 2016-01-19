var express = require('express')
, bodyParser = require('body-parser')
, cors = require('cors')
, path = require('path');
var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', __dirname + '/views');
app.set('view engine', 'jade');

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(require('./controllers'));

// Error-handling middleware
app.use(function(err, req, res, next) {
	console.log('Error-handling middleware', ', Time:', Date.now(), ', req.originalUrl :'+req.originalUrl, ', req.path :'+req.path);
	console.error(err.stack);
	res.status(500).send('Something broke!');
});

// Application-level middleware
app.use(function (req, res, next) {
	console.log('Application-level middleware', ', Time:', Date.now(), ', req.method :', req.method, ', req.originalUrl :'+req.originalUrl, ', req.path :'+req.path);
	next();
});

app.set('port', process.env.PORT || 3000);
app.listen(app.get('port'), function() {
	console.log('Express server listening on port ' + app.get('port'));
});


module.exports = app;