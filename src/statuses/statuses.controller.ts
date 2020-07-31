import { Body, Controller, Delete, Get, Param, Post,Res } from "@nestjs/common";
import { CreateStatusDto } from "./dto/CreateStatusDto.dto";

import { Statuses } from "./statuses.model";
import { StatusesService } from "./statuses.service";

@Controller("statuses")
export class StatusesController {
    constructor(private readonly  statusesService: StatusesService) {}

    @Post()
    create(@Body() createUserDto: CreateStatusDto): Promise<Statuses> {
        return this.statusesService.create(createUserDto);
    }

    @Get()
    findAll(@Res() res:any): Promise<Statuses[]> {
        return this.statusesService.findAll(res);
    }

    @Get(":id")
    findOne(@Param("id") id: string): Promise<Statuses> {
        return this.statusesService.findOne(id);
    }

    @Delete(":id")
    remove(@Param("id") id: string): Promise<void> {
        return this.statusesService.remove(id);
    }
}
