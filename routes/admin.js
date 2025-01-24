const {Router} = require("express");
const adminRouter = Router();
const { adminModel,courseModel} = require("../db")


adminRouter.post("/signup",function(req,res){
    const {email, password, firstName, lastName} = req.body;
    res.json({
    message : "Signup endpoint"
    })
})
adminRouter.post("/signin",function(req,res){
    res.json({
        message : "Signup endpoint"
    })
})
adminRouter.post("/course",  function(req,res){
    res.json({
        message : "Signup endpoint"
    })
})
adminRouter.put("/course",function(req,res){
    res.json({
        message : "Signup endpoint"
    })
})
adminRouter.get("/course/bulk",function(req,res){
    res.json({
        message : "Signup endpoint"
    })
 })
module.exports = {
    adminRouter : adminRouter

}
