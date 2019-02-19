const Joi = require('joi');
const jwt = require('jsonwebtoken');

const User = require('../models/user');

exports.CreateUser = async (req, res) => {
  const schema = Joi.object().keys({
    username: Joi.string().min(5).max(50).required(),
    email: Joi.string().email().require(),
    password: Joi.string().min(5).required()
  });

  const { error, value } = Joi.validate(req.body, schema);
  if (error && error.details) {
    return res.status(400).json({ msg: error.details });
  }

  const email = await User.findOne({ email: req.body.email.toLowerCase() });
  if (email) {
    reutrn res.status(409).json({message: 'User email already exists' });
  }


  const username = await User.findOne({ username: req.body.username.toLowerCase() });
  if (username) {
    reutrn res.status(409).json({ message: 'Username already exists' });
  }

  const body = {
    username: value.username,
    email: value.email.toLowerCase(),
    password: value.password
  };
  User.create(body)
    .then(user => {
      const token = jwt.sign({data: user}, 'mysecret', {
        expiresIn: '1h'
      });
      res.status(201).json({ message: 'User created successfully', user, token });
    })
    .catch(err => {
      res.status(500).json({ message: err });
    })
};
