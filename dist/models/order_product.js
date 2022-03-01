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
exports.Order_Product_Class = void 0;
const database_1 = __importDefault(require("../database"));
class Order_Product_Class {
    putOnOrderProduct(userID, ProductId) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const sqlAdd = "INSERT INTO order_product(userID,ProductID) VALUES($1,$2) ";
                const conn = yield database_1.default.connect();
                const addToTable = yield conn.query(sqlAdd, [userID, ProductId]);
                conn.release();
                return addToTable.rows;
            }
            catch (err) {
                throw new Error("Error found in put on order product in model." + err);
            }
        });
    }
    showAllProductOrder() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const sqlShowAll = "SELECT * FROM order_product";
                const conn = yield database_1.default.connect();
                const result = yield conn.query(sqlShowAll);
                conn.release();
                return result.rows;
            }
            catch (err) {
                throw new Error("Error in show product order in model." + err);
            }
        });
    }
}
exports.Order_Product_Class = Order_Product_Class;
