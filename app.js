
// Copyright (c) 2018 Christopher J. Stanton

// requiring dependancies
require('dotenv').config();
const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const port = process.env.PORT || 5000;

// defining server side routes
const contact = require('./server/routes/contact.js');
const gallary = require('./server/routes/gallary.js');
const store = require('./server/routes/store.js');

// server back static files
app.use(express.static(path.join(__dirname, './public')));
// initializing body parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

// handles index file separately
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, './public/index.html'));
});

// server side routes
app.use('/contact', contact);
app.use('/gallary', gallary);
app.use('/store', store);

// port listening
app.listen(port, () => {
    console.log('App listening on port: ', port);
});
