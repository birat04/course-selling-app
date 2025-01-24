const { Router} = require("express");
const CourseRouter = Router();
    CourseRouter.post("/purchase",function(req,res){
        res.json({
            message : "Course purchase endpoint"
        })
    })
    CourseRouter.get("/preview",function(req,res){
        res.json({
            message : "Course preview endpoint"
        })
    })

module.exports = {
    CourseRouter : CourseRouter
}

