-- CREATE TABLE `web-planner`.`events`
-- ( `id` INT NOT NULL AUTO_INCREMENT , `facultyNumber` INT NOT NULL , `name` VARCHAR
-- (100) NOT NULL , PRIMARY KEY
-- (`id`)) ENGINE = InnoDB;

-- ALTER TABLE `events`
-- ADD `start` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP AFTER `name`,
-- ADD UNIQUE
-- (`start`);

-- ALTER TABLE `events`
-- ADD `
-- end` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP AFTER `start`,
-- ADD UNIQUE
-- (`
-- end`);

-- ALTER TABLE `events`
-- ADD `subject` VARCHAR
-- (100) NOT NULL AFTER `name`;

-- ALTER TABLE `events`
-- ADD FOREIGN KEY
-- (`facultyNumber`) REFERENCES `users`
-- (`facultyNumber`) ON
-- DELETE RESTRICT ON
-- UPDATE RESTRICT;

CREATE TABLE `events` ( `id` INT NOT NULL AUTO_INCREMENT, `username` VARCHAR(10) NOT NULL, `subject` VARCHAR(100) NOT NULL, `start` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP, `end` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP, PRIMARY KEY(`id`), UNIQUE(`start`), UNIQUE(`end`)) ENGINE = InnoDB;

ALTER TABLE `events` ADD FOREIGN KEY(`username`) REFERENCES `users`(`username`) ON DELETE RESTRICT ON UPDATE RESTRICT;

ALTER TABLE `events` ADD `fn_number` VARCHAR(130) DEFAULT NULL AFTER `username`;

ALTER TABLE `events` ADD `description` VARCHAR(130) DEFAULT NULL AFTER `subject`;

ALTER TABLE `events` ADD `presentation_url` VARCHAR(200) DEFAULT NULL AFTER `description`;

ALTER TABLE `events` ADD `meeting_url` VARCHAR(130) DEFAULT NULL AFTER `presentation_url`;