import { AuthService } from "../auth.service.js";

export class AuthGuard {
    private authService = new AuthService();

    handleRequest(token: string): boolean {
        const decoded = this.authService.verifyToken(token);
        return decoded !== null;
    }
}
