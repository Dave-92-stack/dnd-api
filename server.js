// libraries in use
const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
// middleware logging requests
const errorHandler = require('./lib/error_handler')
const replaceToken = require('./lib/replace_token')
const requestLogger = require('./lib/request_logger')
const auth = require('./lib/auth')

const db = require('./config/db')

const serverDevPort = 4741
const clientDevPort = 7165

// routes

// connect to mongoose
mongoose.connect(db, {
  useNewUrlParser: true,
  useCreateIndex: true
})
// instantiate an app
const app = express()

app.use(cors({ origin: process.env.CLIENT_ORIGIN || `http://localhost:${clientDevPort}` }))
const port = process.env.PORT || serverDevPort
app.use(replaceToken)
app.use(auth)
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(requestLogger)
app.use(errorHandler)

app.listen(port, () => {
  console.log('listening on port ' + port)
})

module.exports = app
