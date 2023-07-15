import mongoose from "mongoose";

export interface IBook {
    id: string,
    name: string,
    author: string,
    price: string,
    img: string
    description: string
}
