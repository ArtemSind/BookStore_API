import {Injectable} from '@nestjs/common';
import {Model} from "mongoose";
import {InjectModel} from "@nestjs/mongoose";
import {User, UserDocument} from "../../schemas/user";
import {JwtService} from "@nestjs/jwt";
import {UserDto} from "../../dtos/user-dto";
import {CredentialsDto} from "../../dtos/credentials-dto";

@Injectable()
export class UsersService {

    constructor(@InjectModel(User.name) private userModel: Model<UserDocument>,
                private jwtService: JwtService) {
    }

    async createUser(data: UserDto): Promise<User> {
        const userData = new this.userModel(data);
        return userData.save();
    }

    async getUserByCredentials(login: string, password: string): Promise<User> {
        return this.userModel.findOne({login: login, password: password})
    }
    
    async getUserById(id: string): Promise<User> {
        return this.userModel.findById(id);
    }
    
    async getUserByJwt(jwt: string): Promise<User> {
        const decodedCredentials = this.jwtService.decode(jwt) as {login:string, password: string};
        return this.getUserByCredentials(decodedCredentials.login, decodedCredentials.password);
    }

    async loginUser(credentials: CredentialsDto): Promise<{ access_token: string; id: any }> {

        const userFromDb = await this.userModel.find({email: credentials.email, password: credentials.password});
        return {
            id: userFromDb[0]._id,
            access_token: this.jwtService.sign(credentials),
        };
    }
}
