import { Injectable } from '@nestjs/common';
import {InjectModel} from "@nestjs/mongoose";
import {User, UserDocument} from "../../schemas/user";
import mongoose, {Model} from "mongoose";
import {Book, BookDocument} from "../../schemas/book";
import {IBook} from "../../interfaces/book";

@Injectable()
export class BooksService {
    constructor(@InjectModel(Book.name) private bookModel: Model<BookDocument>) {
    }

    async getAllBooks() {
        return this.bookModel.find({});
    }
    
    async getBookById(_id: string) {
        const book = await this.bookModel.findOne({_id: new mongoose.Types.ObjectId(_id)});
        console.log(book);
        return book;
    }
    
}
