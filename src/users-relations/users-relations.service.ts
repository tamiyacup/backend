import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/sequelize";
import { Sequelize } from "sequelize-typescript";
import { CreateUserRelation } from "./dto/createUserRelationDto.dto";
import { UsersRelations } from "./users-relations.model";

@Injectable()
export class UsersRelationsService {
    constructor(
        @InjectModel(UsersRelations)
        private readonly userRelationModel: typeof UsersRelations,
        private readonly sequelize: Sequelize
    ) {}

    create(createUserDto: CreateUserRelation): Promise<UsersRelations> {
        const usersRelation = new UsersRelations();

        return usersRelation.save();
    }

    async findAll(): Promise<UsersRelations[]> {
        return this.userRelationModel.findAll();
    }

    findOne(id: string): Promise<UsersRelations> {
        return this.userRelationModel.findOne({
            where: {
                id,
            },
        });
    }

    async remove(id: string): Promise<void> {
        const usersRelation = await this.findOne(id);
        await usersRelation.destroy();
    }
}
