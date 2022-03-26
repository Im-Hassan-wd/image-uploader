const express = require('express');
const mongoose = require('mongoose');
const Uri = require('./dbURI/Uri');
const uploadRoutes = require('./routes/uploadRoute');

const app = express();

// middleware
app.use(express.static('public'));
app.use(express.json());

// view engine
app.set('view engine', 'ejs');

// database connection
const dbURI = Uri;
mongoose.connect(dbURI)
  .then((result) => app.listen(4002))
  .catch((err) => console.log(err));

// routes
app.get('/', (req, res) => res.redirect('/upload'));
app.use(uploadRoutes);