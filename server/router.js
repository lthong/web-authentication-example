const auth = require('./controllers/atuh');

module.exports = (app) => {
  app.get('/', (req, res) => {
    res.send('Hello Server!');
  });
  app.post('/signup', auth.signup);
};
