import {IBook} from "./book";

export interface IBasket {
    _id?: string;
    userId: string;
    books: IBook[];
}
