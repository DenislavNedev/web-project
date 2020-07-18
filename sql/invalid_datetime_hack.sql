-- If for some reason when creating an event you receive error like "invalid datetime value..."
-- just invoke these couple of spells:

SELECT @@GLOBAL.sql_mode global, @@SESSION.sql_mode session;
SET sql_mode = '';
SET GLOBAL sql_mode = '';