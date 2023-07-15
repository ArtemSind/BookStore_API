import {IBook} from "../interfaces/book";

export class AddBookDto {
    userId: string;
    book: IBook
}