const auth = require('./controllers/atuh');
require('./service/passport');
const passport = require('passport');

const requireAuth = passport.authenticate('jwt', { session: false });

module.exports = (app) => {
  app.get('/', requireAuth, function (req, res) {
    res.send('Hello server!');
  });
  app.post('/signup', auth.signup);
};
