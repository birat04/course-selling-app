const express = require("express");
const {UserRouter} = require("./routes/user");
const { AdminRouter} = require("./routes/admin")
const {CourseRouter} = require("./routes/course");
const app = express();

app.use("/api/v1/user",UserRouter);
app.use("/api/v1/admin",AdminRouter);
app.use("/api/v1/course",CourseRouter);

// UserRouter(app);
// CourseRouter(app);


app.listen(3000);