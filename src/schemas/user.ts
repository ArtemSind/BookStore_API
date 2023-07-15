import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';
import {IUser} from "../interfaces/user";

export type UserDocument = HydratedDocument<User>;

@Schema()
export class User implements IUser{
    
    @Prop() password: string;

    @Prop() email: string;

    @Prop() name: string

    @Prop() surname: string
    
    @Prop() id: string;
}

export const UserSchema = SchemaFactory.createForClass(User);