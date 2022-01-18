const config = require("config");
const mysql = require("mysql2");

let pool = mysql.createPool({
  ...config.get("dbConfig"),
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

// let pool = mysql.createPool({
//   host: "localhost",
//   user: "root",
//   password: "1234",
//   database: "eshop",
//   waitForConnections: true,
//   connectionLimit: 10,
//   queueLimit: 0,
// });

module.exports.pool = pool.promise();
