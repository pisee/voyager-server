var express = require('express'), router = express.Router();
var usersModel = require('../../models/examples/users');

router.post('/', function(req, res, next){
//	next();
	
	var reqbody = req.body;
	var id = reqbody.id;
	var name = reqbody.name;
	console.log('request.body :', reqbody);
    
	usersModel.insertUser(id, name, function(err, data){
		res.send(data);
	});
});

router.get('/', function(req, res) {
	usersModel.getListAll(function(err, data) {
        var values = [];
        for(var i=0; i < data.rows.length ; i++) {
            values.push(data.rows[i].value);
        }
        res.send(data);
    });
});

router.get('/:userId', function(req, res) {
	usersModel.getListUser(req.params.id, function(err, data) {
		var values = [];
		for(var i=0; i < data.rows.length ; i++) {
			values.push(data.rows[i].value);
		}
		
		res.send(values);
	});
});



router.post('/create', function(req, res, next){
	usersModel.createUser(function(err, data){
		res.json(data);
	});
});
router.post('/destroy', function(req, res, next){
	usersModel.destroyUser(function(err, data){
		res.json(data);
	});
});

module.exports = router;