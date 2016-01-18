var express = require('express'), router = express.Router();
var restModel = require('../../models/examples/rest');

router.post('/', function(req, res, next){
	next();
	
	var reqbody = req.body;
	var name = reqbody.name;
	var address = reqbody.address;
    
	console.log('request.body :', reqbody);
    console.log('request.body name is :', name);
    console.log('request.body address is :', address);
    console.log('------------');
    
	restModel.postProcess(name, address, function(data){
		res.json(data);
	});
});

router.get('/', function(req, res, next){
	next();
	
	var reqquery = req.query;
    var name = reqquery.name;
    var address = reqquery.address;

    console.log('request.query :', reqquery);
    console.log('request.query name is :', name);
    console.log('request.query address is :', address);
    console.log('------------');
    
	restModel.getProcess(name, address, function(data){
		res.json(data);
	});
});

router.get('/:name/:address', function(req, res, next){
	next();
	
    reqparams = req.params;
    var name = reqparams.name;
    var address = reqparams.address;
    
    console.log('request.params :', reqparams);
    console.log('request.params name is :', name);
    console.log('request.params address is :', address);
    console.log('------------');
    
	restModel.getProcess(name, address, function(data){
		res.json(data);
	});
});
module.exports = router;

