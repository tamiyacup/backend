import {
    Controller,
    Get,
    Request,
    Response,
    Post,
    UseGuards,
    HttpStatus,
} from "@nestjs/common";
import { AppService } from "./app.service";
import { AuthGuard } from "@nestjs/passport";
import { AuthService } from "./auth/auth.service";
import { LocalAuthGuard } from "./auth/guard/local-auth.guard";
import { JwtAuthGuard } from "./auth/guard/jwt-auth.guard";
import mergeData from "../utils/mergeData";
@Controller()
export class AppController {
    constructor(
        private readonly appService: AppService,
        private authService: AuthService
    ) {}

    @Get("/")
    getHello(): string {
        return this.appService.getHello();
    }

    @UseGuards(LocalAuthGuard)
    @Post("auth/getToken")
    async login(@Request() req: any, @Response() res: any) {
        console.log(`req`, req.body);
        console.log(`user=`, req.user);
        return this.authService.createToken(req.body, res);
    }

    @UseGuards(JwtAuthGuard)
    @Get("auth/getData")
    getData(@Request() req: any, @Response() res: any) {
        console.log(`reqAuth=`, req.user);
        let status = HttpStatus.OK; //  have JwtAuthGuard can confident 
        res.status(status).json(mergeData(status, req.user));
    }
}
