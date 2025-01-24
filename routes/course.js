const { Router} = require("express");
const { purchaseModel, courseModel } = require("../db");
const courseRouter = Router();
    courseRouter.post("/purchase",function(req,res){
        res.json({
            message : "Course purchase endpoint"
        })
    })
    courseRouter.get("/preview",function(req,res){
        res.json({
            message : "Course preview endpoint"
        })
    })

module.exports = {
    courseRouter : courseRouter
}

