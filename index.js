// inside index.js
const PORT = 3000;
const express = require('express');
const server = express();

const {client} = require('./db');
client.connect();

const bodyParser = require('body-parser');
server.use(bodyParser.json());

const morgan = require('morgan');
server.use(morgan('dev'));

server.use((req, res, next) => {
    console.log("<____Body Logger START____>");
    console.log(req.body);
    console.log("<_____Body Logger END_____>");
  
    next();
  });

//   server.use((req, res, next) => {
//       console.log('next piece of middleware');

//       next();
//   });

//   server.get("/", (req, res) => {
//       res.send("hello world");
//   });

  const apiRouter = require('./api');
server.use('/api', apiRouter);

  server.listen(PORT, () => {
    console.log('The server is up on port', PORT)
  });
  
  