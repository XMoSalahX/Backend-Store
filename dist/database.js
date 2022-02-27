"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
const pg_1 = require("pg");
dotenv_1.default.config();
const { POSTGRS_HOST, POSTGRS_DB, POSTGRS_DB_TEST, POSTGRS_USER, POSTGRS_USER_TEST, POSTGRS_PASSWORD, ENV, PORT, } = process.env;
let Client;
if (ENV === "dev") {
    Client = new pg_1.Pool({
        port: PORT,
        host: POSTGRS_HOST,
        database: POSTGRS_DB,
        user: POSTGRS_USER,
        password: POSTGRS_PASSWORD,
    });
}
else {
    Client = new pg_1.Pool({
        port: PORT,
        host: POSTGRS_HOST,
        database: POSTGRS_DB_TEST,
        user: POSTGRS_USER_TEST,
        password: POSTGRS_PASSWORD,
    });
}
exports.default = Client;
