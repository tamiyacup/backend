import { Module } from "@nestjs/common";
import { SequelizeModule } from "@nestjs/sequelize";
import { UsersRelations } from "./users-relations.model";
import { UsersRelationsController } from "./users-relations.controller";
import { UsersRelationsService } from "./users-relations.service";

@Module({
    imports: [SequelizeModule.forFeature([UsersRelations])],
    providers: [UsersRelationsService],
    controllers: [UsersRelationsController],
})
export class UsersRelationsModule {}