const mysql = require('mysql2');

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'super123',
  database: 'db_test'
});

db.connect((err) => {
  if (err) {
    console.log('Error connecting to the database', err);
  } else {
    console.log('Connected to MySQL database');
  }
});

async function checkConnection() {
    return new Promise((resolve, reject) => {
      db.ping((err) => {
        if (err) {
          resolve(false);
        } else {
          resolve(true);
        }
      });
    });
  }
  
  module.exports = { db, checkConnection };