<<<<<<< HEAD
import mongoose from "mongoose";


const bookSchema = new mongoose.Schema({
    title : {
        type : String,
        required : true,
    },
    author : {
        type : String,
        required : true,
    },
    price : {
        type : Number,
        required : true,
    },
    desc : {
        type : String,
        required : true
    },
    stock : {
        type : Number,
        required : true

    },
    language : {
        type : String,
        required : true
    },
    imageUrl : {
        type : String
    }
})



const Book = new mongoose.model('Book', bookSchema);
=======
import mongoose from "mongoose";


const bookSchema = new mongoose.Schema({
    title : {
        type : String,
        required : true,
    },
    author : {
        type : String,
        required : true,
    },
    price : {
        type : Number,
        required : true,
    },
    desc : {
        type : String,
        required : true
    },
    stock : {
        type : Number,
        required : true

    },
    language : {
        type : String,
        required : true
    },
    imageUrl : {
        type : String
    }
})



const Book = new mongoose.model('Book', bookSchema);
>>>>>>> 266eacda04f6dcbe394253cfe4fb903f9a389e9c
export default Book;