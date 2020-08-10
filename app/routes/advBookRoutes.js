const express = require('express')
const router = express.Router()

const advBook = require('../models/advBook')

// INDEX: define route GET to /books responds with books json
router.get('/books', (req, res) => {
  advBook.find()
    .then(books => res.json({ books: books }))
    .catch(console.error)
})

// INDEX
router.get('/books', (req, res) => {
  advBook.find()
    .then(book => res.json({ book: book }))
    .catch(console.error)
})

// SHOW:
router.get('/books/:id', (req, res) => {
  const id = req.params.id
  advBook.findById(id)
    .then(book => res.json({ book: book }))
    .catch(console.error)
})

// CREATE:
router.post('/books', (req, res) => {
  const book = req.body.book
  advBook.create(book)
    .then(book => res.status(201).json({ book: book }))
    .catch(console.error)
})

// UPDATE
router.patch('/books/:id', (req, res) => {
  const bookId = req.params.id
  const bookData = req.body.book
  advBook.findById(bookId)
    .then(book => book.updateOne(bookData))
    .then(() => res.sendStatus(204))
    .catch(console.error)
})

// DESTROY
router.delete('/books/:id', (req, res) => {
  const bookId = req.params.id
  advBook.findById(bookId)
    .then(book => {
      return book.deleteOne()
    })
    .then(() => res.sendStatus(204))
    .catch(console.error)
})

module.exports = router
