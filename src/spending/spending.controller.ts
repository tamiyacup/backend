import {
    Body,
    Controller,
    Delete,
    Put,
    Get,
    Param,
    Post,
    Req,
    Res,
    Patch,
    UploadedFile,
    UseInterceptors,
    HttpStatus,
    HttpException,
} from "@nestjs/common";
import { SpendingService } from "./spending.service";

@Controller("spending")
export class SpendingController {
    constructor(private readonly spendingService: SpendingService) {}
    @Post()
    create(@Req() req: any, @Res() res: any) {
        return this.spendingService.create(req, res);
    }
    @Get()
    count(@Res() res: any) {
        return this.spendingService.count(res);
    }
}
