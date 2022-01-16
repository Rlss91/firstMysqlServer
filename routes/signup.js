const express = require("express");

const userSchema = require("./validation/users");
const userModel = require("../model/users");
const bcrypt = require("../config/bcrypt");

const router = express.Router();

/* GET signup page. */
router.get("/", function (req, res) {
  res.render("signup", { title: "Express" });
});

router.post("/", async (req, res) => {
  try {
    const value = await userSchema.schema.validateAsync(req.body, {
      abortEarly: false,
    });
    value.password = await bcrypt.createHash(value.password);
    const data = await userModel.selectUsersByEmail(req.body.email);
    console.log(data[0]);
    if (data[0].length != 0) {
      throw "email already exist";
    }
    const data2 = await userModel.insertUser(
      value.name,
      value.email,
      value.password
    );
    console.log(data2);
    res.redirect("/");
  } catch (err) {
    console.error(err);
    res.redirect("/");
  }
});

module.exports = router;
