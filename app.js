const express = require("express");
// const path = require("path");
const cookieParser = require("cookie-parser");
const cors = require("cors");

require("dotenv").config();
const db = require("./database/dbConnect");

db.then(() => {
  const connectionStatus = "connected";
  return connectionStatus;
});

const app = express();
app.get("/", function (req, res) {
  res.send("Hello world");
});

const dinosaurRouter = require("./routes/dinosaur");

// Sert a permettre l'envoie de données JSON dans le body d'une requête
app.use(express.json());

app.use(cors());
app.use(cookieParser());
app.use("/dinosaurs", dinosaurRouter);

module.exports = app;
