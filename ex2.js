var mongo = require('mongodb').MongoClient

mongo.connect("mongodb://localhost:27017/learnyoumongo",function(err, db){
	if(err) throw err;

	var parrots = db.collection('parrots')//specify the collection
	parrots.find({
		age : {$gt: + process.argv[2]}
		},{
			name: 1,//1 for fields in the request 
			age: 1,
			_id: 0//0 for fields not wanted in the request
		}).toArray(function(err, docs){
			if(err) throw err;
			console.log(docs);
			db.close();
		})
	
})
