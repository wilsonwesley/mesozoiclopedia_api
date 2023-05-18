const options = {
  failOnErrors: true, // Whether or not to throw when parsing errors. Defaults to false.
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Mesozoiclopedia API avec Swagger",
      version: "0.1.0",
      description: "Documentation API Mesozoiclopeda",
      license: {
        name: "MIT",
        url: "https://spdx.org/licenses/MIT.html",
      },
    },
    servers: [
      {
        url: "https://mesozoiclopedia-api.onrender.com/",
        description: "Serveur Onrender",
      },
      {
        url: "http://localhost:5000",
        description: "Serveur localhost",
      },
    ],
  },
  apis: ["./routes/*.js"],
};

module.exports = options;
