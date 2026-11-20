CREATE TABLE `game_tags` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`gameID` integer,
	`tagID` integer,
	FOREIGN KEY (`gameID`) REFERENCES `games`(`ID`) ON UPDATE no action ON DELETE no action,
	FOREIGN KEY (`tagID`) REFERENCES `tags`(`id`) ON UPDATE no action ON DELETE no action
);
--> statement-breakpoint
PRAGMA foreign_keys=OFF;--> statement-breakpoint
CREATE TABLE `__new_games` (
	`ID` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`IDeditor` integer NOT NULL,
	`releaseDate` date,
	`gameName` char,
	`PEGI` integer,
	`markOn20` integer,
	FOREIGN KEY (`IDeditor`) REFERENCES `editors`(`id`) ON UPDATE no action ON DELETE no action
);
--> statement-breakpoint
INSERT INTO `__new_games`("ID", "IDeditor", "releaseDate", "gameName", "PEGI", "markOn20") SELECT "ID", "IDeditor", "releaseDate", "gameName", "PEGI", "markOn20" FROM `games`;--> statement-breakpoint
DROP TABLE `games`;--> statement-breakpoint
ALTER TABLE `__new_games` RENAME TO `games`;--> statement-breakpoint
PRAGMA foreign_keys=ON;--> statement-breakpoint
CREATE TABLE `__new_editors` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`birthDate` date,
	`IDnationality` integer,
	FOREIGN KEY (`IDnationality`) REFERENCES `nationalities`(`id`) ON UPDATE no action ON DELETE no action
);
--> statement-breakpoint
INSERT INTO `__new_editors`("id", "birthDate", "IDnationality") SELECT "id", "birthDate", "IDnationality" FROM `editors`;--> statement-breakpoint
DROP TABLE `editors`;--> statement-breakpoint
ALTER TABLE `__new_editors` RENAME TO `editors`;