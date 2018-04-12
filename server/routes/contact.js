
// Requiring Dependancies
const router = require('express').Router();
const nodemailer = require('nodemailer');
const smtpTransport = require('nodemailer-smtp-transport');


router.post('/sendMessage', function(req, res){
  let contactMessage = req.body;
  let html_message = '<span><h1>First Name:</h1><h3>' + contactMessage.firstName + '</h3></span>' +
                     '<span><h1>Last Name:</h1><h3>' + contactMessage.lastName + '</h3></span>' +
                     '<span><h1>Email Address:</h1><h3>' + contactMessage.email + '</h3></span>' +
                     '<span><h1>Message:</h1><h3>' + contactMessage.message + '</h3></span>';

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
    from: '"Web Store" <'+process.env.ACCOUNT_NAME+'>', // sending email address
    to: process.env.ACCOUNT_RECIEVING_EMAIL, // recieving email address
    subject: 'Contact Message From: ' + contactMessage.firstName + ' ' + contactMessage.lastName, // subject line
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


}); // end router.post()


module.exports = router;
