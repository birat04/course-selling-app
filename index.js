const express = require("express");
const {createUserRoutes} = require("./course");
const { createCourseRoutes } = require("./routes/course");
const app = express();

createUserRoutes(app);

createCourseRoutes(app);


app.listen(3000);