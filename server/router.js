const auth = require('./controllers/atuh');
const { checkTokenValid, checkLoginValid } = require('./service/passport');

module.exports = (app) => {
  app.get('/', checkTokenValid, function (req, res) {
    res.send(`Hello ${req.user.email}`);
  });
  app.post('/signin', checkLoginValid, auth.signin);
  app.post('/signup', auth.signup);
};
