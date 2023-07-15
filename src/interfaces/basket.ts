import {IBook} from "./book";

export interface IBasket {
    id: string;
    userId: string;
    books: IBook[];
}
