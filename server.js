const express = require('express');
const http = require('http');
const path = require('path');
const PORT = process.env.PORT || 8080
const app = express();
const server = http.createServer(app);
var fs = require('fs');

/* Enable CORS */
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

var i, obj;
fs.readFile(__dirname + '/database.csv', function (err, data) {
  if (err) throw err;
  data = data.toString();
  data = data.split('\n');

  for (i = 0; i < data.length; i++) {
    data[i] = data[i].split(',');
  }

  obj = data
});

app.get('/database.json', function(req, res) {
  returnObj = [];
  var type = req.query.service;
  for (i = 1; i < obj.length; i++) {
      if (obj[i][3] == type) {
        returnObj.push(obj[i]);
      }
  }
  res.json(returnObj);
});

app.get('/', function(req, res) {
  res.sendFile('index.html', {root: path.join(__dirname, 'public')});
});

app.get('/user', function(req, res) {
  res.sendFile('user.html', {root: path.join(__dirname, 'public')});
});

app.get('/service', function(req, res) {
  res.sendFile('service.html', {root: path.join(__dirname, 'public')});
})
app.get('/dogService', function(req, res) {
  res.sendFile('dogService.html', {root: path.join(__dirname, 'public')});
})
app.get('/map', function(req, res) {
  res.sendFile('mapTest.html', {root: path.join(__dirname, 'public')});
})

app.get('/:folder/:file', function(req, res) {
  res.sendFile(req.params.file, {root: path.join(__dirname, 'public', req.params.folder)});
});

app.listen(PORT, console.log("listening..."));
