import {
    Column,
    Model,
    Table,
    BelongsTo,
    ForeignKey,
    HasMany,
    HasOne,
} from "sequelize-typescript";
import { Users } from "../users/users.model";
@Table
export class Summarize extends Model<Summarize> {
    @ForeignKey(() => Users)
    @Column
    userId: number;

    @BelongsTo(() => Users)
    users : Users;

    @Column
    sumPrice: number;
}
