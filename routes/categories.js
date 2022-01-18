const categoriesModel = require("../model/categories");
const express = require("express");
const router = express.Router();

//http://localhost/categories/
router.get("/", async (req, res) => {
  try {
    const data = await categoriesModel.selectAllCategories();
    console.log(data[0]);
    res.render("categories", { categoriesArr: data[0] });
  } catch (err) {}
});

module.exports = router;
