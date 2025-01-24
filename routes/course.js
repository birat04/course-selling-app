const { Router} = require("express");
const CourseRouter = Router();
    CourseRouter.post("/purchase",function(req,res){
        res.json({
            message : "Signup endpoint"
        })
    })
    CourseRouter.get("/preview",function(req,res){
        res.json({
            message : "Signup endpoint"
        })
    })

module.exports = {
    CourseRouter : CourseRouter
}

