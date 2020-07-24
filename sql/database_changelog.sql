-- ========================== Init database ============================

CREATE DATABASE `web-planner` CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- =========================== Users table =============================

CREATE TABLE `users`(`id` int NOT NULL AUTO_INCREMENT, `username` varchar(10) COLLATE utf8mb4_unicode_ci NOT NULL, `name` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL, `email` varchar(200) COLLATE utf8mb4_unicode_ci NOT NULL, `role` varchar(8) COLLATE utf8mb4_unicode_ci NOT NULL, `facultyNumber` int NOT NULL, `password` text COLLATE utf8mb4_unicode_ci NOT NULL, PRIMARY KEY(`id`)) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci

ALTER TABLE `users` ADD UNIQUE(`username`);

ALTER TABLE `users` ADD UNIQUE(`facultyNumber`);

ALTER TABLE `users` CHANGE `facultyNumber` `facultyNumber` INT NULL;

ALTER TABLE `users` ADD `verificationCode` VARCHAR(100) NULL DEFAULT NULL AFTER `password`; 

-- =========================== Events table =============================

CREATE TABLE `events` ( `id` INT NOT NULL AUTO_INCREMENT, `username` VARCHAR(10) NOT NULL, `subject` VARCHAR(100) NOT NULL, `start` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP, `end` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP, PRIMARY KEY(`id`), UNIQUE(`start`), UNIQUE(`end`)) ENGINE = InnoDB;

ALTER TABLE `events` ADD FOREIGN KEY(`username`) REFERENCES `users`(`username`) ON DELETE RESTRICT ON UPDATE RESTRICT;

ALTER TABLE `events` ADD `fn_number` VARCHAR(130) DEFAULT NULL AFTER `username`;

ALTER TABLE `events` ADD `description` VARCHAR(130) DEFAULT NULL AFTER `subject`;

ALTER TABLE `events` ADD `presentation_url` VARCHAR(200) DEFAULT NULL AFTER `description`;

ALTER TABLE `events` ADD `meeting_url` VARCHAR(130) DEFAULT NULL AFTER `presentation_url`;

-- =========================== Slots table =============================

CREATE TABLE `slots` (`id` INT NOT NULL AUTO_INCREMENT, `name` VARCHAR(100) NOT NULL, `date` VARCHAR(100) NOT NULL, `start_hour` VARCHAR(100) NOT NULL,  `end_hour` VARCHAR(100) NOT NULL, `period` INT NOT NULL, PRIMARY KEY(`id`)) ENGINE = InnoDB;

ALTER TABLE `slots` ADD `delay` INT NOT NULL DEFAULT '0' AFTER `period`;

ALTER TABLE `slots` ADD UNIQUE( `date`); 

-- ======================= Invalid datetime fix =========================

SELECT @@GLOBAL.sql_mode global, @@SESSION.sql_mode session;
SET sql_mode = '';
SET GLOBAL sql_mode = '';