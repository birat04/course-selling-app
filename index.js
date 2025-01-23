const express = require("express");
const {UserRouter} = require("./routes/user");
const { CourseRouter } = require("./routes/course");
const app = express();

app.use("./user",UserRouter);
app.use("./course",CourseRouter);

UserRouter(app);
CourseRouter(app);


app.listen(3000);