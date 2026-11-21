const express = require("express");
const app = express();
const PORT = 8080;

const hbs = require("hbs");
const path = require("path")

// Configuration de Handlebars pour Express
app.set("view engine", "hbs"); // On définit le moteur de template que Express va utiliser
app.set("views", path.join(__dirname, "views")); // On définit le dossier des vues (dans lequel se trouvent les fichiers .hbs)
hbs.registerPartials(path.join(__dirname, "views", "partials"));

app.use(express.static("public"));

app.get("/", async (req, res) => {
    res.render("index");
});

app.listen(PORT, () => {
    console.log('Server is runnig on port : ${PORT}')
});