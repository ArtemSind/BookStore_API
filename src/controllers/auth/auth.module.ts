import { Module } from '@nestjs/common';
import {MongooseModule} from "@nestjs/mongoose";
import {User, UserSchema} from "../../schemas/user";
import {UsersService} from "../../services/users/users.service";
import {AuthController} from "./auth.controller";
import {jwtConstants} from "../../static/private/constant";
import {JwtModule} from "@nestjs/jwt";

@Module({
    imports:[MongooseModule.forFeature([{name: User.name, schema: UserSchema}]),
        JwtModule.register({
            secret: jwtConstants.secret})],
    controllers: [AuthController],
    providers: [UsersService]
})
export class AuthModule {}
