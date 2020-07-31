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
export class Spending extends Model<Spending> {
    @ForeignKey(() => Users)
    @Column
    userId: number;

    @Column
    nickName: string;

    @Column
    lastName: string;

    @Column
    Age: number;

    @Column
    Tel: string;
    @BelongsTo(() => Users)
    users : Users;
}
