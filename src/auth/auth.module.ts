import { Module } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { HumansModule } from "../humans/humans.module";
import { PassportModule } from "@nestjs/passport";
import { LocalStrategy } from "./local.strategy";
import { JwtModule } from '@nestjs/jwt'
import { jwtConstants } from './constants';
import { JwtStrategy } from "./jwt.strategy";
@Module({
    imports: [
        HumansModule,
        PassportModule.register({defaultStrategy:'jwt'}),
        JwtModule.register({
            secret: jwtConstants.secret,
            signOptions: { expiresIn: '3600s' },
        }),
    ],
    providers: [AuthService, LocalStrategy, JwtStrategy],
    exports: [AuthService],
})
export class AuthModule {}
