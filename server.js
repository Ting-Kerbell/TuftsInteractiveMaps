const express = require('express');
const http = require('http');
const path = require('path');

const app = express();
const server = http.createServer(app);

app.use(express.static(path.join(__dirname, '/public')));

server.listen(8080, () => console.log('App is running on port 8080'));