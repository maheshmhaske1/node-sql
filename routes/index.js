var express = require("express");
var router = express.Router();
const mysql = require("mysql");

/* GET home page. */
router.get("/", function (req, res, next) {
  const connection = mysql.createConnection({
    host: "127.0.0.1",
    port: 3306,
    user: "root",
    password: "Admin@ezuka",
    database: "sys",
  });

  connection.connect(function (err) {
    if (err) {
      console.error("Error connecting to the database:", err);
      return;
    }
    console.log("Connected to the database");

    // Perform database operations here

    connection.end(); // Close the connection when finished
  });

  // res.render('index', { title: 'Express' });
});

module.exports = router;
