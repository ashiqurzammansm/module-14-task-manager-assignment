const userModel = require("../model/userModel");
const jwt = require("jsonwebtoken");


// Registration function
exports.registration = async(req, res)=>{
    try {
        let reqBody = req.body;
        await userModel.create(reqBody)
        res.json({status:"Success", message:"Registration Complete"})
    }
    catch (err){
        res.json({status:"Fail", message:err})
    }
}


// Login function
exports.login =async (req, res)=>{
    try {
        let reqBody = req.body;
        let user = await userModel.find(reqBody)
        if(user.length > 0){
            let payload = {exp:Math.floor(Date.now()/1000)+(24*60*60),data:reqBody["email"]}
            let token = jwt.sign(payload, "123-abc");
            res.json({status:"Success", message:"user Found",token:token})
        }
        else{
            res.json({status:"Fail", message:"user not found"})
        }
    }
    catch (err){
        res.json({status:"Fail", message:err})
    }
}


// Profile Update function
exports.profileUpdate =async (req, res)=>{
    try {
        let email = req.headers["email"];
        let reqBody = req.body;
        await userModel.updateOne({email:email},reqBody)
        res.json({status:"Success", message:"Update Complete"})
    }
    catch (err){
        res.json({status:"Fail", message:err})
    }
}


// profile Details function
exports.profileDetails =async (req, res)=>{
    try {
        let email = req.headers["email"]
        let result = await userModel.find({email:email})
        res.json({status:"Success", data:result})
    }
    catch (err){
        res.json({status:"Fail", message:err})
    }
}


