const express = require("express");
const morgan = require("morgan");
const dotenv = require("dotenv");
const mySqlPool = require("./config/db");

//configure file
dotenv.config();

//rest object
const app = express();

//middleware
app.use(express.json());
app.use(morgan("dev"));

//routes
app.use("/api/v1/student", require("./routers/studentsRoutes"));

app.get("/test", (req, res) => {
  res.status(200).send("<h1>Welcome Node MySQL App</h1>");
});

//port number
const port = process.env.PORT || 8000;

//contidionaly listen
mySqlPool
  .query("SELECT 1")
  .then(() => {
    //mysql
    console.log("MYSQL DB Connected");

    //listen to port
    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
  })
  .catch((error) => {
    console.log("MYSQL DB Connection Failed");
    console.log(error);
  });
