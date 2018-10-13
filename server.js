const express = require('express');
const http = require('http');
const path = require('path');

const app = express();
const server = http.createServer(app);

app.get('/', function(req, res) {
  res.sendFile('index.html', {root: path.join(__dirname, 'public')});
});

app.get('/user', function(req, res) {
  res.sendFile('user.html', {root: path.join(__dirname, 'public')});
});

app.get('/service', function(req, res) {
  res.sendFile('service.html', {root: path.join(__dirname, 'public')});
})

app.get('/map', function(req, res) {
  res.sendFile('mapTest.html', {root: path.join(__dirname, 'public')});
})

app.get('/:folder/:file', function(req, res) {
  res.sendFile(req.params.file, {root: path.join(__dirname, 'public', req.params.folder)});
});

server.listen(8080, () => console.log('App is running on port 8080'));