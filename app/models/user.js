const mongoose = require('mongoose')
const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true
  },
  hashedPassword: {
    type: String,
    required: true
  },
  token: String
}, {
  timestamps: true,
  toObject: {
    // remove `hashedPassword` field when we call `.toObject`
    transform: (_doc, user) => {
      delete user.hashedPassword
      return user
    }
  }
})
module.exports = mongoose.model('User', userSchema)

// const mongoose = require('mongoose')
//
// const userSchema = new mongoose.Schema({
//   email: {
//     type: String,
//     required: true,
//     unique: true
//   },
//   name: {
//     type: String,
//     required: true
//   },
//   experience: {
//     type: Number,
//     required: true
//   },
//   hashedPassword: {
//     type: String,
//     required: true
//   },
//   token: String
// }, {
//   timestamps: true,
//   toJSON: {
//     transform: (_doc, user) => {
//       delete user.hashedPassword
//       return user
//     }
//   }
// })
//
// module.exports = mongoose.model('User', userSchema)
