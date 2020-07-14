-- These sql queries are used to create the database and the main tables
-- credentials used:
-- username: debian-sys-maint
-- password: KC04tFxqpPh4JypZ

CREATE DATABASE `web-planner` CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
CREATE TABLE `Users` (
 `id` int NOT NULL AUTO_INCREMENT,
 `username` varchar(10) COLLATE utf8mb4_unicode_ci NOT NULL,
 `name` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
 `email` varchar(200) COLLATE utf8mb4_unicode_ci NOT NULL,
 `role` varchar(8) COLLATE utf8mb4_unicode_ci NOT NULL,
 `facultyNumber` int NOT NULL,
 `passoword` text COLLATE utf8mb4_unicode_ci NOT NULL,
 PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci