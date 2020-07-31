import { Module } from "@nestjs/common";
import { SequelizeModule } from "@nestjs/sequelize";
import { Careers } from "./careers.model";
import { CareersController } from "./careers.controller";
import { CareersService } from "./careers.service";

@Module({
    imports: [SequelizeModule.forFeature([Careers])],
    providers: [CareersService],
    controllers: [CareersController],
})
export class CareersModule {}