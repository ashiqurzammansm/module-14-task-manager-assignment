// Basic libraries import

const express = require("express")
const app = new express();
const router = require("./src/route/api")
const rateLimit = require("express-rate-limit")
const hpp = require("hpp")
const helmet = require("helmet")
const cors = require("cors")
const mongoose = require("mongoose")


// Cors implementation

app.use(cors())


// Security implementation

app.use(helmet())
app.use(hpp())
app.use(express.json({limit:"20mb"}))
app.use(express.urlencoded({extended:true}))

// limiter implementation

const limiter = rateLimit({windowMs: 15*60*1000,max:3000})
app.use(limiter)

// mongodb database connection

let URL = "mongodb://localhost:27017/TaskManager"
mongoose
    .connect(URL)
    .then((res)=>{
        console.log("Database Connection")
    })
    .catch((err)=>{
        console.log(err)
    })


// Route implementation

app.use(router);

// 404 not found error handling

app.use("*", (req, res)=>{
    res.status(404).json({data:"Not Found"})
})

// Export All module for use from anywhere from the app.

module.exports = app





