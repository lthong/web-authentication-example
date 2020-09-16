const express = require('express');
const http = require('http');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const app = express();
const mongoose = require('mongoose');
const router = require('./router');

// DB setup
mongoose.connect('mongodb://localhost/auth', {
  useUnifiedTopology: true,
  useNewUrlParser: true,
});
mongoose.connection.on('connected', function () {
  console.log('connected to db successful!');
});

// app setup
app.use(morgan('combined'));
app.use(bodyParser.json({ type: '*/*' }));
router(app);

// server setup
const port = process.env.PORT || 3090;
const server = http.createServer(app);
server.listen(port);
