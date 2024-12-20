const express = require("express");

//rest object
const app = express();

//middleware

//routes
app.get("/test", (req, res) => {
  res.status(200).send("<h1>Welcome</h1>");
});

//port number
const port = 8080;

//listen to port
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
