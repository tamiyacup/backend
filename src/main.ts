import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import * as helmet from "helmet";
import * as express from 'express'
import { join } from "path";
async function bootstrap() {
    const app = await NestFactory.create(AppModule);
    app.use(helmet());
    app.enableCors();
    app.use("/public", express.static(join(__dirname, "..", "/uploads")));
    await app.listen(3001);
}
bootstrap();
