const express = require('express');
const http = require('http');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');
const router = require('./router');

// DB setup
mongoose.connect('mongodb://localhost/auth', {
  useUnifiedTopology: true,
  useNewUrlParser: true,
  useCreateIndex: true,
});
mongoose.connection.on('connected', () => {
  console.log('connected to db successful!');
});

// app setup
app.use(cors());
app.use(morgan('combined'));
app.use(bodyParser.json({ type: '*/*' }));
router(app);

// server setup
const port = process.env.PORT || 3090;
const server = http.createServer(app);
server.listen(port);
