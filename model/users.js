const mysqlpool = require("./mysqlpool");

const selectUsersByEmail = (email) => {
  return mysqlpool.pool.execute("select * from users where email=?", [email]);
};

const selectAllUsers = () => {
  return mysqlpool.pool.execute("select * from users");
};

// module.exports.selectUsersByEmail = selectUsersByEmail;
module.exports = {
  selectUsersByEmail,
  selectAllUsers,
};
