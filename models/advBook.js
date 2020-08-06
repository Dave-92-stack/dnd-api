const mongoose = require('mongoose')

const advSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  edition: {
    type: Number,
    required: true
  },
  keyFeatures: {
    type: Array,
    required: true
  },
  timestamps: true
})

module.exports = mongoose.model('advBook', advSchema)
