import { Module } from '@nestjs/common';
import {MongooseModule} from "@nestjs/mongoose";
import {Basket, BasketSchema} from "../../schemas/basket";
import {BasketController} from "./basket.controller";
import {BasketsService} from "../../services/baskets/baskets.service";

@Module({
    imports:[MongooseModule.forFeature([{name: Basket.name, schema: BasketSchema}])],
    controllers: [BasketController],
    providers: [BasketsService]
})
export class BasketModule {}
