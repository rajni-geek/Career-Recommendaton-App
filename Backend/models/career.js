const mongoose = require('mongoose');

const careerSchema = new mongoose.Schema({
  title: String,
  description: String,
  category: String,
}, { timestamps: true });

module.exports = mongoose.model('Career', careerSchema);
