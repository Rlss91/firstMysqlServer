const mysql = require("mysql2");

// create the connection to database
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "1234",
  database: "eshop",
});

let qry = "select * from users";
let qryfunc = (err, results, fields) => {
  console.log(results);
};

connection.query(qry, qryfunc);
