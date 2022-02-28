CREATE TABLE Product(id  SERIAL PRIMARY KEY NOT NULL,name VARCHAR(100) NOT NULL,price integer NOT NULL,category VARCHAR(50) NOT NULL);
INSERT INTO Product(name,price,category) VALUES('Samsung A51',5500,'1');
INSERT INTO Product(name,price,category) VALUES('Samsung A51',5500,'1');
INSERT INTO Product(name,price,category) VALUES('Samsung A51',5500,'1');
INSERT INTO Product(name,price,category) VALUES('Samsung A51',5500,'1');
INSERT INTO Product(name,price,category) VALUES('Samsung A51',5500,'1');

CREATE TABLE Username(id  SERIAL PRIMARY KEY NOT NULL,firstName VARCHAR(50) NOT NULL,lastName VARCHAR(50) NOT NULL,password text NOT NULL);
INSERT INTO Username(firstName,lastName,password) VALUES('Mohammed','Salah','Mohammed123#');
INSERT INTO Username(firstName,lastName,password) VALUES('Mohammed','Salah','Mohammed123#');
INSERT INTO Username(firstName,lastName,password) VALUES('Mohammed','Salah','Mohammed123#');
INSERT INTO Username(firstName,lastName,password) VALUES('Mohammed','Salah','Mohammed123#');
INSERT INTO Username(firstName,lastName,password) VALUES('Mohammed','Salah','Mohammed123#');
CREATE TABLE Orders("id" integer NOT NULL,"product_ID" integer REFERENCES Product(id) NOT NULL,"user_ID" integer REFERENCES Username(id) NOT NULL,"quantity" integer NOT NULL,"status" VARCHAR(50) NOT NULL);

