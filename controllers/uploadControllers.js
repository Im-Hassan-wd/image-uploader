const authRoutes = require('../routes/uploadRoute');
const Upload = require('../models/upload');

module.exports.upload_get = (req, res) => {
  res.render('upload');
}

module.exports.upload_post = async (req, res) => {
  console.log(req.file)
  // if(req.file.path) {
  //   const upload = new Upload({
  //     avatarUrl: req.file.path
  //   })
  
  //   try {

  //   }
  //   catch(err){
  //     const uploaded = await upload.save(); 
  //     if(uploaded) {
  //       console.log('uploaded successfully');
  //     }
  //   }
  //}

}