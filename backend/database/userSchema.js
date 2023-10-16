const mongoose = require("mongoose");

const userschema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true,
        unique:true
    },
},
{
    timestamps:true
})
const user = mongoose.model("Bloguser", userschema);
module.exports = user;