import { AuthService } from "../auth.service";

describe("AuthService", () => {
    let authService: AuthService;

    beforeAll(() => {
        authService = new AuthService();
    });

    it("should hash and verify password correctly", async () => {
        const password = "password123";
        const hashedPassword = await authService.hashPassword(password);
        expect(await authService.comparePasswords(password, hashedPassword)).toBe(true);
    });

    it("should generate and verify a valid JWT", () => {
        const token = authService.generateToken({ userId: 1 });
        expect(authService.verifyToken(token)).not.toBeNull();
    });

    it("should return null for invalid token", () => {
        expect(authService.verifyToken("invalid_token")).toBeNull();
    });
});
