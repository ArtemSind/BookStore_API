import {IBasket} from "../interfaces/basket";
import {IBook} from "../interfaces/book";

export class BasketDto implements IBasket {
    constructor(books: IBook[], userId: string) {
        this.books = books;
        this.userId = userId;
    }

    id: string;
    books: IBook[];
    userId: string;
}