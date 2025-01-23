const { Router} = require("express");
const CourseRouter = Router();
    CourseRouter.post("/course/purchase",function(req,res){
        res.json({
            message : "Signup endpoint"
        })
    })
    CourseRouter.post("/courses",function(req,res){
        res.json({
            message : "Signup endpoint"
        })
    })

module.exports = {
    CourseRouter : CourseRouter
}

