const mongoose = require("mongoose");

const postschema = mongoose.Schema({
    title: {
        type: String,
        required: true,
        unique:true
    },
    disc: {
        type: String,
        required: true
    },
    auth: {
        type: String,
        required: true
    },
    cata:{
        type:Array
    }
},
{
    timestamps:true
})
const post = mongoose.model("posts", postschema);
module.exports = post;