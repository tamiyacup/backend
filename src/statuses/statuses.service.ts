import { Injectable, HttpStatus } from "@nestjs/common";
import { InjectModel } from "@nestjs/sequelize";
import { Sequelize } from "sequelize-typescript";
import { CreateStatusDto } from "./dto/CreateStatusDto.dto";
import { Statuses } from "./statuses.model";
import mergeData from "../../utils/mergeData";
export type Status = number;
@Injectable()
export class StatusesService {
    private status: Status;
    constructor(
        @InjectModel(Statuses)
        private readonly statusModel: typeof Statuses,
        private readonly sequelize: Sequelize
    ) {
        this.status = HttpStatus.BAD_REQUEST;
    }

    create(createStatusDto: CreateStatusDto): Promise<Statuses> {
        const status = new Statuses();
        status.name = createStatusDto.name;

        return status.save();
    }

    async findAll(res: any): Promise<Statuses[]> {
        const statuses = await this.statusModel.findAll({
            attributes: [`id`, `name`],
        });
        if (statuses) this.status = HttpStatus.OK;
        return res.status(this.status).json(mergeData(this.status, statuses));
    }

    findOne(id: string): Promise<Statuses> {
        return this.statusModel.findOne({
            where: {
                id,
            },
        });
    }

    async remove(id: string): Promise<void> {
        const user = await this.findOne(id);
        await user.destroy();
    }
}
