var mongo = require('mongodb').MongoClient;
mongo.connect('mongodb://localhost:27017/learnyoumongo', function(err, db) {
    if(err) throw err;
    var users = db.collection('users');

    users.update({
        username: "tinatime"
    },{
        $set:{
            age: 40
        }
    }, function(err) {
        if (err) throw err
        db.close()
    });
});