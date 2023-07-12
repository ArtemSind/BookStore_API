import {Body, Controller, Get, Param, Post, Query} from '@nestjs/common';
import {BooksService} from "../../services/books/books.service";
import {IUser} from "../../interfaces/user";
import {IBook} from "../../interfaces/book";

@Controller('books')
export class BooksController {
    
    constructor(private bookService: BooksService) {
    }

    @Get()
    getAllBooks() {
        return this.bookService.getAllBooks();
    }
    
    @Get(':id')
    getBookById(@Param('id') id) {
        console.log(id);
        return this.bookService.getBookById(id)
    }
    
}
