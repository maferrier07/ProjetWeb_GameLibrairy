const { sql } = require("drizzle-orm");
const { char } = require("drizzle-orm/mysql-core");
const { date } = require("drizzle-orm/mysql-core");
const { sqliteTable, integer, text } = require("drizzle-orm/sqlite-core");

const gamesTable = sqliteTable("games", {
    id : integer("ID").primaryKey({autoIncrement:true}),
    editor : integer("IDeditor").notNull().references(() => editor.id),
    releaseDate : date("releaseDate"),
    name : char("gameName"), 
    PEGI : integer("PEGI"),
    mark : integer("markOn20"),
    image : char("gameImage")
});

const editor = sqliteTable("editors", {
    id : integer("id").primaryKey({autoIncrement:true}),
    birthDate : date("birthDate"),
    nationality : integer("IDnationality").references(() => nationality.id)
});

const tag = sqliteTable("tags", {
    id : integer("id").primaryKey({autoIncrement:true}),
    feature : char("featureName")
});

const nationality = sqliteTable("nationalities", {
    id : integer("id").primaryKey({autoIncrement:true}),
    country : char("countryName").unique()
});

const gameTags = sqliteTable("game_tags", {
    id : integer("id").primaryKey({autoIncrement:true}),
    gameID : integer("gameID").references(() => games.id),
    tagID : integer("tagID").references(() => tag.id)
});

module.exports = { games, editor, tag, nationality, gameTags };
