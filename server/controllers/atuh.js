const User = require('.././models/user');

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
      res.json({ success: true });
    });
  });
};

module.exports = { signup };
