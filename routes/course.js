function createCourseRoutes(app){
    app.post("/course/purchase",function(req,res){
        res.json({
            message : "Signup endpoint"
        })
    })
    app.post("/courses",function(req,res){
        res.json({
            message : "Signup endpoint"
        })
    })
}
module.exports = {
    createCourseRoutes : createCourseRoutes
}

