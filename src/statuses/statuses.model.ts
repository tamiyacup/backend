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
export class Statuses extends Model<Statuses> {
    @Column
    name: string;

    @HasMany(() => UsersRelations)
    usersRelation: UsersRelations[];
}
