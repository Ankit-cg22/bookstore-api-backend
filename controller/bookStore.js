const {BookModel} = require('../models/book')
const mongoose = require('mongoose')

const getAllBooks = async (req ,res) => {
    try {

        const data = await BookModel.find()

        res.status(200).json({message : "Success" , data : data})
        
    } catch (error) {
        console.log(error)
        res.status(500).json({message : "Server Error"})
    }
}

const addBook = async (req , res) =>{ 
    const book = req.body; 
        
    try {
       const newBook = new BookModel(book)
       await newBook.save()
       res.status(201).json({message : "Book added successfully" , data : newBook}) 
    } catch (error) {
        console.log(error.message)
        res.status(500).json({message : error.message})
    }
}

const updateBook = async (req , res)=>{
    const {id} = req.params
    const book = req.body;
    
    if( !(mongoose.Types.ObjectId.isValid(id)) ) return res.status(404).json({message : 'No book with this id'});

    try {
        
        const updatedBook = await BookModel.findByIdAndUpdate( id , {...book , id}, {new : true});

        res.status(200).json({message : "Book updated successfully" , data : updatedBook})

    } catch (error) {
        console.log(error.message)
        res.status(500).json({message : error.message})
    }
}

const deleteBook = async (req , res)=>{
    const {id} = req.params
    if( !(mongoose.Types.ObjectId.isValid(id)) ) return res.status(404).send({message : `No book with id : ${id}`});

    try {
        
        const deletedBook = await BookModel.findByIdAndRemove( id );

        res.status(200).json({message : "Book deleted successfully" , data : deletedBook})

    } catch (error) {
        console.log(error.message)
        res.status(500).json({message : error.message})
    }
}

const getBookByISBN = async(req , res) => {
    const {isbn} = req.params
    
    try {
        const book = await BookModel.find({ISBN : isbn})

        if(book.length === 0) return res.status(404).json({message : "No book with this ISBN"})

        res.status(200).json({message : "Success" ,data : book[0]})

    } catch (error) {
        console.log(error.message)
        res.status(500).json({message : error.message})
    }

}

const updateBookByISBN = async(req , res) => {
    const {isbn} = req.params
    const newBook = req.body
    
    try {

        const book = await BookModel.find({ISBN : isbn})
        
        if(book.length === 0) return res.status(404).json({message : "No book with this ISBN"})

        const id = book[0]._id

        const updatedBook = await BookModel.findByIdAndUpdate( id , {...newBook , id}, {new : true});

        res.status(200).json({message : "Book updated successfully" , data : updatedBook})
        
    } catch (error) {
        console.log(error.message)
        res.status(500).json({message : error.message})
    }

}

module.exports = {getAllBooks  , addBook , updateBook , deleteBook , getBookByISBN , updateBookByISBN}
