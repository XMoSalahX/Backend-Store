# Store

## To install this app

- this app is complete, you don't need to install any packages
- back-end run on port: 8003
- database run on port: 8002

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
This data is not sensitive and has been added for testing purposes only

---

### How to add table to production database

- db-migrate up: to add all table to database
- db-migrate down: to delete all table from production database

### How to add table to development database

- npm run test: to build your application then, add all table then,run jasmine for unit test then, drop database

### How to run server

- npm run start: to start nodemon package to start live server

---

**NOTE**
You will need to add data in the user and product database so that no errors occur during the test, or the test is run twice.

---

---

**NOTE**
You will find all endpoint in REQUIREMENTS.md file

---
