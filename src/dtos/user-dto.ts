import {IUser} from "../interfaces/user";

export class UserDto implements IUser {
    email: string;
    id: string;
    name: string;
    password: string;
    surname: string;
}