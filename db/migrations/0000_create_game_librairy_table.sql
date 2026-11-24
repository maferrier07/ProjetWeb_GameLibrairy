CREATE TABLE `games` (
	`ID` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`IDeditor` integer NOT NULL,
	`releaseDate` date,
	`IDtag` integer NOT NULL,
	`gameName` char,
	`PEGI` integer,
	`markOn20` integer
);
--> statement-breakpoint
CREATE TABLE `editors` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`birthDate` date,
	`IDnationality` integer
);
--> statement-breakpoint
CREATE TABLE `tags` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`featureName` char
);
--> statement-breakpoint
CREATE TABLE `nationalities` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`countryName` char
);
