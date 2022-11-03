const mongoose = require("mongoose");

const schema = new mongoose.Schema({
  title: {type : String },
  detail: {type : String },

  image: {
    data: Buffer,
    contentType: String,
  },
  route: {type : String}
});

const imageHandling = mongoose.model('imageHandling', schema)
module.exports = imageHandling