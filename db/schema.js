const { sql } = require("drizzle-orm");
const { char } = require("drizzle-orm/mysql-core");
const { date } = require("drizzle-orm/mysql-core");
const { sqliteTable, integer, text } = require("drizzle-orm/sqlite-core");

const jeu = sqliteTable("games", {
    id : integer("id").primaryKey({autoIncrement:true}),
    IDeditor : integer("id").notNull(),
    releaseDate : date(),
    IDtag : integer("id").notNull(),
    name : char("gameName"), 
    PEGI : integer(),
    note:integer("on20")
});

module.exports = { jeu };