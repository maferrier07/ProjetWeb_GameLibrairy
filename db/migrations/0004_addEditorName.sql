ALTER TABLE `editors` ADD `editorName` char;--> statement-breakpoint
CREATE UNIQUE INDEX `editors_editorName_unique` ON `editors` (`editorName`);