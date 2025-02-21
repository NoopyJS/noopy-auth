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
const auth_service_1 = require("../auth.service.js");
describe("AuthService", () => {
    let authService;
    beforeAll(() => {
        authService = new auth_service_1.AuthService();
    });
    it("should hash and verify password correctly", () => __awaiter(void 0, void 0, void 0, function* () {
        const password = "password123";
        const hashedPassword = yield authService.hashPassword(password);
        expect(yield authService.comparePasswords(password, hashedPassword)).toBe(true);
    }));
    it("should generate and verify a valid JWT", () => {
        const token = authService.generateToken({ userId: 1 });
        expect(authService.verifyToken(token)).not.toBeNull();
    });
    it("should return null for invalid token", () => {
        expect(authService.verifyToken("invalid_token")).toBeNull();
    });
});
