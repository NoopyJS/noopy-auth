"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthGuard = void 0;
const auth_service_js_1 = require("../auth.service.js");
class AuthGuard {
    constructor() {
        this.authService = new auth_service_js_1.AuthService();
    }
    handleRequest(token) {
        const decoded = this.authService.verifyToken(token);
        return decoded !== null;
    }
}
exports.AuthGuard = AuthGuard;
//# sourceMappingURL=auth.guard.js.map