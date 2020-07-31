import { Body, Controller, Delete, Get, Param, Post } from "@nestjs/common";
import { CreateUserRelation } from "./dto/createUserRelationDto.dto";
import { UsersRelations } from "./users-relations.model";
import { UsersRelationsService } from "./users-relations.service";
@Controller('users-relation')
export class UsersRelationsController {
    constructor(private readonly usersRelationService: UsersRelationsService) {}

    @Post()
    create(@Body() createUserRelationDto: CreateUserRelation): Promise<UsersRelations> {
        return this.usersRelationService.create(createUserRelationDto);
    }

    @Get()
    findAll(): Promise<UsersRelations[]> {
        return this.usersRelationService.findAll();
    }

    @Get(":id")
    findOne(@Param("id") id: string): Promise<UsersRelations> {
        return this.usersRelationService.findOne(id);
    }

    @Delete(":id")
    remove(@Param("id") id: string): Promise<void> {
        return this.usersRelationService.remove(id);
    }
}
