"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.JwtStrategy = void 0;
const auth_service_js_1 = require("./auth.service.js");
class JwtStrategy {
    constructor() {
        this.authService = new auth_service_js_1.AuthService();
    }
    validate(token) {
        return this.authService.verifyToken(token);
    }
}
exports.JwtStrategy = JwtStrategy;
//# sourceMappingURL=jwt.strategy.js.map