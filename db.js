var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://123.207.46.35:27017/myiot";

function MongoPersistence(){
}
MongoPersistence.prototype.insert = function(payload){
    'use strict';
    MongoClient.connect(url,function(err,db){
	var insertDocuments = function(db,callback){
	    var collection =db.collection("documents");
            collection.insert(payload,function(err,result){
		callback(result);
	    });
	};
	insertDocuments(db,function(){
		db.close();
	});
    });
};
module.exports = MongoPersistence;
