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
  description: {
    type: String,
    required: true
  },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  }
}, {
  timestamps: true
})

module.exports = mongoose.model('advBook', advSchema)
