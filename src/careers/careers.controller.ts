import { Body, Controller, Delete, Get, Param, Post } from "@nestjs/common";
import { CreateCareerDto } from "./dto/CreateCareerDto.dto";

import { Careers } from "./careers.model";
import { CareersService } from "./careers.service";
import mergeData from '../../utils/mergeData'

@Controller("careers")
export class CareersController {
    constructor(private readonly careersService: CareersService) {}

    @Post()
    create(@Body() createUserDto: CreateCareerDto): Promise<Careers> {
        return this.careersService.create(createUserDto);
    }

    @Get()
    findAll(): Promise<Careers[]> {
        return this.careersService.findAll();
    }

    @Get(":id")
    findOne(@Param("id") id: string): Promise<Careers> {
        return this.careersService.findOne(id);
    }

    @Delete(":id")
    remove(@Param("id") id: string): Promise<void> {
        return this.careersService.remove(id);
    }
}
