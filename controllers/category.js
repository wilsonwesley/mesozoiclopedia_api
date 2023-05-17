const Category = require("./../models/category");

/**
 * Create a category .
 * @param {Request} req
 * @param {Response} res
 */
exports.addCategory = async (req, res) => {
  try {
    const category = new Category({
      ...req.body,
    });

    const createCategory = await category.save();

    res.status(201).json(createCategory);
  } catch (error) {
    res.status(400).json(error);
  }
};

/**
 * Retrieve a list of every category.
 * @param {Request} req
 * @param {Response} res
 */
exports.getAllCategories = async (req, res) => {
  try {
    const allCategories = await Category.find();
    if (!allCategories) {
      res.status(404).json(error);
    }
    res.status(200).json(allCategories);
  } catch (error) {
    res.status(400).json(error);
  }
};
