import jwt, { JwtPayload } from "jsonwebtoken";
import bcrypt from "bcryptjs";
import dotenv from "dotenv";

dotenv.config();

export class AuthService {
    private static SECRET_KEY: string = process.env.JWT_SECRET || "default_secret";
    private static EXPIRES_IN: string = "1h";

    async hashPassword(password: string): Promise<string> {
        return bcrypt.hash(password, 10);
    }

    async comparePasswords(password: string, hashedPassword: string): Promise<boolean> {
        return bcrypt.compare(password, hashedPassword);
    }

    generateToken(payload: object): string {
        let token: string;
        // @ts-ignore
        token = jwt.sign(payload, AuthService.SECRET_KEY, {expiresIn: AuthService.EXPIRES_IN});
        return token;
    }

    verifyToken(token: string): JwtPayload | string | null {
        try {
            return jwt.verify(token, AuthService.SECRET_KEY) as JwtPayload | string;
        } catch (error) {
            return null;
        }
    }
}
