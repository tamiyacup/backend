import { Controller,Req,Post, } from "@nestjs/common";
import { HumansService } from "../humans/humans.service";
@Controller("humans")
export class HumansController {
    constructor(private readonly humansService: HumansService) {}
    @Post()
     create(@Req() req:any){
        return this.humansService.create(req);
    }
}
