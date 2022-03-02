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
Object.defineProperty(exports, "__esModule", { value: true });
const user_name_model_1 = require("../models/user_name_model");
const user = new user_name_model_1.Add_User_Class();
describe("Check user database action: ", () => {
    it('Database action to the endpoint "/newuser" has been successful.', () => __awaiter(void 0, void 0, void 0, function* () {
        const result = yield user.createUser({
            firstName: "mos3ad",
            lastName: "Salah",
            password: "Mohammed123#",
        });
        expect(result).toEqual({
            id: 6,
        });
    }));
    it('Database action to the endpoint "/authuser" has been successful.', () => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield user.auth(1, "Mohammed123#");
        expect(response).toBeTruthy();
    }));
    it('Database action to the endpoint "/showalluser" has been successful.', () => __awaiter(void 0, void 0, void 0, function* () {
        yield user.showAllUser().then((res) => {
            expect(res[0].id).toBe(1);
        });
    }));
    it('Database action to the endpoint "/showspecuser/1" has been successful.', () => __awaiter(void 0, void 0, void 0, function* () {
        yield user.showSpecficUser(1).then((res) => {
            expect(res.id).toEqual(1);
        });
    }));
});
