var couchdb = require('../../helpers/couchdb');
var dbName = 'users';
var users = couchdb.use(dbName);

exports.destroyUser = function(callback){
	couchdb.db.destroy(dbName, function() {
		callback({result:'success'});
	});
};

exports.createUser = function(callback){
	couchdb.db.create(dbName, function() {
		callback({result:'success'});
	});
};

exports.insertUser = function(id, name, callback){
	users.insert({
		'id' : id,
		'name' : name
	}, id, function(err, body, header) {
		if (err) {
			console.log('[', dbName, '.insert] ', err.message);
			return;
		}
		console.log('you have inserted. ', body);
		callback(null, body);
	});
};

exports.getListUser = function(id, callback){
	users.list(function(err, body) {
		if(err) {
			console.log('[',dbName,'.list] ', err.message);
			return;
		}else{
			callback(null, body);
		}
	});
};

exports.getListAll = function(callback){
	users.list(function(err, body) {
		if(err) {
			console.log('[',dbName,'.listAll] ', err.message);
			return;
		}else{
			callback(null, body);
		}
	});
};
