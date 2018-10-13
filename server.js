const express = require('express');
const http = require('http');
const path = require('path');
const PORT = process.env.PORT || 8080

const app = express();
const server = http.createServer(app);

app.use(express.static(path.join(__dirname, '/public')));

app.get('/database.json', function(req, res) {
    var service = req.query.service;
    var user = req.query.user;

    console.log(service, user);
});

app.listen(PORT);
