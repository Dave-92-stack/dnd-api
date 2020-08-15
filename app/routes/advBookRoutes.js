const express = require('express')
const passport = require('passport')
const AdvBook = require('../models/advBook')
const customErrors = require('../../lib/custom_errors')

const handle404 = customErrors.handle404
const requireOwnership = customErrors.requireOwnership

const removeBlanks = require('../../lib/remove_blank_fields')
const requireToken = passport.authenticate('bearer', { session: false })

const router = express.Router()

// INDEX
router.get('/advBooks', requireToken, (req, res, next) => {
  AdvBook.find()
    .then(advBook => {
      return advBook.map(advBook => advBook.toObject())
    })
    .then(advBook => res.status(200).json({ advBook: advBook }))
    .catch(next)
})

// SHOW
router.get('/advBooks/:id', requireToken, (req, res, next) => {
  AdvBook.findById(req.params.id)
    .then(handle404)
    .then(advBook => res.status(200).json({ advBook: advBook.toObject() }))
    .catch(next)
})

// CREATE:
router.post('/advBooks', requireToken, (req, res, next) => {
  req.body.advBook.owner = req.user.id

  AdvBook.create(req.body.advBook)
    .then(advBook => {
      res.status(201).json({ advBook: advBook.toObject() })
    })
    .catch(next)
})

// UPDATE
router.patch('/advBooks/:id', requireToken, removeBlanks, (req, res, next) => {
  delete req.body.advBook.owner

  AdvBook.findById(req.params.id)
    .then(handle404)
    .then(advBook => {
      requireOwnership(req, advBook)

      return advBook.updateOne(req.body.advBook)
    })
    .then(() => res.sendStatus(204))
    .catch(next)
})

// DESTROY
router.delete('/advBooks/:id', requireToken, (req, res, next) => {
  AdvBook.findById(req.params.id)
    .then(handle404)
    .then(advBook => {
      requireOwnership(req, advBook)
      advBook.deleteOne()
    })
    .then(() => res.sendStatus(204))
    .catch(next)
})

module.exports = router
