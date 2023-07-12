import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';
import {IBook} from "../interfaces/book";

export type BookDocument = HydratedDocument<Book>;

@Schema()
export class Book implements IBook {

    @Prop({type: mongoose.Types.ObjectId}) _id;
    @Prop() author: string;
    @Prop() img: string;
    @Prop() price: string;
    @Prop() name: string;
    @Prop() description: string;
}

export const BookSchema = SchemaFactory.createForClass(Book);