var express = require('express'), router = express.Router();

router.use('/examples', require('./examples'));

router.use(function (req, res, next) {
  console.log('Router-level middleware', ', Time:', Date.now(), ', req.method :', req.method, ', req.originalUrl :'+req.originalUrl, ', req.path :'+req.path);
  next();
});

router.get('/', function(req, res, next) {
	next();
	res.render('index', { title: 'Express' });
});

module.exports = router;