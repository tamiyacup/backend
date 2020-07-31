import { Injectable, HttpStatus } from "@nestjs/common";
import { InjectModel } from "@nestjs/sequelize";
import { Sequelize } from "sequelize-typescript";
import { Op } from "sequelize";
import { CreateUserDto } from "./dto/CreateUserDto.dto";
import { Users } from "./users.model";
import mergeData from "../../utils/mergeData";

const fs = require("fs");
export type Status = number;
@Injectable()
export class UsersService {
    private status: Status;
    constructor(
        @InjectModel(Users)
        private readonly userModel: typeof Users,
        private readonly sequelize: Sequelize
    ) {
        this.status = HttpStatus.BAD_REQUEST;
    }

    async create(req: any, file: any, res: any) {
        console.log(`Rquest=`, req.body);
        if (req.body) {
            this.status = HttpStatus.OK;
        }
        const userData = {
            firstName: req.body.firstName,
            nickName: req.body.nickName,
            lastName: req.body.lastName,
            Age: req.body.Age,
            Tel: req.body.Tel,
        };

        Users.create(userData).then((user) => {
            
        });

        return res.status(this.status).json(this.status);
    }

    async findAll(res: any): Promise<Users[]> {
        const users = await this.userModel.findAll();
        if (users) this.status = HttpStatus.OK;
        return res.status(this.status).json(mergeData(this.status, users));
    }

    async findOne(id: string, res: any): Promise<Users> {
        console.log(`id`, id);
        const user = await this.userModel.findOne({
            where: {
                id,
            },
        });
        console.log(`user`, user);

        if (user) this.status = HttpStatus.OK;
        return res.status(this.status).json(mergeData(this.status, user));
    }

    async remove(id: string, res: any): Promise<void> {
        const user = await Users.destroy({
            where: {
                id,
            },
        });
        if (user) this.status = HttpStatus.OK;
        return res.status(this.status).json(this.status);
    }

    async update(id: any, req: any, file: any, res: any) {
        console.log(`Rquest=`, req.body);
        if (req.body) {
            this.status = HttpStatus.OK;
        }
        this.userModel.update(
            {
                firstName: req.body.firstName,
                nickName: req.body.lastName,
                lastName: req.body.lastName,
                Age: req.body.Age,
                Tel: req.body.Tel,
            },
            { where: { id: id } }
        );
        return res.status(this.status).json(this.status);
    }

    async search(word: string, res: any): Promise<Users[]> {
        console.log(`word=${word}`);
        const result = await Users.findAll();

        this.status = HttpStatus.OK;
        return res.status(this.status).json(mergeData(this.status, result));
    }

    async count(res: any): Promise<Users[]> {
        const countUser = await this.userModel.count();
        if (countUser) this.status = HttpStatus.OK;
        return res.status(this.status).json(mergeData(this.status, countUser));
    }
}
