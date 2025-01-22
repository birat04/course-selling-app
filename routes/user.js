function createUserRoutes(app){
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
}
module.exports = {
    createUserRoutes : createUserRoutes
}