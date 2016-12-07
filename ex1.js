//use the parrots collection to find all documents where age is greater
//then the first arg in the script
//potato
var mongo = require('mongodb').MongoClient

mongo.connect("mongodb://localhost:27017/learnyoumongo",function(err, db){
	if(err) throw err;
	
	var parrots = db.collection('parrots')//specifying the collection
	parrots.count({
		age: {$gt: + process.argv[2]}//querying the collection 
		}).toArray(function(err, count){//converting results to arr
			if(err) throw err;
			console.log(count)//print results
			db.close();//close the db
		})
}) 

