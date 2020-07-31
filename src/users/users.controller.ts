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
import { FileInterceptor } from "@nestjs/platform-express";
import { MulterModule } from "@nestjs/platform-express";
import { CreateUserDto } from "./dto/CreateUserDto.dto";
import { Users } from "./users.model";
import { UsersService } from "./users.service";
import { diskStorage } from "multer";
const path = require("path");

@Controller("users")
export class UsersController {
    constructor(private readonly usersService: UsersService) {}
    @Post()
    @UseInterceptors(
        FileInterceptor("pictureProfile", {
            storage: diskStorage({
                destination: `./uploads`,
                filename: (req: any, file: any, cb: any) => {
                    let ext = path.extname(file.originalname);
                    file.originalname = `${Date.now()}-${req.body.firstName}${ext}`;
                    cb(null, file.originalname);
                },
            }),
            fileFilter: (req, file, cb) => {
                let ext = path.extname(file.originalname);
                if (ext !== ".png" && ext !== ".jpg") {
                    return cb(
                        new HttpException(
                            "Only images are allowed!",
                            HttpStatus.BAD_REQUEST
                        ),
                        null
                    );
                }
                cb(null, true);
            },

            limits: { fileSize: 1024 * 1024 },
        })
    )
    create(@Req() req: any, @UploadedFile() file: any, @Res() res: any) {
        return this.usersService.create(req, file, res);
    }

    @Get()
    findAll(@Res() res: any): Promise<Users[]> {
        return this.usersService.findAll(res);
    }

    @Get(":id")
    findOne(@Param("id") id: string,@Res() res:any): Promise<Users> {
        return this.usersService.findOne(id,res);
    }

    @Delete(":id")
    remove(@Param("id") id: string, @Res() res: any): Promise<void> {
        return this.usersService.remove(id, res);
    }

    @Put(":id")
    @UseInterceptors(
        FileInterceptor("pictureProfile", {
            storage: diskStorage({
                destination: `./uploads`,
                filename: (req: any, file: any, cb: any) => {
                    file.originalname = `${Date.now()}-${file.originalname}`;
                    cb(null, file.originalname);
                },
            }),
        })
    )
    update(
        @Param("id") id: string,
        @Req() req: any,
        @UploadedFile() file: any,
        @Res() res: any
    ) {
        return this.usersService.update(id, req, file, res);
    }

    @Get("search/:word")
    search(@Param("word") word: string,@Res() res:any): Promise<Users[]> {
        return this.usersService.search(word,res);
    }

    @Get("amount/all")
    count(@Res() res:any):Promise<Users[]>{
        return this.usersService.count(res);
    }
}
