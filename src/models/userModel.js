const mongoose = require('mongoose');

const BookSchema = new mongoose.Schema( {
    authorName: String,
    bookname: String,
    title: {
        type: String,
        unique: true,
        required: true
    },
    prize: String,
    category: {
        type: String,
        
    },
    year: Number,
  
}, { timestamps: true });

module.exports = mongoose.model('Book', BookSchema) //Book


