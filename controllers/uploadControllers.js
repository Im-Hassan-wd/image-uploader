const authRoutes = require('../routes/uploadRoute');
const Upload = require('../models/upload');

module.exports.upload_get = (req, res) => {
  res.render('upload');
}

module.exports.upload_post = async (req, res) => {
  if(req.file.path) {
    const upload = new Upload({
      avatarUrl: req.file.path
    })
  
    res.send('uploading...')
    const uploaded = await upload.save();
    if(uploaded){
      res.json('image has been uploaded');
    }
  }

}