
process.env.NODE_ENV = process.env.NODE_ENV || 'development'; //set dev as default environment.

var express = require('./config/express');


var app = express(); //calls express as s function that returns the app instance.


app.listen(3000);
console.log("Server running at http://localhost:3000");

module.exports.app = app;
