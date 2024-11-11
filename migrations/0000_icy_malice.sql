-- Current sql file was generated after introspecting the database
-- If you want to run this migration please uncomment this code before executing migrations
/*
CREATE TABLE `jornada` (
	`id_jornada` integer PRIMARY KEY,
	`nom_jornada` text(255)
);
--> statement-breakpoint
CREATE TABLE `tipo_evento` (
	`id_tipo_evento` integer PRIMARY KEY,
	`des_tipo_evento` text(255)
);
--> statement-breakpoint
CREATE TABLE `lugares` (
	`idLugar` integer PRIMARY KEY,
	`nomLugar` text(255)
);
--> statement-breakpoint
CREATE TABLE `admin` (
	`idAdmin` integer,
	`contraseña` integer
);
--> statement-breakpoint
CREATE TABLE `eventos` (
	`idEvento` integer PRIMARY KEY AUTOINCREMENT,
	`tituloEvento` text,
	`descEvento` text,
	`fecEvento` numeric,
	`idTipoEvento` integer,
	`idLugar` integer,
	`idJornada` integer,
	FOREIGN KEY (`idTipoEvento`) REFERENCES `tipoEvento`(`idTipoEvento`) ON UPDATE no action ON DELETE no action,
	FOREIGN KEY (`idLugar`) REFERENCES `lugares`(`idLugar`) ON UPDATE no action ON DELETE no action,
	FOREIGN KEY (`idJornada`) REFERENCES `jornada`(`idJornada`) ON UPDATE no action ON DELETE no action
);

*/