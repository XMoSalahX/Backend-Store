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
exports.Add_Product_Class = void 0;
const database_1 = __importDefault(require("../database"));
class Add_Product_Class {
    CreateProduct(C) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const sql = "INSERT INTO Product(name,price,category) VALUES($1,$2,$3) RETURNING *";
                const conn = yield database_1.default.connect();
                const result = yield conn.query(sql, [C.name, C.price, C.category]);
                conn.release();
                return result.rows[0];
            }
            catch (err) {
                throw new Error("Error in add product fun in model." + err);
            }
        });
    }
    DisplayAllProduct() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const sql = "SELECT * FROM Product";
                const conn = yield database_1.default.connect();
                const result = yield conn.query(sql);
                conn.release();
                return result.rows;
            }
            catch (err) {
                throw new Error("Error in Display product in model" + err);
            }
        });
    }
    DisplaySpecificProduct(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const conn = yield database_1.default.connect();
                const sql = "SELECT * FROM Product WHERE id=($1)";
                const result = yield conn.query(sql, [id]);
                return result.rows[0];
            }
            catch (err) {
                throw new Error("Error in display specific product in model" + err);
            }
        });
    }
}
exports.Add_Product_Class = Add_Product_Class;
