const mysql = require("mysql");

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "super123",
  database: "db_test",
});

db.connect(err => {
  if (err) {
    console.log("Error connect to database", err);
  } else {
    console.log("Connect Database to Mysql");
  }
});

module.exports = db;
