import { Module } from "@nestjs/common";
import { SequelizeModule } from "@nestjs/sequelize";
import { Summarize } from "./summarize.model";
// import { SpendingController } from "./spending.controller";
// import { SpendingService } from "./spending.service";

@Module({
    imports: [SequelizeModule.forFeature([Summarize])],
    providers: [],
    controllers: [],
})
export class SummarizeModule {}