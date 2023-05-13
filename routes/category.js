const express = require("express");

const router = express.Router();

const categoryCtrl = require("./../controllers/category");

router.post("/add", categoryCtrl.addCategory);

router.get("/", categoryCtrl.getAllCategories);

module.exports = router;
