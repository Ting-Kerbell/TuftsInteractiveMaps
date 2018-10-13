const express = require('express');
const http = require('http');
const path = require('path');
const PORT = process.env.PORT || 8080
const app = express();
const server = http.createServer(app);
var fs = require('fs');


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

  res.send(returnObj);
});

app.use(express.static(path.join(__dirname, '/public')));

app.listen(PORT, console.log("listening..."));
