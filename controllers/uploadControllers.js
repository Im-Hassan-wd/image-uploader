const authRoutes = require('../routes/uploadRoute');
const Upload = require('../models/upload');

module.exports.upload_get = (req, res) => {
  res.render('upload');
}

module.exports.upload_post = (req, res) => {
  // const upload = new Upload({
  //   avatarUrl: req.body.avatarUrl
  // });
  // upload.save()
  //  .then((result) => {
  //    console.log(result);
  //   })
  //  .catch(err => {
  //    console.log(err)
  //  })
  if(req.body.avatarUrl) {
    avatarUrl = req.body.avatarUrl;
  }

}