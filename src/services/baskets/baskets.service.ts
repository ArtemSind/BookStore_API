import { Injectable } from '@nestjs/common';
import {InjectModel} from "@nestjs/mongoose";
import {Model} from "mongoose";
import {Basket, BasketDocument} from "../../schemas/basket";
import {IBook} from "../../interfaces/book";
import {IBasket} from "../../interfaces/basket";
import {use} from "passport";

@Injectable()
export class BasketsService {
    constructor(@InjectModel(Basket.name) private basketModel: Model<BasketDocument>) {
    }
    
    
    async getBasket(userId: string) {
        return this.basketModel.findOne({userId: userId})
    }
    
    async addToBasket(userId: string, book: IBook) {
        this.basketModel.findOneAndUpdate(
            {userId: userId},
            {$push: {books: book}},
            function (error, success) {
                if (error) {
                    console.log(error);
                } else {
                    console.log(success);
                }});
    }
    
    //async removeFromBasket(userId: string)
    
    



}
