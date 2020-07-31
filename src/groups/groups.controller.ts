import { Body, Controller, Delete, Get, Param, Post,Res } from "@nestjs/common";
import { CreateGroupDto } from "./dto/CreateGroupDto.dto";

import { Groups } from "./groups.model";
import { GroupsService } from "./groups.service";

@Controller("groups")
export class GroupsController {
    constructor(private readonly  gruoupsService: GroupsService) {}

    @Post()
    create(@Body() createUserDto: CreateGroupDto): Promise<Groups> {
        return this.gruoupsService.create(createUserDto);
    }

    @Get()
    findAll(@Res() res:any): Promise<Groups[]> {
        return this.gruoupsService.findAll(res);
    }

    @Get(":id")
    findOne(@Param("id") id: string): Promise<Groups> {
        return this.gruoupsService.findOne(id);
    }

    @Delete(":id")
    remove(@Param("id") id: string): Promise<void> {
        return this.gruoupsService.remove(id);
    }
}
