const TodoModel = require("../model/TodoModel");


// Create Todo Task Function
exports.CreateTodo = async(req, res)=>{
    try {
        let reqBody = req.body;
        let TodoSub = reqBody["TodoSub"]
        let TodoDescription = reqBody["TodoDescription"]
        let email = req.headers["email"]
        let TodoStatus = "New"
        let TodoDate = Date.now()
        let postBody={
            email : email,
            TodoSub : TodoSub,
            TodoDescription : TodoDescription,
            TodoStatus: TodoStatus,
            TodoDate : TodoDate
        }

        await TodoModel.create(postBody)
        res.json({status:"Success", message:"Todo Create Complete"})
    }
    catch (err){
        res.json({status:"Fail", message:err})
    }
}


// TodoRead task Function
exports.TodoRead=(req, res)=>{
    let email = req.headers["email"]
    TodoModel.find({email:email}, (err, data)=>{
        if (err){
            res.status(400).json({status:"Fail", data:err})
        }
        else {
            res.status(200).json({status:"Success", data:data})
        }
    })
}


// TodoUpdate task Function
exports.UpdateRead=(req, res)=>{
    let TodoSub =  req.body["TodoSub"]
    let TodoDescription = req.body["TodoDescription"]
    let _id = req.body["_id"]

    let postBody = {
        TodoSub : TodoSub,
        TodoDescription : TodoDescription,
    }
    TodoModel.updateOne({_id : _id},{$set:postBody}, {upsert:true},(err, data)=>{
        if (err){
            res.status(400).json({status:"Fail", data:err})
        }
        else {
            res.status(200).json({status:"Success", data:data})
        }
    })
}


// TodoDelete task Function
exports.TodoDelete=(req, res)=>{
    let _id = req.body["_id"]

    TodoModel.remove({_id : _id},(err, data)=>{
        if (err){
            res.status(400).json({status:"Fail", data:err})
        }
        else {
            res.status(200).json({status:"Success", data:data})
        }
    })
}




// Function for update task status
exports.UpdateStatus=(req, res)=>{
    let TodoStatus =  req.body["TodoStatus"]
    let _id = req.body["_id"]

    let postBody = {
        TodoStatus : TodoStatus,
    }
    TodoModel.updateOne({_id : _id},{$set:postBody}, {upsert:true},(err, data)=>{
        if (err){
            res.status(400).json({status:"Fail", data:err})
        }
        else {
            res.status(200).json({status:"Success", data:data})
        }
    })
}












