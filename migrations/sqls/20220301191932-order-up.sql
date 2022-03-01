CREATE TABLE Orders("id" integer NOT NULL,"product_ID" integer REFERENCES Product(id) NOT NULL,"user_ID" integer REFERENCES Username(id) NOT NULL,"quantity" integer NOT NULL,"status" VARCHAR(50) NOT NULL);
INSERT INTO orders(id,"product_ID","user_ID",quantity,status) VALUES(1,1,1,1,'Active');
INSERT INTO orders(id,"product_ID","user_ID",quantity,status) VALUES(1,1,1,1,'Active');
INSERT INTO orders(id,"product_ID","user_ID",quantity,status) VALUES(1,1,1,1,'Active');
INSERT INTO orders(id,"product_ID","user_ID",quantity,status) VALUES(1,1,1,1,'Active');
INSERT INTO orders(id,"product_ID","user_ID",quantity,status) VALUES(1,1,1,1,'Active');