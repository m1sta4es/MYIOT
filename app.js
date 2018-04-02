var express = require('express');
var app = express();
var Database =require('./db.js');
var db = new Database();

app.get('/api',function(req,res){
    res.send({led:false});
});

app.post('/api',function(req,res){
    res.send({led:false})
});

app.put('/api',function(req,res){
    var data = {led:true};
    if(req.body.led === true){
	data.led = true;
    }
    db.insert(data);
    res.send({db:"insert"});
});

app.delete('/api',function(req,res){
    res.send({led:false})
})

app.listen(8888);
// 终端打印如下信息
console.log('Server running at http://123.207.46.35:8888/');
