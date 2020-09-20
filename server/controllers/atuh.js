const User = require('.././models/user');
const jwt = require('jwt-simple');
const config = require('../config');

const getToken = (userID) => {
  const timestamp = new Date().getTime();
  return jwt.encode({ sub: userID, iat: timestamp }, config.secret);
};

const signup = (req, res, next) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(422).send({ error: 'Email or password is empty!!' });
  }

  User.findOne({ email }, (err, existingUser) => {
    if (err) {
      return next(err);
    }
    if (existingUser) {
      return res.status(422).send({ error: 'Email is in use' });
    }

    const newUser = User({
      email,
      password,
    });
    newUser.save((err) => {
      if (err) {
        return next(err);
      }
      const token = getToken(newUser.id);
      res.json({ token });
    });
  });
};

module.exports = { signup };
