import { Module } from "@nestjs/common";
import { SequelizeModule } from "@nestjs/sequelize";
import { Spending } from "./spending.model";
import { SpendingController } from "./spending.controller";
import { SpendingService } from "./spending.service";

@Module({
    imports: [SequelizeModule.forFeature([Spending])],
    providers: [SpendingService],
    controllers: [SpendingController],
})
export class SpendingModule {}