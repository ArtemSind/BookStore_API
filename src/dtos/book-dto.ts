﻿import {IBook} from "../interfaces/book";
import mongoose from "mongoose";

export class BookDto implements IBook {
    _id?: string;
    author: string;
    img: string;
    name: string;
    price: string;
    description: string;
}