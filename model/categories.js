const mysqlpool = require("./mysqlpool");

const selectAllCategories = () => {
  const q = "SELECT * FROM categories";
  return mysqlpool.pool.execute(q);
};

module.exports = {
  selectAllCategories,
};
