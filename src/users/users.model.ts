import {
    Column,
    Model,
    Table,
    BelongsTo,
    ForeignKey,
    HasMany,
    HasOne,
} from "sequelize-typescript";
import { UsersRelations } from "../users-relations/users-relations.model";
@Table
export class Users extends Model<Users> {
    @Column
    firstName: string;

    @Column
    nickName: string;

    @Column
    lastName: string;

    @Column
    dateBelieve: Date;

    @Column
    Age: number;

    @Column
    Tel: string;

    @Column
    facebook: string;

    @Column
    ability: string;

    @Column
    pictureProfile: string;

    @Column
    Address: string;

    @HasOne(() => UsersRelations)
    usersRelation: UsersRelations;
}
