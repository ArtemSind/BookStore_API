import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';
import {IBook} from "../interfaces/book";
import {IBasket} from "../interfaces/basket";

export type BasketDocument = HydratedDocument<Basket>;

@Schema()
export class Basket implements IBasket {

    @Prop({type: mongoose.Types.ObjectId}) id: string;
    @Prop() books: IBook[];
    @Prop() userId: string;
}

export const BasketSchema = SchemaFactory.createForClass(Basket);