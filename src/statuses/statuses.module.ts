import { Module } from "@nestjs/common";
import { SequelizeModule } from "@nestjs/sequelize";
import { Statuses } from "./statuses.model";
import { StatusesController } from "./statuses.controller";
import { StatusesService } from "./statuses.service";

@Module({
    imports: [SequelizeModule.forFeature([Statuses])],
    providers: [StatusesService],
    controllers: [StatusesController],
})
export class StatusesModule {}