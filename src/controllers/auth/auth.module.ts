import { Module } from '@nestjs/common';
import {MongooseModule} from "@nestjs/mongoose";
import {User, UserSchema} from "../../schemas/user";
import {UsersService} from "../../services/users/users.service";
import {AuthController} from "./auth.controller";
import {jwtConstants} from "../../static/private/constant";
import {JwtModule} from "@nestjs/jwt";
import {BasketsService} from "../../services/baskets/baskets.service";
import {Basket, BasketSchema} from "../../schemas/basket";

@Module({
    imports:[MongooseModule.forFeature([{name: User.name, schema: UserSchema}]),
        MongooseModule.forFeature([{name: Basket.name, schema: BasketSchema}]),
        JwtModule.register({
            secret: jwtConstants.secret})],
    controllers: [AuthController],
    providers: [UsersService, BasketsService]
})
export class AuthModule {}
