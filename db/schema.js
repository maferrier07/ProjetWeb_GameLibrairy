const { sql } = require("drizzle-orm");
const { char } = require("drizzle-orm/mysql-core");
const { date } = require("drizzle-orm/mysql-core");
const { sqliteTable, integer, text } = require("drizzle-orm/sqlite-core");

const gamesTable = sqliteTable("games", {
    id : integer("ID").primaryKey({autoIncrement:true}),
    editorID : integer("IDeditor").notNull().references(() => editorsTable.id),
    releaseDate : date("releaseDate"),
    name : char("gameName"), 
    PEGI : integer("PEGI"),
    mark : integer("markOn20"),
    description : char("gameDescription"),
    image : char("gameImage")
});

const editorsTable = sqliteTable("editors", {
    id : integer("id").primaryKey({autoIncrement:true}),
    name : char("editorName").unique(),
    birthDate : date("birthDate"),
    nationality : integer("IDnationality").references(() => nationality.id)
});

const tagsTable = sqliteTable("tags", {
    id : integer("id").primaryKey({autoIncrement:true}),
    feature : char("featureName").unique()
});

const nationality = sqliteTable("nationalities", {
    id : integer("id").primaryKey({autoIncrement:true}),
    country : char("countryName").unique()
});

const gameTags = sqliteTable("game_tags", {
    id : integer("id").primaryKey({autoIncrement:true}),
    gameID : integer("gameID").references(() => gamesTable.id),
    tagID : integer("tagID").references(() => tagsTable.id)
});

module.exports = { gamesTable, editorsTable, tagsTable, nationality, gameTags };
