var express = require("express");
var app=express();

app.get("/",function(req,res){
    res.end("Hello world!");
}).listen(process.env.PORT || 8080);