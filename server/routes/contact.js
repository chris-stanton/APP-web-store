
// Requiring Dependancies
const router = require('express').Router();
const nodemailer = require('nodemailer');
const smtpTransport = require('nodemailer-smtp-transport');


router.post('/sendcomment', function(req, res){
  let comment = req.body;
  let html_message = '<h1> this worked </h1>';

    // create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
      service: 'yahoo',
      auth: {
        user: process.env.ACCOUNT_NAME,
        pass: process.env.ACCOUNT_PASSWORD
      }
    });
    // setup email data with unicode symbols
    let mailOptions = {
      from: '"Web Store" <'+process.env.ACCOUNT_NAME+'>', // sender address
      to: process.env.ACCOUNT_RECIEVING_EMAIL,
      subject: 'Subject test', // Subject line
      html: html_message
    };
    // send mail with defined transport object
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        return console.log('nodemailer error: ', error);
      } else {
      console.log('Message sent: %s', info.messageId);
      // Preview only available when sending through an Ethereal account
      console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
      res.sendStatus(201);
      // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@blurdybloop.com>
      // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
      }
    });


});


module.exports = router;
