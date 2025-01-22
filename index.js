const express = require("express");
const app = express();

app.post("/user/signup",function(req,res){
    res.json({
        message : "Signup endpoint"
    })
})
app.post("/user/signin",function(req,res){
    res.json({
        message : "Signup endpoint"
    })
})
app.get("/user/purchase",function(req,res){
    res.json({
        message : "Signup endpoint"
    })
})
app.post("/user/purchase",function(req,res){
    res.json({
        message : "Signup endpoint"
    })
})
app.post("/courses",function(req,res){
    res.json({
        message : "Signup endpoint"
    })
})



app.listen(3000);