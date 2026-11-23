const express = require("express");
const app = express();
const PORT = 8080;

const hbs = require("hbs");
const path = require("path");

// Configuration de Handlebars pour Express
app.set("view engine", "hbs"); // On définit le moteur de template que Express va utiliser
app.set("views", path.join(__dirname, "views")); // On définit le dossier des vues (dans lequel se trouvent les fichiers .hbs)
hbs.registerPartials(path.join(__dirname, "views", "partials"));

app.use(express.static("public"));

const db = require("./db");
const { gamesTable } = require("./db/schema");
const { desc, eq } = require("drizzle-orm");

app.get("/", async (req, res) => {
    const FiveBestRateGame = await db
        .select()
        .from(gamesTable)
        .orderBy(desc(gamesTable.mark))
        .limit(5);

    const PinGame = await db
        .select()
        .from(gamesTable)
        .where(eq(gamesTable.isPin, true));
    res.render("index", { FiveBestRateGame, PinGame });
});

app.listen(PORT, () => {
    console.log(`Server is running on port : ${PORT}`);
});
