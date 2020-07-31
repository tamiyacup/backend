
import { Module } from "@nestjs/common";
import { SequelizeModule } from "@nestjs/sequelize";
import { Groups } from "./groups.model";
import { GroupsController } from "./groups.controller";
import { GroupsService } from "./groups.service";

@Module({
    imports: [SequelizeModule.forFeature([Groups])],
    providers: [GroupsService],
    controllers: [GroupsController],
})
export class GroupsModule {}