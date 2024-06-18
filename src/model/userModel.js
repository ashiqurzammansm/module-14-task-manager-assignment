const mongoose = require("mongoose")

const dataSchema = mongoose.Schema({
    email : {type:String, require:true},
    firstName : {type:String, require:true},
    lastName : {type:String, require:true},
    mobile : {type:String, require:true},
    password : {type:String, require:true}
},{timeStamp:true,versionKey:false});

const usersModel = mongoose.model("users", dataSchema)

module.exports = usersModel
