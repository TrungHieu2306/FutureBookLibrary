const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: {
        type : String,
        required : true,
        unique : true,
    },
    psw: {
        type : String,
        required : true,
    },
    email: {
        type : String,
        required : true,
        unique : true,
    },
    isAdmin: {
        type: Boolean,
        default: false,
    }
}, { timestamps: true }
);
let User = mongoose.model('User',userSchema);
module.exports = User;