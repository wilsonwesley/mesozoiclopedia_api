const Dinosaur = require("../models/dinosaur");

/**
 * Create a dinosaur .
 * @param {Request} req
 * @param {Response} res
 */
exports.addDinosaur = async (req, res) => {
  try {
    const dinosaur = new Dinosaur({
      ...req.body,
    });

    const createDinosaur = await dinosaur.save();

    res.status(201).json(createDinosaur);
  } catch (error) {
    res.status(400).json(error);
  }
};

/**
 * Retrieve a list of every dinosaur.
 * @param {Request} req
 * @param {Response} res
 */
exports.getAllDinosaurs = async (req, res) => {
  try {
    const allDinosaurs = await Dinosaur.find();
    if (!allDinosaurs) {
      res.status(404).json(error);
    }
    res.status(200).json(allDinosaurs);
  } catch (error) {
    res.status(400).json(error);
  }
};

/**
 * Retrieve a specific dinosaur informations
 * @param {Request} req
 * @param {Response} res
 */
exports.getDinosaurDetail = async (req, res) => {
  try {
    const dinosaurInfos = await Dinosaur.findById(req.params.id).exec();

    if (!dinosaurInfos) {
      res.status(404).json("Aucun élément n'a été trouvé");
    }

    res.status(200).json(dinosaurInfos);
  } catch (error) {
    res.status(400).json(error);
  }
};

/**
 * Edit a dinosaur informations
 * @param {Request} req
 * @param {Response} res
 */
exports.editDinosaur = async (req, res) => {
  try {
    const editingDinosaur = await Dinosaur.findByIdAndUpdate(
      req.params.id,
      {
        ...req.body,
      },
      { returnDocument: "after" }
    );
    if (!editingDinosaur) {
      res.status(404).json("Aucun élément n'a été trouvé");
    }
    res.status(200).json(editingDinosaur);
  } catch (error) {
    res.status(400).json(error);
  }
};

/**
 * Delete a dinosaur
 * @param {Request} req
 * @param {Response} res
 */
exports.deleteDinosaur = async (req, res) => {
  try {
    const deletingDinosaur = await Dinosaur.findByIdAndDelete(req.params.id, {
      ...req.body,
    });

    res.status(204).json(deletingDinosaur);
  } catch (error) {
    res.status(400).json(error);
  }
};

/**
 * Retrieve all dinosaurs from the selected historical period.
 * @param {Request} req
 * @param {Response} res
 */
exports.filterDinosaurByHistoricalPeriod = async (req, res) => {
  try {
    const dinosaurFromHistoricalPeriod = await Dinosaur.find({
      historicalPeriod: req.params.historicalPeriod,
    }).exec();
    if (!dinosaurFromHistoricalPeriod) {
      res.status(404).json("Aucun élément n'a été trouvé");
    }
    res.status(200).json(dinosaurFromHistoricalPeriod);
  } catch (error) {
    res.status(400).json(error);
  }
};

/**
 * Retrieve all dinosaurs from the selected continent.
 * @param {Request} req
 * @param {Response} res
 */
exports.filterDinosaurByContinent = async (req, res) => {
  try {
    const dinosaurFromContinent = await Dinosaur.find({
      continent: req.params.continent,
    }).exec();
    if (!dinosaurFromContinent) {
      res.status(404).json("Aucun élément n'a été trouvé");
    }
    res.status(200).json(dinosaurFromContinent);
  } catch (error) {
    res.status(400).json(error);
  }
};
