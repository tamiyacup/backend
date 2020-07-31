import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { SequelizeModule } from "@nestjs/sequelize";

import { UsersModule } from "./users/users.module";
import { CareersModule } from "./careers/careers.module";
import { GroupsModule } from "./groups/groups.module";
import { StatusesModule } from "./statuses/statuses.module";
import { UsersRelationsModule } from "./users-relations/users-relations.module";
import { ServeStaticModule } from "@nestjs/serve-static";
import { join } from "path";
import { HumansModule } from "./humans/humans.module";
import { AuthModule } from "./auth/auth.module";

@Module({
    imports: [
        ConfigModule.forRoot({
            isGlobal: true,
        }),
        SequelizeModule.forRoot({
            dialect: "mysql",
            host: process.env.HOST,
            port: parseInt(process.env.PORT),
            username: process.env.DATABASE_USER,
            password: process.env.DATABASE_PASSWORD,
            database: process.env.DATABASE,
            autoLoadModels: true,
            synchronize: true,
        }),
        ServeStaticModule.forRoot({
            rootPath: join(__dirname, "..", "public"),
        }),
        UsersModule,
        CareersModule,
        GroupsModule,
        StatusesModule,
        UsersRelationsModule,
        HumansModule,
        AuthModule,
    ],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {}
