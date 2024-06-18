const jwt = require("jsonwebtoken")


// Function for checking user login or not.

module.exports=(req, res, next)=>{
    let token = req.headers["token"];
    jwt.verify(token, "123-abc", function (err, decodeData){
        if (err){
            res.status(401).json({status: "Unauthorized"})
        }
        else {
            req.headers.email = decodeData["data"]
            next();
        }
    })
}
