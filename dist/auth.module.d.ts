import { AuthService } from "./auth.service.js";
import { JwtStrategy } from "./jwt.strategy.js";
import { AuthGuard } from "./guards/auth.guard.js";
export declare class AuthModule {
    static register(): {
        authService: AuthService;
        jwtStrategy: JwtStrategy;
        authGuard: AuthGuard;
    };
}
