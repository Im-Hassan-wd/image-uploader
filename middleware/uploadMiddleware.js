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