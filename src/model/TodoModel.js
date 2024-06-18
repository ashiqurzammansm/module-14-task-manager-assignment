const mongoose = require("mongoose")

const dataSchema = mongoose.Schema({
    email : {type:String},
    TodoSub : {type:String},
    TodoDescription : {type:String},
    TodoStatus: {type:String},
    TodoDate : {type:Date}
},{versionKey:false});

const Todolist = mongoose.model("todos", dataSchema)
module.exports = Todolist
