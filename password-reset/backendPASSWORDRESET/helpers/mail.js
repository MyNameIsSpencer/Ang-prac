const nodemailer = require('nodemailer');
const htmlToText = require('html-to-text');

module.exports = {
  SendMail: (options) => {
    return new Promise((resolve, reject) => {
      // create reusable transporter object using the default SMTP transport
      let transporter = nodemailer.createTransport({
        host: "smtp.ethereal.email",
        port: 587,
        secure: false, // true for 465, false for other ports
        auth: {
          user: 'carlee60@ethereal.email', // generated ethereal user
          pass: 'fVjBKnwVxWT5x5e778' // generated ethereal password
        },
        tls: {
          rejectUnauthorized: false
        }
      });

      const html = htmlToText.fromString(options.html, {
        wordwrap: 130
      });

      // setup email data with unicode symbols
      let mailOptions = {
        from: 'App Admin <no-reply@test.com>', // sender address
        to: options.receiver, // list of receivers
        subject: options.subject, // Subject line
        text: htmlText, // plain text body
        html: options.html // html body
      };


      // udemy method
      transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
          return reject(error);
        }
        console.log("Message sent: %s", info.messageId);
        // Preview only available when sending through an Ethereal account
        console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));

        return resolve({
          message: 'Reset token has not been sent'
        });
      }




      // // send mail with defined transport object
      // let info = await transporter.sendMail(mailOptions)
      //
      // console.log("Message sent: %s", info.messageId);
      // // Preview only available when sending through an Ethereal account
      // console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
      //
      // // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
      // // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...

    });
  }
}
