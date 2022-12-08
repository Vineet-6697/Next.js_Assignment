const mongoose = require('mongoose');

const UsersSchema = mongoose.Schema({
    userid: {
        type: String,
        unique: true,
        required: true
    },
    name: {
        type: String,
        required: true,
        required: true
    },
    email: {
        type: String,
        unique: true,
        required: true
    },
    mobile: {
        type: String,
        unique: true,
        required: true
    },
    password: {
        type: String,
        required: true
    }
    // address: TempSchema
})


// const TempSchema = mongoose.Schema({
//     city: {
//         type: String
//     },
//     pincode: {
//         type: Number,
//         maxLength: 6
//     }
// })

mongoose.models = {} 
module.exports = mongoose.model('Users', UsersSchema);