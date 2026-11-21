const db = require("./index");
const { gamesTable, nationality, editorsTable, tagsTable, gameTags } = require("./schema");
const { countries, ImgToUrl, GetNationalityID, GetTagsID, getEditorID } = require("../utils");

const editors = [
    { birthdate : "1889", name : "Nintendo", nationality : GetNationalityID("Japan") },
    { birthdate : "1998", name : "Rockstar", nationality : GetNationalityID("United States") },
    { birthdate : "1979", name : "Activision", nationality : GetNationalityID("United States") },
    { birthdate : "2009", name : "Mojang", nationality : GetNationalityID("Sweden") },
    { birthdate : "1991", name : "Epic Games", nationality : GetNationalityID("United States") }

];

const games = [
    { editor : "Nintendo", releaseDate : "21/11/2001", name : "Super Smash Bros Melee", PEGI : 3, mark : 18, imagePath : "public/image/ssbm_logo.png", tags : ["Combat", "Multijoueur"]},
    { editor : "Rockstar", releaseDate : "19/11/2026", name : "GTA VI", PEGI : 18, mark : 20, imagePath : "public/image/gta6_logo.png", tags : ["Action-Aventure"]},
    { editor : "Activision", releaseDate : "23/10/2026", name : "Call of Duty Modern Warfare 4", PEGI : 18, mark : 13, imagePath : "public/image/codmw4_logo.png", tags : ["Combat"]},
    { editor : "Mojang", releaseDate : "17/05/2011", name : "Minecraft", PEGI : 3, mark : 17, imagePath : "public/image/minecraft_logo.png", tags : ["Aventure", "Multijoueur"]},
    { editor : "Epic Games", releaseDate : "25/08/2017", name : "Fortnite", PEGI :16, mark : 15, imagePath : "public/image/fortnite_logo.png", tags : ["Battle Royal", "Multijoueur"]}
];

const tags = [
    "Combat", "Multijoueur", "Action-Aventure", "Battle Royal", "Aventure"
];

async function seedNationalities() {
    const rows = countries.map((country) => ({ country }));
    await db.insert(nationality).values(rows).onConflictDoNothing();
};


async function seedTags() {
    const rows = tags.map((feature) => ({ feature }));
    await db.insert(tagsTable).values(rows).onConflictDoNothing().returning();
};

let editorsID = [];
async function seedEditors() {
    for (const editor of editors) {
        const [newEditor] = await db.insert(editorsTable).values(editor).onConflictDoNothing().returning();
        editorsID.push(newEditor);
    }
};

async function seedGames() {
    let tagsID = await db.select().from(tagsTable);
    for (const { imagePath, editor, tags, ...game } of games) {
        const image = await ImgToUrl(imagePath);
        const editorID = getEditorID(editorsID, editor);
        const [ newGame ] = await db.insert(gamesTable).values({ editorID, ...game, image }).onConflictDoNothing().returning();

        
        const gameID = newGame.id;
        for (const tag of tags) {
            const tagID = GetTagsID(tagsID, tag);
            await db.insert(gameTags).values({ tagID, gameID }).onConflictDoNothing();
        }
    }
};

async function main() {
    await db.delete(gamesTable);
    await db.delete(editorsTable);

    await seedNationalities();
    await seedTags();
    await seedEditors();
    await seedGames();
};

main()
    .then(() => process.exit(0))
    .catch((err) => {
        console.error(err);
        process.exit(1);
    });