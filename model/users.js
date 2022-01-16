const mysqlpool = require("./mysqlpool");

const selectUsersByEmail = (email) => {
  return mysqlpool.pool.execute("select * from users where email=?", [email]);
};

const selectAllUsers = () => {
  return mysqlpool.pool.execute("select * from users");
};

const insertUser = (name, email, password) => {
  let q = "insert into users ";
  q += " (name, email, password) ";
  q += " values ";
  q += " (?,?,?)";
  return mysqlpool.pool.execute(q, [name, email, password]);
};

// module.exports.selectUsersByEmail = selectUsersByEmail;
module.exports = {
  selectUsersByEmail,
  selectAllUsers,
  insertUser,
};
