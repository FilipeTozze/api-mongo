var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var path = require('path');
var consign = require('consign');




//For BodyParser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

//Configuration do consign
consign({
  cwd: process.cwd(),
  locale: 'pt-br',
  logger: console,
  verbose: true,
  extensions: ['.js', '.json', '.node'],
  loggingType: 'info'
})
.then('src/router')
.into(app);


module.exports = app;
 
