const authRoutes = require('../routes/uploadRoute');
const Upload = require('../models/upload');

module.exports.upload_get = (req, res) => {
  res.render('upload');
}

module.exports.upload_post = (req, res) => {
  if(req.body.avatarUrl) {
    const upload = new Upload({
      avatarUrl: req.body.avatarUrl
    })
  
    upload.save()
    .then((result) => {
      console.log('uploaded');
      })
    .catch(err => {
      console.log(err)
    })
    console.log(req.file);
  }

}