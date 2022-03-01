# Store

## To install this app

- this app is complete, you don't need to install any packages
- back-end run on port: 8003
- database run on port: 8002
- database server run on: localhost

### To build your database & user & connection

- In psql terminal:

* To create store database, write the following command:

      CREATE DATABASE store;

- You will need to send also access token in header

* To create Data_Test database, write the following command:

        CREATE DATABASE "Data_Test";

* To create user with password for production database, write the following command:

      CREATE USER "Mohammed_Salah" WITH PASSWORD 'Mohammed123#';

* To create user with password for development database, write the following command:

       CREATE USER "Mo_Test" WITH PASSWORD 'Mohammed123#';

* To make connection between user and production database, write the following command:

      GRANT ALL PRIVILEGES ON DATABASE "store" TO "Mohammed_Salah";

* To make connection between user and development database, write the following command:

      GRANT ALL PRIVILEGES ON DATABASE "Data_Test" TO "Mo_Test";

### You need to add .env in root

POSTGRS_HOST=localhost  
POSTGRS_DB=store  
POSTGRS_USER=Mohammed_Salah  
POSTGRS_PASSWORD=Mohammed123#  
POSTGRS_USER_TEST=Mo_Test  
POSTGRS_DB_TEST=Data_Test  
ENV=dev  
PORT=8002  
BCRYPT_PASSWORD=bla-bla-bla-mo-salah  
SALT_ROUNDS=10  
SECRET_KEY=MoSalah

---

**NOTE**
Don't forget to delete the blank spaces after each variable in the environment.

---

---

**NOTE**
This data is not sensitive and has been added for testing purposes only

---

## How to add table to production database

- db-migrate up: to add all table to database
- db-migrate down: to delete all table from production database

## How to add table to development database

- npm run test: to build your application then, add all table then,run jasmine for unit test then, drop database

## How to run server

- npm run start: to start nodemon package to start live server

---

**NOTE**
You will find all endpoint in REQUIREMENTS.md file

---
