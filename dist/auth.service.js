"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
class AuthService {
    async hashPassword(password) {
        return bcryptjs_1.default.hash(password, 10);
    }
    async comparePasswords(password, hashedPassword) {
        return bcryptjs_1.default.compare(password, hashedPassword);
    }
    generateToken(payload) {
        let token;
        // @ts-ignore
        token = jsonwebtoken_1.default.sign(payload, AuthService.SECRET_KEY, { expiresIn: AuthService.EXPIRES_IN });
        return token;
    }
    verifyToken(token) {
        try {
            return jsonwebtoken_1.default.verify(token, AuthService.SECRET_KEY);
        }
        catch (error) {
            return null;
        }
    }
}
exports.AuthService = AuthService;
AuthService.SECRET_KEY = process.env.JWT_SECRET || "default_secret";
AuthService.EXPIRES_IN = "1h";
//# sourceMappingURL=auth.service.js.map