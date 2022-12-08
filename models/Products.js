const mongoose = require('mongoose');

const ProductsSchema = mongoose.Schema({
    id: {
        type: String,
        unique: true,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    price: {
        type: Number
    },
    description: {
        type: String
    },
    category: {
        type: String
    },
    image: {
        type: String
    }
})

mongoose.models = {} 
module.exports = mongoose.model('Products', ProductsSchema);