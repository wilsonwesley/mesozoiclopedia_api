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
    const dinosaurByHistoricalPeriod = await Dinosaur.find({
      historicalPeriod: req.params.historicalPeriod,
    }).exec();
    if (!dinosaurByHistoricalPeriod) {
      res.status(404).json("Aucun élément n'a été trouvé");
    }
    res.status(200).json(dinosaurByHistoricalPeriod);
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
    const dinosaurByContinent = await Dinosaur.find({
      continent: req.params.continent,
    }).exec();
    if (!dinosaurByContinent) {
      res.status(404).json("Aucun élément n'a été trouvé");
    }
    res.status(200).json(dinosaurByContinent);
  } catch (error) {
    res.status(400).json(error);
  }
};

/**
 * Retrieve all dinosaurs from the selected name.
 * @param {Request} req
 * @param {Response} res
 */
exports.filterDinosaurByName = async (req, res) => {
  try {
    const dinosaurByName = await Dinosaur.find({
      name: req.params.name,
    }).exec();
    if (!dinosaurByName) {
      res.status(404).json("Aucun élément n'a été trouvé");
    }
    res.status(200).json(dinosaurByName);
  } catch (error) {
    res.status(400).json(error);
  }
};

/**
 * Retrieve all dinosaurs from the selected diet.
 * @param {Request} req
 * @param {Response} res
 */
exports.filterDinosaurByDiet = async (req, res) => {
  try {
    const dinosaurByDiet = await Dinosaur.find({
      diet: req.params.diet,
    }).exec();
    if (!dinosaurByDiet) {
      res.status(404).json("Aucun élément n'a été trouvé");
    }
    res.status(200).json(dinosaurByDiet);
  } catch (error) {
    res.status(400).json(error);
  }
};

/**
 * Retrieve all dinosaurs from the selected environment.
 * @param {Request} req
 * @param {Response} res
 */
exports.filterDinosaurByEnvironment = async (req, res) => {
  try {
    const dinosaurByEnvironment = await Dinosaur.find({
      environment: req.params.environment,
    }).exec();
    if (!dinosaurByEnvironment) {
      res.status(404).json("Aucun élément n'a été trouvé");
    }
    res.status(200).json(dinosaurByEnvironment);
  } catch (error) {
    res.status(400).json(error);
  }
};
