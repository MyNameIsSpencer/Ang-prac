const bcrypt = require('bcryptjs');
const Joi = require('joi');

const User = require('../models/userModel');
const Mail = require('../helpers/mail');

module.exports = {
  async ResetPassword(req, res) {
    try {
      const schema = Joi.object().keys({
        password: Joi.string()
          .regex(
            /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@^$#&!%*?&])[A-Za-zd$#$@^$&!%*?&].{5,30}/
          )
          .required(),
        cpassword: Joi.string()
          .regex(
            /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@^$#&!%*?&])[A-Za-zd$#$@^$&!%*?&].{5,30}/
          )
          .required()   // .optional()  // <<< can also have as required or optional
      });
      const { error, value } = Joi.validate(req.body, schema);
      if (error && error.details) {
        return res.status(400).json({msg: error.details});
      }

      const user = await User.findOne({
        pwdResetToken: req.params.token,
        pwdResetExpiration: { $gt: Date.now() }
      });

      if (!user) {
        res
          .status(500)
          .json({message: 'Password reset token has expired or is invalid'});
      }

      return bcrypt.hash(value.password, 10, async (err, hash) => {
        if (err) {
          res
            .status(500)
            .json({ message: 'Error hasing password' });
        }
        user.password = hash;
        user.pwdResetToken = undefined;
        user.pwdResetExpiration = undefined;
        user.save();

        const confirmation = `
          <h4>This is confirmation you have successfully changed the password for ${user.email}</h4>
        `;

        const options = {
          receiver: user.email,
          subject: 'Password Reset Confirmation',
          html: confirmation
        };
        const result = await Mail.SendMail(options);
        res.status(200).json({ message: 'Password reset was successful', result });

      });

    } catch (err) {
      res.status(500).json(err);
    }
  }
}
