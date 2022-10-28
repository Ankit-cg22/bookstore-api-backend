const express = require('express')
const router = express.Router()

const {getAllBooks , addBook, updateBook, deleteBook, getBookByISBN, updateBookByISBN} = require('../controller/bookStore')

// get all books
router.get('/', getAllBooks);

//add a book
router.post('/' , addBook) ;

// update a book
router.patch('/:id' , updateBook)

// delete a book
router.delete('/:id' , deleteBook)

// get book using isbn
router.get('/isbn/:isbn' , getBookByISBN)

// update book using isbn
router.patch('/isbn/:isbn' , updateBookByISBN)

module.exports = router