
const router = require('express').Router();
const pg = require('pg');
const pool = require('../config/database.config');

router.get('/getGallary', function (req, res) {
  pool.connect()
    .then(function (client) {
      client.query("SELECT * FROM gallary WHERE active=TRUE")
        .then(function (result) {
          client.release();
          res.send(result.rows);
        })
        .catch(function (err) {
          console.log('error on SELECT', err);
          res.sendStatus(500);
        });
    });
  });




module.exports = router;
