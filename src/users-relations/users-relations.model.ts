import {
    Column,
    Model,
    Table,
    BelongsTo,
    ForeignKey,
} from "sequelize-typescript";
import { Users } from "../users/users.model";
import { Careers } from "../careers/careers.model";
import { Groups } from "../groups/groups.model";
import { Statuses } from "../statuses/statuses.model";
@Table
export class UsersRelations extends Model<UsersRelations> {
    @ForeignKey(() => Users)
    @Column
    userId: number;

    @BelongsTo(() => Users)
    users: Users;

    @ForeignKey(() => Careers)
    @Column
    careerId: number;

    @BelongsTo(() => Careers)
    careers: Careers;


    @ForeignKey(() => Groups)
    @Column
    groupId: number;
    
    @BelongsTo(() => Groups)
    groups: Groups;
    // @Column
    // mentor: number;

 
    @ForeignKey(() => Statuses)
    @Column
    statusId: number;

    @BelongsTo(() => Statuses)
    statuses: Statuses;
    // @Column
    // ChurchId: number;

    // @Column
    // BibleStat: number;
}
