import { AuthService } from "./auth.service.js";
import { JwtStrategy } from "./jwt.strategy.js";
import { AuthGuard } from "./guards/auth.guard.js";

export class AuthModule {
    static register() {
        return {
            authService: new AuthService(),
            jwtStrategy: new JwtStrategy(),
            authGuard: new AuthGuard(),
        };
    }
}
