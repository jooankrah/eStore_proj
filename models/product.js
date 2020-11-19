const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
    Name: {
        type: String,
        required: true,
        trim: true
    },
    Description: String,
    Price: {
        type: String,
        required: true,
        trim: true
    },
    Stock:{
        type: Number,
        required: true,        
    },    
})


const Product = mongoose.model('Product', productSchema)

module.exports = Product