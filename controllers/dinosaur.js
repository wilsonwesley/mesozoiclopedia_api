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
