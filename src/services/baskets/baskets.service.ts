import { Injectable } from '@nestjs/common';
import {InjectModel} from "@nestjs/mongoose";
import {Model} from "mongoose";
import {Basket, BasketDocument} from "../../schemas/basket";
import {IBook} from "../../interfaces/book";
import {BasketDto} from "../../dtos/basket-dto";

@Injectable()
export class BasketsService {
    constructor(@InjectModel(Basket.name) private basketModel: Model<BasketDocument>) {}
    
    
    async createBasket(userId:string) {
        const data = new BasketDto([], userId);
        const basketData = new this.basketModel(data);
        return basketData.save();
    }
    
    
    async getBasket(userId: string) {
        return this.basketModel.findOne({userId: userId})
    }
    
    async addToBasket (userId: string, book: IBook) {
        
        return this.basketModel.findOneAndUpdate(
            {userId: userId},
            {$push: {books: book}});
    }
    
    async removeFromBasket(userId: string, bookId: string) {
        
        const a = await this.basketModel.findOne({userId: userId});
        
        const b = await this.basketModel.findOneAndUpdate(
            {userId: userId},
            {$pull: {books: {_id: bookId}}});
        
        console.log(b);
    }
}
