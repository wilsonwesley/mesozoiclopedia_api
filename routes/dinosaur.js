const express = require("express");

const router = express.Router();

const dinosaurCtrl = require("../controllers/dinosaur");

router.post("/add", dinosaurCtrl.addDinosaur);
router.get("/", dinosaurCtrl.getAllDinosaurs);

module.exports = router;
