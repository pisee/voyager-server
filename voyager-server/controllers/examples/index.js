var express = require('express'), router = express.Router();

router.use('/rest', require('./rest'));

router.get('/', function(req, res, next) {
	next();
    res.send('It works!!');
});

module.exports = router;