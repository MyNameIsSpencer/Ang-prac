const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
  email: { type: String },
  password: { type: String },
  pwdResetToken: { type: String , default: ''},
  pwdResetExpiration: { type: Date }
});

module.exports = mongoose.model('User', userSchema);
