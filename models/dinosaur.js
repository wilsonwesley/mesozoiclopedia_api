const mongoose = require("mongoose");

const { Schema } = mongoose;
const dinosaurSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    historicalPeriod: {
      type: String,
      required: true,
    },
    size: {
      type: Number,
      required: true,
    },
    weight: {
      type: Number,
      required: true,
    },
    continent: {
      type: String,
      required: false,
    },
    description: {
      type: String,
      required: false,
    },
    diet: {
      type: String,
      enum: ["carnivore", "herbivore", "omnivore", "unknown"],
      default: "unknown",
      required: false,
    },
    environment: {
      type: String,
      enum: ["terrestrial", "aquatic", "aerial", "unknown"],
      default: "unknown",
      required: false,
    },
    image: {
      type: Object,
      required: false,
    },
    category_id: {
      // Clé étrangère
      type: Schema.Types.ObjectId,
      ref: "Category",
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Dinosaur", dinosaurSchema);
