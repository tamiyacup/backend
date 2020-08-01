import { Injectable, HttpStatus } from "@nestjs/common";
import { InjectModel } from "@nestjs/sequelize";

import mergeData from "../../utils/mergeData";
import { Spending } from "./spending.model";

import { Sequelize } from "sequelize-typescript";
export type Status = number;
@Injectable()
export class SpendingService {
    private status: Status;
    constructor(
        @InjectModel(Spending)
        private readonly spendingModel: typeof Spending,
        private readonly sequelize: Sequelize
    ) {
        this.status = HttpStatus.BAD_REQUEST;
    }
    async create(req: any, res: any) {
        console.log(`Rquest=`, req.body);
        if (req.body) {
            this.status = HttpStatus.OK;
        }
        const spendinData = {
            userId: req.body.userId,
        };

        Spending.create(spendinData);
        return res.status(this.status).json(this.status);
    }
    async count(res:any) {
        const countSpending = await this.spendingModel.count();
        if (countSpending) this.status = HttpStatus.OK;
        return res.status(this.status).json(mergeData(this.status, countSpending));
    }
}
