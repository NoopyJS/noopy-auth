import { AuthService } from "./auth.service.js";
import {JwtPayload} from "jsonwebtoken";

export class JwtStrategy {
    private authService = new AuthService();

    validate(token: string): JwtPayload | string | null {
        return this.authService.verifyToken(token);
    }
}
