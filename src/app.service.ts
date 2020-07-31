import { Injectable } from "@nestjs/common";
import { Sequelize } from "sequelize-typescript";
@Injectable()
export class AppService {
    constructor(private sequelize: Sequelize) {}
    getHello(): string {
        console.log(process.env.PATH_UPLOAD);
        console.log(process.env.HOST);
        console.log(process.env.DATEBASE);
        return "Hello World!";
    }

    async login(req: any) {
        console.log(`req`, req);
        return req.user;
    }
}
