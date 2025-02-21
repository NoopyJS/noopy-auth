import { JwtPayload } from "jsonwebtoken";
export declare class AuthService {
    private static SECRET_KEY;
    private static EXPIRES_IN;
    hashPassword(password: string): Promise<string>;
    comparePasswords(password: string, hashedPassword: string): Promise<boolean>;
    generateToken(payload: object): string;
    verifyToken(token: string): JwtPayload | string | null;
}
