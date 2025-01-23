const {Router} = require("express");
const UserRouter = Router();
    UserRouter.post("/user/signup",function(req,res){
        res.json({
            message : "Signup endpoint"
        })
    })
    UserRouter.post("/user/signin",function(req,res){
        res.json({
            message : "Signup endpoint"
        })
    })
    UserRouter.get("/user/purchase",function(req,res){
        res.json({
            message : "Signup endpoint"
        })
    })

module.exports = {
    userRouter : userRouter
}