const express = require("express");
// const path = require("path");
const cookieParser = require("cookie-parser");
const cors = require("cors");

const swaggerUI = require("swagger-ui-express");
const swaggerJsdoc = require("swagger-jsdoc");

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

// setup defini dans le dossier docs
const swaggerConfig = require("./docs/swagger");
// lie swagger ui et swagger jsdoc
const openapiSpecification = swaggerJsdoc(swaggerConfig);

const dinosaurRouter = require("./routes/dinosaur");
const categoryRouter = require("./routes/category");

// Sert a permettre l'envoie de données JSON dans le body d'une requête
app.use(express.json());

app.use(cors());
app.use(cookieParser());
app.use("/dinosaurs", dinosaurRouter);
app.use("/categories", categoryRouter);

// server
app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(openapiSpecification));

module.exports = app;
