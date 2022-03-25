const mongoose = require('mongoose');

const uploadSchema =  mongoose.Schema({
  name: {
    type: String
  },
  avatarUrl: {
    type: String
  }
});

const Upload = mongoose.model('upload', uploadSchema);

module.exports = Upload;