const User = require('../models/userModel');

const Mail = require('../helpers/mail');

const URL = 'http://localhost:4200';

module.exports = {
  async Forgotpassword(req, res) {
    try {
      const user = await User.findOne({ email: req.body.email });
      if (!user) {
        res.status(404).json({ error: 'User not found' });
      }

      const resetToken = ResetToken(30);
      user.pwdResetToken = resetToken;
      user.pwdResetExpiration = Date.now() + 60 * 60 * 1 * 1000;
      await user.save();

      const resetLink = `
        <h2>You requested for a password reset token</h2>
        <h4>Please click the link to reset your password</h4>

        <a href='${URL}/reset-password/${resetToken}'>Reset Password</a>
      `;

      const options = {
        receiver: req.body.email,
        subject: 'Password Reset Token',
        html: resetLink
      }
      const result = await Mail.SendMail(options);

      res.status(200).json(result);

      res.status(200).json({ token: resetToken });
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
