const mongoose = require('mongoose')

const bookSchema = mongoose.Schema({
    Name :{ type : String ,required : true} ,
    ISBN :{ type : String ,required : true , unique : true} ,
    Author :{ type : String ,required : true } ,
    Price :{ type : Number ,required : true } ,
    Country_of_origin : {type: String} ,
    Number_of_pages : {type : Number} ,
    Year : { type : Number ,required : true } ,
    Stock_available : { type : Number ,required : true },
    Digital_format_available : {type : Boolean , required : true}
})

const BookModel = mongoose.model("BookModel" , bookSchema)

module.exports = {BookModel}

