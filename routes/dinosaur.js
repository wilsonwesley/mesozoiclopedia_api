const express = require("express");

const router = express.Router();

const dinosaurCtrl = require("../controllers/dinosaur");

router.post("/add", dinosaurCtrl.addDinosaur);
router.get(
  "/historicalPeriod/:historicalPeriod",
  dinosaurCtrl.filterDinosaurByHistoricalPeriod
);
router.get("/continent/:continent", dinosaurCtrl.filterDinosaurByContinent);
router.get("/:id", dinosaurCtrl.getDinosaurDetail);
router.get("/", dinosaurCtrl.getAllDinosaurs);
router.patch("/edit/:id", dinosaurCtrl.editDinosaur);
router.delete("/delete/:id", dinosaurCtrl.deleteDinosaur);

module.exports = router;
