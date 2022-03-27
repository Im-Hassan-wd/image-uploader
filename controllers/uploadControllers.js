const authRoutes = require('../routes/uploadRoute');
const Upload = require('../models/upload');

module.exports.upload_get = (req, res) => {
  res.render('upload');
}

module.exports.upload_post = (req, res) => {
  if(req.file.path) {
    const upload = new Upload({
      avatarUrl: req.file.path
    })
  
    upload.save()
    .then((result) => {
      console.log('uploaded');
      res.redirect('/');
      })
    .catch(err => {
      console.log(err)
    })
    console.log(req.file);
  }

}