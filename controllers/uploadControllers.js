const authRoutes = require('../routes/uploadRoute');

module.exports.upload_get = (req, res) => {
  res.render('upload');
}

module.exports.upload_post = (req, res) => {
  console.log(req.body);
}