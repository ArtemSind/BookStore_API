import {Body, Controller, Delete, Get, Param, Post} from '@nestjs/common';
import {BasketsService} from "../../services/baskets/baskets.service";
import {IBook} from "../../interfaces/book";
import {BookDto} from "../../dtos/book-dto";
import {AddBookDto} from "../../dtos/add-book-dto";
import {RemoveBookDto} from "../../dtos/remove-book-dto";

@Controller('baskets')
export class BasketController {
    constructor(private basketService: BasketsService) {
    }
    
    @Get(':id')
    getBasket(@Param('id') id) {
        console.log('inside')
        console.log('id '+ id)
        return this.basketService.getBasket(id);
    }
    
    @Delete()
    removeBook(@Body() data: RemoveBookDto) {
        console.log('delete', data, Date.now())
        return this.basketService.removeFromBasket(data.userId, data.bookId)
    }
    
    @Post()
    addBook(@Body() data: AddBookDto) {
        return this.basketService.addToBasket(data.userId, data.book)
    }
    
    @Post(':id')
    createBasket(@Param('id') id:string) {
        return this.basketService.createBasket(id);
    }
}
