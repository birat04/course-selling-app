const {Router} = require("express");
const AdminRouter = Router();
    AdminRouter.post("/user/signup",function(req,res){
        res.json({
        message : "Signup endpoint"
        })
    })
    AdminRouter.post("/user/signin",function(req,res){
        res.json({
            message : "Signup endpoint"
        })
    })
    AdminRouter.get("/user/purchase",function(req,res){
        res.json({
            message : "Signup endpoint"
        })
    })
module.exports = {
    AdminRouter : AdminRouter

}
