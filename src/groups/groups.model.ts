import {
    Column,
    Model,
    Table,
    BelongsTo,
    ForeignKey,
    HasMany
} from "sequelize-typescript";
import {UsersRelations} from '../users-relations/users-relations.model'
@Table
export class Groups extends Model<Groups> {
    @Column
    name: string;

    @Column
    description: string;

    @HasMany(() => UsersRelations)
    usersRelation: UsersRelations[];
}
