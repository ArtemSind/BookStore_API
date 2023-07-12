import { Module } from '@nestjs/common';
import {MongooseModule} from "@nestjs/mongoose";
import {Book, BookSchema} from "../../schemas/book";
import {BooksController} from "./books.controller";
import {BooksService} from "../../services/books/books.service";

@Module({
    imports:[MongooseModule.forFeature([{name: Book.name, schema: BookSchema}])],
    controllers: [BooksController],
    providers: [BooksService]
})
export class BooksModule {}