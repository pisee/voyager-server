var express = require('express'), router = express.Router();
var couchdb = require('../../helpers/couchdb');
var dbName = 'testdb';
var testdb = couchdb.use(dbName);

// Create Sample Document
router.post('/insertSampleData', function(req, res){
	
	// sample document (ex. req.body.data)
	var testDocument = {
		Title: "A Brief History of Time", 
        Author: "Stephen Hawking", 
        Type: "Paperback – Unabridged, September 1, 1998", 
        ISBN: "978-0553380163"
	}

	// param 1: document
	// param 2: document id
	testdb.insert(testDocument, testDocument.ISBN, function(err, body){
		if(err){
			console.log('[',dbName,'.list] ', err.message);
			return;
		}else{
			res.json(body);
		}
	});
});

// Read Sample Document
router.post('/getSampleData', function(req, res){

	// sample document (ex. req.body.data)
	var testDocument = {
		Title: "A Brief History of Time", 
        Author: "Stephen Hawking", 
        Type: "Paperback – Unabridged, September 1, 1998", 
        ISBN: "978-0553380163"
	}

	// param 1: document id
	testdb.get(testDocument.ISBN, function(err, body){
		if(err){
			console.log('[',dbName,'.list] ', err.message);
			return;
		}else{
			res.json(body);
		}
	});
});

// Read Sample View
router.get('/getSampleView', function(req, res){
	// param 1: design name
	// param 2: view name
	testdb.view('sample', 'sample1', function(err, body){
		if(err){
			console.log('[',dbName,'.list] ', err.message);
			return;
		}else{
			res.json(body);
		}
	});
});

// Update Sample Document
router.post('/updateSampleData', function(req, res){
	
	// sample document (ex. req.body.data)
	var testDocument = {
		Title: "A Brief History of Time", 
        Author: "Stephen Hawking", 
        Type: "Paperback – Unabridged, September 1, 1998", 
        ISBN: "978-0553380163"
	}

	testdb.get(testDocument.ISBN, function(err, body){
		if(err){
			console.log('[',dbName,'.list] ', err.message);
			return;
		}else{
			// Document title change
			body.Title = 'Tesing Time2';
			// param 1: document
			// param 2: document id
			testdb.insert(body, body._id, function(err, body){
				if(err){
					console.log('[',dbName,'.list] ', err.message);
					return;
				}else{
					res.json(body);
				}
			});
		}

	});
});


// Delete Sample Document
router.post('/deleteSampleData', function(req, res){
	
	// sample document (ex. req.body.data)
	var testDocument = {
		Title: "A Brief History of Time", 
        Author: "Stephen Hawking", 
        Type: "Paperback – Unabridged, September 1, 1998", 
        ISBN: "978-0553380163"
	}

	testdb.get(testDocument.ISBN, function(err, body){
		if(err){
			console.log('[',dbName,'.list] ', err.message);
			return;
		}else{
			// param 1: document id => testDocument.ISBN
			// param 2: _rev
			testdb.destroy(body._id, body._rev, function(err, body){
				if(err){
					console.log('[',dbName,'.list] ', err.message);
					return;
				}else{
					res.json(body);
				}
			});
		}
		
	});
});

module.exports = router;