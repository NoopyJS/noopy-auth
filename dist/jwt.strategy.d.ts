import { JwtPayload } from "jsonwebtoken";
export declare class JwtStrategy {
    private authService;
    validate(token: string): JwtPayload | string | null;
}
