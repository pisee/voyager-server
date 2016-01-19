var express = require('express'), router = express.Router();

router.use('/rest', require('./rest'));
router.use('/users', require('./users'));

router.get('/', function(req, res, next) {
	next();
    res.send('It works!!');
});

module.exports = router;