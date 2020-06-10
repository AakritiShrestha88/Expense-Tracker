Create database expense_tracker_db;
use expense_tracker_db;
show tables;
create table expenses(
id INT UNSIGNED NOT NULL auto_increment,
name VARCHAR(100)NOT NULL,
amount float NOT NULL,
category varchar(100)NOT NULL,
description varchar(1000)not null,
primary key(id));
show tables;
Describe expenses;
INSERT INTO expenses VALUES (100, 'Aakriti',123.76,'food','I love the food');
INSERT INTO expenses VALUES (101, 'Bikash',122.76,'spice','Spice is good');
INSERT INTO expenses VALUES (102, 'Bishal',112.76,'food','N/A');
INSERT INTO expenses VALUES (103, 'Aavash',110.76,'spice','N/A');
show tables;
select * from expenses;
-- ALTER TABLE expenses"food"
-- DROP COLUMN column_name;
