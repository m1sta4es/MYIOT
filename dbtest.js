var MongoClient = require('mongodb').MongoClient;
var url = 'mongodb://localhost:27017/myiot';
MongoClient.connect(url,function(err,db){
    console.log("connected correctly to server");
    db.close();
});
