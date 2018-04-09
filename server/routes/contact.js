
// Requiring Dependancies
const router = require('express').Router();
const nodemailer = require('nodemailer');
const smtpTransport = require('nodemailer-smtp-transport');


router.post('/sendcomment', function(req, res){
  let comment = req.body;
  let html = '<span><h2> First Name: </h2><h3>' + comment.firstName + '</h3></span>' +
             '<span><h2> Last Name: </h2><h3>' + comment.lastName + '</h3></span>' +
             '<span><h2> Email: </h2><h3>' + comment.email + '</h3></span>' +
             '<span><h2> Comments: </h2><p>' + comment.comment + '</p></span>';

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
      from: '"Annas Bannas New Enrollment App" <'+process.env.ACCOUNT_NAME+'>', // sender address
      to: process.env.ACCOUNT_RECIEVING_EMAIL,
      subject: 'Comment by: ' + comment.firstName + ' ' + comment.lastName, // Subject line
      html: html
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
