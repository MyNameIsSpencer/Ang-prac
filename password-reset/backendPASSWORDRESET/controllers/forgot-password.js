const User = require('../models/userModel');

module.exports = {
  async Forgotpassword(req, res) {
    try {
      const user = await User.findOne({ email: req.body.email });
      if (!user) {
        res.status(404).json({ error: 'User not found' });
      }
    } catch (error) {
      res.status(500).json(error);
    }
  }
}

function ResetToken(num) {
  const string = 'abcdefghijklmnopqrstuvwxyz0123456789';
  let str = '';
  let i = 0;
  while (i < num) {
    str += string.charAt(Math.floor(Math.random() * string.length));
    i++;
  }
  return str;
}
