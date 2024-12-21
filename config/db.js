const mysql = require("mysql2");

const mySqlPool = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "Naveen@18",
  database: "student_db",
});

module.exports = mySqlPool.promise();
