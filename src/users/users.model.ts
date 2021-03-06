import {
    Column,
    Model,
    Table,
    BelongsTo,
    ForeignKey,
    HasMany,
    HasOne,
} from "sequelize-typescript";
import {Spending} from '../spending/spending.model'
@Table
export class Users extends Model<Users> {
    @Column
    firstName: string;

    @Column
    nickName: string;

    @Column
    lastName: string;

    @Column
    Age: number;

    @Column
    Tel: string;

    @HasMany(() => Spending)
    spending: Spending[];
}
