const mongoose = require('mongoose');

const uploadSchema =  mongoose.Schema({
  avatarUrl: {
    type: String
  }
});

const Upload = mongoose.model('upload', uploadSchema);

module.exports = Upload;