import { Injectable, HttpStatus } from "@nestjs/common";
import { HumansService } from "../humans/humans.service";
import { JwtService } from "@nestjs/jwt";
import mergeData from "../../utils/mergeData";
@Injectable()
export class AuthService {
    constructor(
        private humansService: HumansService,
        private jwtService: JwtService
    ) {}

    async validateUser(username: string, pass: string): Promise<any> {
        console.log(`usernaNAME=${username},pass=${pass}`);
        const user = await this.humansService.findOne(username);
        if (user && user.password === pass) {
            const { password, ...result } = user;
            return result;
        }
        return null;
    }

    async createToken(user: any, res: any) {
        const payload = { username: user.username, sub: user.userId };
        let status = HttpStatus.OK;
        res.status(status).json(
            mergeData(status, this.jwtService.sign(payload))
        );
    }
}
