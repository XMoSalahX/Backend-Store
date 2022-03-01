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
exports.Add_Order_Class = void 0;
const database_1 = __importDefault(require("../database"));
class Add_Order_Class {
    To_Card(P) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const checktable = 'SELECT * FROM orders WHERE "user_ID"=($1) LIMIT 1';
                const conn = yield database_1.default.connect();
                const tablerow = yield conn.query(checktable, [P.user_ID]);
                let order_id;
                if (tablerow.rows.length === 0) {
                    order_id = 1;
                }
                else {
                    const sqlCheckId = 'SELECT id,status FROM orders WHERE "user_ID"=($1) ORDER BY id DESC LIMIT 1';
                    const LastOrder = yield conn.query(sqlCheckId, [P.user_ID]);
                    if (LastOrder.rows[0].status === "Active") {
                        order_id = LastOrder.rows[0].id;
                    }
                    else {
                        order_id = LastOrder.rows[0].id + 1;
                    }
                }
                const insert = 'INSERT INTO orders(id,"product_ID","user_ID",quantity,status) VALUES($1,$2,$3,$4,$5) RETURNING *';
                const insertProduct = yield conn.query(insert, [
                    order_id,
                    P.product_ID,
                    P.user_ID,
                    P.quantity,
                    P.status,
                ]);
                conn.release();
                return insertProduct.rows[0];
            }
            catch (err) {
                throw new Error("Error happen in to card fun in model." + err);
            }
        });
    }
    Make_Order(orderId, userID) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const CheckCompeletORNot = "SELECT * FROM orders WHERE id=($1) LIMIT 1";
                const conn = yield database_1.default.connect();
                const resultOfCheck = yield conn.query(CheckCompeletORNot, [orderId]);
                if (resultOfCheck.rows[0].status === "Complete") {
                    return null;
                }
                else {
                    const sql = "UPDATE orders SET status=('Complete') WHERE id=($1) AND \"user_ID\"=($2) RETURNING *";
                    const result = yield conn.query(sql, [orderId, userID]);
                    conn.release();
                    return result.rows[0].status;
                }
            }
            catch (err) {
                throw new Error("Error happen in make order fun in model." + err);
            }
        });
    }
}
exports.Add_Order_Class = Add_Order_Class;
