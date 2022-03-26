const path = require('path');
const multer = require('multer'); 

const storage = multer.diskStorage({
 destination: function(req, file, cb) {
   cb(null, 'wick/uploads/');
 },
 filename: function(req, file, cb) {
   let ext = path.extname(file.originalname);
   cb(null, Date.now() + ext);
 }
});

const upload = multer({
  storage: storage,
  fileFilter: function(req, file, cb){
    if(file.mimetupe == 'image/png' || file.mimetupe == 'image/jpg') {
      cb(null, true)
    } else {
       console.log('only jpg & png file supported');
       cb(null, false)
    }
  }
})