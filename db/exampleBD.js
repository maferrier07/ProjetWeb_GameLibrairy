const db = require("./index");
const { gamesTable, nationality, editorsTable, tagsTable } = require("./schema");
const { countries, ImgToUrl, GetIdNationality, getEditorID } = require("../utils");

const editors = [
    { birthdate : "1889", name : "Nintendo", nationality : GetIdNationality("Japan") },
    { birthdate : "1998", name : "Rockstar", nationality : GetIdNationality("United States") },
    { birthdate : "1979", name : "Activision", nationality : GetIdNationality("United States") },
    { birthdate : "2009", name : "Mojang", nationality : GetIdNationality("Sweden") },
    { birthdate : "1991", name : "Epic Games", nationality : GetIdNationality("United States") }

];

const games = [
    { editor : "Nintendo", releaseDate : "21/11/2001", name : "Super Smash Bros Melee", PEGI : 3, mark : 18, imagePath : "public/image/ssbm_logo.png"},
    { editor : "Rockstar", releaseDate : "19/11/2026", name : "GTA VI", PEGI : 18, mark : 20, imagePath : "public/image/gta6_logo.png"},
    { editor : "Activision", releaseDate : "23/10/2026", name : "Call of Duty Modern Warfare 4", PEGI : 18, mark : 13, imagePath : "public/image/codmw4_logo.png"},
    { editor : "Mojang", releaseDate : "17/05/2011", name : "Minecraft", PEGI : 3, mark : 17, imagePath : "public/image/minecraft_logo.png"},
    { editor : "Epic Games", releaseDate : "25/08/2017", name : "Fortnite", PEGI :16, mark : 15, imagePath : "public/image/fortnite_logo.png"}
];

const tags = [
    "Combat", "Multijoueur", "Action-Aventure", "Battle Royal", "Aventure"
];

async function seedNationalities() {
    const rows = countries.map((country) => ({ country }));
    await db.insert(nationality).values(rows).onConflictDoNothing();
};

let editorsID = [];
async function seedEditors() {
    for (const editor of editors) {
        const [newEditor] = await db.insert(editorsTable).values(editor).onConflictDoNothing().returning();
        editorsID.push(newEditor);
    }
};

async function seedGames() {
    for (const { imagePath, editor, ...game } of games) {
        const image = await ImgToUrl(imagePath);
        const editorID = getEditorID(editorsID, editor);
        await db.insert(gamesTable).values({ editorID, ...game, image }).onConflictDoNothing();
    }
};

async function seedTags() {
    const rows = tags.map((feature) => ({ feature }));
    await db.insert(tagsTable).values(rows).onConflictDoNothing();
};

async function main() {
    await db.delete(gamesTable);
    await db.delete(editorsTable);

    await seedNationalities();
    await seedEditors();
    await seedGames();
    await seedTags();

    
};

main()
    .then(() => process.exit(0))
    .catch((err) => {
        console.error(err);
        process.exit(1);
    });