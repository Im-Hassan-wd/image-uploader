const express = require('express');
const mongoose = require('mongoose');
const Uri = require('./dbURI/Uri');
const uploadRoutes = require('./routes/uploadRoute');

const app = express();
app.listen(4002);

// middleware
app.use(express.static('public'));
app.use(express.json());

// view engine
app.set('view engine', 'ejs');

// database connection
const dbURI = Uri;
mongoose.connect(dbURI)
  .then((result) => console.log('connected to db'))
  .catch((err) => console.log("can't connect to db"));

// routes
app.get('/', (req, res) => res.render('home'));
app.use(uploadRoutes)