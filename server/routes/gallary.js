
// Copyright (c) 2018 Christopher J. Stanton

// requiring dependancies
const router = require('express').Router();
const pg = require('pg');
const path = require('path');
const pool = require('../config/database.config');
const multer = require('multer');

// Set Multer Storage Engine
const storage = multer.diskStorage({
  destination: './public/assets/images/uploads/gallary',
  filename: function(req, file, cb){
    // renames file
    cb(null,file.fieldname + '-' + file.originalname);
  }
});

// Init Upload
const upload = multer({
  storage: storage,
  limits:{fileSize: 10000000},
  fileFilter: function(req, file, cb){
    checkFileType(file, cb);
  }
});

// Check File Type
function checkFileType(file, cb){
  // Allowed ext
  const filetypes = /jpeg|jpg|png|gif/;
  // Check ext
  const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
  // Check mime
  const mimetype = filetypes.test(file.mimetype);
  // verifies true file identity
  if(mimetype && extname){
    return cb(null,true);
  } else {
    cb('Error: Images Only!');
  }
};

// gets all pictures with active status for landing page gallary
router.get('/getGallary', function (req, res) {
  pool.connect()
    .then(function (client) {
      client.query("SELECT * FROM gallary WHERE active=TRUE")
        .then(function (result) {
          client.release();
          res.send(result.rows);
        })
        .catch(function (err) {
          console.log('error getting photo gallary', err);
          res.sendStatus(500);
        });
    });
  });

// saving image files
router.post('/upload', upload.single('gallaryImg'), function (req, res, next) {
  // req.files is array of `photos` files
  // req.body will contain the text fields, if there were any
  console.log('req.file: ', req.file);
  console.log('req.body: ', req.body);

  let imageName = './assets/images/uploads/gallary/' + req.file.filename;
  let tooltip = 'tooltip works';

  pool.connect()
    .then(function (client) {
      client.query('INSERT INTO gallary (image, tooltip) VALUES ($1, $2)',
        [imageName, tooltip])
      .then(function (result) {
        client.release();
        console.log('Image was saved in DB');
        res.send(result.rows);
      })
      .catch(function (err) {
        console.log('error on SELECT', err);
        res.sendStatus(500);
      });
    });//end of .then


}); // end of router.post




module.exports = router;
