var mongo = require('mongodb').MongoClient;
mongo.connect('mongodb://localhost:27017/learnyoumongo', function(err, db) {
    if(err) throw err;
    var col = db.collection(users);

    col.remove({
        _id: '54a655c0639034860349353'
    }, function(err) {
        if (err) throw err
        db.close()
    });
});