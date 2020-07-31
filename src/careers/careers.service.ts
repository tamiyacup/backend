import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/sequelize";
import { Sequelize } from "sequelize-typescript";
import { CreateCareerDto } from "./dto/CreateCareerDto.dto";
import { Careers } from "./careers.model";

@Injectable()
export class CareersService {
    constructor(
        @InjectModel(Careers)
        private readonly careerModel: typeof Careers,
        private readonly sequelize: Sequelize
    ) {}

    create(createCareerDto: CreateCareerDto): Promise<Careers> {
        const career = new Careers();
        career.userId = createCareerDto.userId;
        career.position = createCareerDto.position;
        career.address = createCareerDto.address;
        return career.save();
    }

    async findAll(): Promise<Careers[]> {
        return this.careerModel.findAll();
    }

    findOne(id: string): Promise<Careers> {
        return this.careerModel.findOne({
           // attributes: [["address", "where"]],
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
