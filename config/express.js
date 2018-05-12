console.log('arq express.js');
//var express = require('express');
//var app = express();
var app = require('express')();

// conf do EJS 
app.set('view engine','ejs');
app.set('views','./app/views');

module.exports = function() {
    console.log("func express.js");
    return app;
}