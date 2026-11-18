const { sql } = require("drizzle-orm");
const { char } = require("drizzle-orm/mysql-core");
const { date } = require("drizzle-orm/mysql-core");
const { sqliteTable, integer, text } = require("drizzle-orm/sqlite-core");

const jeu = sqliteTable("games", {
    id : integer("ID").primaryKey({autoIncrement:true}),
    editor : integer("IDeditor").notNull(),
    releaseDate : date("releaseDate"),
    tag : integer("IDtag").notNull(),
    name : char("gameName"), 
    PEGI : integer("PEGI"),
    mark : integer("markOn20")
});

const editor = sqliteTable("editors", {
    id : integer("id").primaryKey({autoIncrement:true}),
    birthDate : date("birthDate"),
    nationality : integer("IDnationality")
});

const tag = sqliteTable("tags", {
    id : integer("id").primaryKey({autoIncrement:true}),
    feature : char("featureName")
});

const nationality = sqliteTable("nationalities", {
    id : integer("id").primaryKey({autoIncrement:true}),
    country : char("countryName")
});

module.exports = { jeu, editor, tag, nationality };
