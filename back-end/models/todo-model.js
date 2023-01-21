const { Schema, model } = require('mongoose');

const todoSchema = new Schema({
    title : String,
    content : String
})


module.exports = model("Todo", todoSchema)