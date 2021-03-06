var express = require('express'), router = express.Router();

router.use('/rest', require('./rest'));
router.use('/users', require('./users'));
router.use('/sample', require('./sample'));

router.get('/', function(req, res, next) {
	next();
    res.send('It works!!');
});

module.exports = router;