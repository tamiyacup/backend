import { Injectable, HttpStatus } from "@nestjs/common";
import { InjectModel } from "@nestjs/sequelize";
import { Sequelize } from "sequelize-typescript";
import { Op } from "sequelize";
import { CreateUserDto } from "./dto/CreateUserDto.dto";
import { Users } from "./users.model";
import { UsersRelations } from "../users-relations/users-relations.model";
import { Careers } from "../careers/careers.model";
import { Groups } from "../groups/groups.model";
import { Statuses } from "../statuses/statuses.model";
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
        console.log(`reqreqreqreqreqreq`, req.body);
        console.log(`fielfile`, file);

        let pathFile = ``;
        if (req.body) {
            this.status = HttpStatus.OK;
        }
        if (req.file) {
            pathFile = `${process.env.BASE_URL}/public/${file.originalname}`;
        } else pathFile = `https://via.placeholder.com/256x256`;
        const userData = {
            firstName: req.body.firstName,
            nickName: req.body.nickName,
            lastName: req.body.lastName,
            dateBelieve: req.body.dateBelieve,
            Age: req.body.Age,
            Tel: req.body.Tel,
            facebook: req.body.facebook,
            ability: req.body.ability,
            pictureProfile: pathFile,
            Address: req.body.Address,
        };
        const UsersRelationsData = {
            userId: null,
            careerId: null,
            groupId: req.body.Group,
            statusId: req.body.Status,
        };

        const CareerData = {
            userId: null,
            position: req.body.Position,
            salary: req.body.Salary,
            address: req.body.Where,
        };

        Users.create(userData).then((user) => {
            UsersRelationsData.userId = user.id;
            CareerData.userId = user.id;
            Careers.create(CareerData).then((career) => {
                UsersRelationsData.careerId = career.id;
                UsersRelations.create(UsersRelationsData);
            });
        });
        return res.status(this.status).json(this.status);
    }

    async findAll(res: any): Promise<Users[]> {
        const users = await this.userModel.findAll({
            include: [
                {
                    model: UsersRelations,
                    include: [
                        {
                            model: Careers,
                        },
                        {
                            model: Groups,
                        },
                        {
                            model: Statuses,
                        },
                    ],
                },
            ],
        });
        if (users) this.status = HttpStatus.OK;
        return res.status(this.status).json(mergeData(this.status, users));
    }

    async findOne(id: string, res: any): Promise<Users> {
        console.log(`id`, id);
        const user = await this.userModel.findOne({
            include: [
                {
                    model: UsersRelations,
                    include: [
                        {
                            model: Careers,
                        },
                        {
                            model: Groups,
                        },
                        {
                            model: Statuses,
                        },
                    ],
                },
            ],
            where: {
                id,
            },
        });
        console.log(`user`, user);

        if (user) this.status = HttpStatus.OK;
        return res.status(this.status).json(mergeData(this.status, user));
    }

    async remove(id: string, res: any): Promise<void> {
        const userRelation = await UsersRelations.destroy({
            where: {
                id,
            },
        });
        const career = await Careers.destroy({
            where: {
                id,
            },
        });

        this.deleteImages(id);
        const user = await Users.destroy({
            where: {
                id,
            },
        });
        if (user && userRelation && career) this.status = HttpStatus.OK;

        return res.status(this.status).json(this.status);
    }

    async deleteImages(id: string) {
        await this.userModel
            .findOne({
                attributes: ["pictureProfile"],
                where: {
                    id,
                },
            })
            .then((data) => {
                console.log(`pictureProfile`, data.pictureProfile);
                const stringArr = data.pictureProfile.split(`/`);
                const nameFile = stringArr[4];
                const Path = `${process.env.PATH_UPLOAD}/${nameFile}`;
                fs.unlinkSync(Path);
            });
    }

    async update(id: any, req: any, file: any, res: any) {
        console.log(`reqreqreqreqreqreq`, req.body);
        console.log(`fielfile`, file);

        if (req.body) {
            this.status = HttpStatus.OK;
        }
        let pathFile = ``;
        if (file) {
            // if update imagese
            pathFile = `${process.env.BASE_URL}/public/${file.originalname}`;
            this.deleteImages(id);
        } else if (req.body.pictureProfile) {
            // if not update images
            pathFile = req.body.pictureProfile;
        } else pathFile = `https://via.placeholder.com/256x256`;

        this.userModel.update(
            {
                firstName: req.body.firstName,
                nickName: req.body.lastName,
                lastName: req.body.lastName,
                dateBelieve: req.body.dateBelieve,
                Age: req.body.Age,
                Tel: req.body.Tel,
                facebook: req.body.facebook,
                ability: req.body.ability,
                Address: req.body.Address,
                pictureProfile: pathFile,
            },
            { where: { id: id } }
        );

        Careers.update(
            {
                position: req.body.Position,
                salary: req.body.Salary,
                address: req.body.Where,
            },
            { where: { userId: id } }
        );

        UsersRelations.update(
            {
                //careerId: req.body.Position,
                groupId: req.body.Group,
                statusId: req.body.Status,
            },
            { where: { userId: id } }
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
