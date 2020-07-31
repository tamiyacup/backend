import { Injectable, HttpStatus } from "@nestjs/common";
import { InjectModel } from "@nestjs/sequelize";
import { Sequelize } from "sequelize-typescript";
import { CreateGroupDto } from "./dto/CreateGroupDto.dto";
import { Groups } from "./groups.model";
import mergeData from "../../utils/mergeData";
export type Status = number;
@Injectable()
export class GroupsService {
    private status: Status;
    constructor(
        @InjectModel(Groups)
        private readonly groupsModel: typeof Groups,
        private readonly sequelize: Sequelize
    ) {
        this.status = HttpStatus.BAD_REQUEST;
    }

    create(createGroupDto: CreateGroupDto): Promise<Groups> {
        const group = new Groups();
        group.name = createGroupDto.name;
        group.description = createGroupDto.description;

        return group.save();
    }

    async findAll(res: any): Promise<Groups[]> {
        const groups = await this.groupsModel.findAll({
            attributes: [`id`, `name`],
        });
        if(groups) this.status = HttpStatus.OK
        return res.status(this.status).json(mergeData(this.status, groups));
    }

    findOne(id: string): Promise<Groups> {
        return this.groupsModel.findOne({
            where: {
                id,
            },
        });
    }

    async remove(id: string): Promise<void> {
        const career = await this.findOne(id);
        await career.destroy();
    }
}
