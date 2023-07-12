import {IBasket} from "../interfaces/basket";
import {IBook} from "../interfaces/book";

export class BasketDto implements IBasket {
    _id: string;
    books: IBook[];
    userId: string;
}