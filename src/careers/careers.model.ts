import {
    Column,
    Model,
    Table,
    BelongsTo,
    ForeignKey,
} from "sequelize-typescript";
import { Users } from "../users/users.model";
@Table
export class Careers extends Model<Careers> {
    @ForeignKey(() => Users)
    @Column
    userId: number;

    @BelongsTo(() => Users)
    users: Users;

    @Column
    position: string;

    @Column
    salary: number;

    @Column
    address: string;
}
