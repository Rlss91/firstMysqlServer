const usersModel = require("../model/users");
const express = require("express");
const router = express.Router();

/* GET users listing. */
router.get("/", async (req, res) => {
  try {
    let data = await usersModel.selectAllUsers();
    console.log(data);
    res.render("users", { users: data[0] });
  } catch (err) {
    console.error(err);
  }
});

module.exports = router;
