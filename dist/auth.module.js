"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthModule = void 0;
const auth_service_js_1 = require("./auth.service.js");
const jwt_strategy_js_1 = require("./jwt.strategy.js");
const auth_guard_js_1 = require("./guards/auth.guard.js");
class AuthModule {
    static register() {
        return {
            authService: new auth_service_js_1.AuthService(),
            jwtStrategy: new jwt_strategy_js_1.JwtStrategy(),
            authGuard: new auth_guard_js_1.AuthGuard(),
        };
    }
}
exports.AuthModule = AuthModule;
//# sourceMappingURL=auth.module.js.map