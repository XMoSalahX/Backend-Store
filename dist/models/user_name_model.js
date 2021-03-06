"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Add_User_Class = void 0;
const database_1 = __importDefault(require("../database"));
const bcrypt_1 = __importDefault(require("bcrypt"));
const { BCRYPT_PASSWORD, SALT_ROUNDS } = process.env;
class Add_User_Class {
    createUser(C) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const hash = bcrypt_1.default.hashSync(C.password + BCRYPT_PASSWORD, parseInt(SALT_ROUNDS));
                const sql = "INSERT INTO Username(firstName,lastName,password) VALUES($1,$2,$3) RETURNING id";
                const conn = yield database_1.default.connect();
                const result = yield conn.query(sql, [C.firstName, C.lastName, hash]);
                conn.release();
                return result.rows[0];
            }
            catch (err) {
                throw new Error("Error happen when add user in model" + err);
            }
        });
    }
    auth(id, password) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const conn = yield database_1.default.connect();
                const sql = "SELECT password FROM Username WHERE id=($1)";
                const result = yield conn.query(sql, [id]);
                if (result.rows.length) {
                    const user = result.rows[0];
                    if (bcrypt_1.default.compareSync(password + BCRYPT_PASSWORD, user.password)) {
                        return user;
                    }
                }
                return null;
            }
            catch (err) {
                throw new Error("Error in auth model" + err);
            }
        });
    }
    showAllUser() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const conn = yield database_1.default.connect();
                const sql = "SELECT * FROM Username";
                const result = yield conn.query(sql);
                return result.rows;
            }
            catch (err) {
                throw new Error("Error in show all user model" + err);
            }
        });
    }
    showSpecficUser(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const conn = yield database_1.default.connect();
                const sql = "SELECT * FROM Username WHERE id=($1)";
                const result = yield conn.query(sql, [id]);
                return result.rows[0];
            }
            catch (err) {
                throw new Error("Error in fun show specific user." + err);
            }
        });
    }
}
exports.Add_User_Class = Add_User_Class;
