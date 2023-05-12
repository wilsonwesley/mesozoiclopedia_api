const mongoose = require("mongoose");

const { Schema } = mongoose;
const dinosaurSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    city: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Dinosaur", dinosaurSchema);
