const mongoose = require('mongoose');

const UsersCartSchema = mongoose.Schema({
    userid: {
        type: String,
        required: true
    },
    productid: {
        type: String,
        required: true
    },
    purchased: {
        type: Boolean,
        optional: true
    }
});

mongoose.models = {} // for nextjs
module.exports = mongoose.model('users_cart', UsersCartSchema);