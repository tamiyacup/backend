import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { SequelizeModule } from "@nestjs/sequelize";
import { UsersModule } from "./users/users.module";
import { ServeStaticModule } from "@nestjs/serve-static";
import { join } from "path";
import { AuthModule } from "./auth/auth.module";
import { SpendingController } from './spending/spending.controller';
import { SpendingModule } from './spending/spending.module';
import { SummarizeModule } from './summarize/summarize.module';

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
        AuthModule,
        SpendingModule,
        SummarizeModule,
    ],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {}
