import {Injectable, Options, UnauthorizedException} from '@nestjs/common';
import {Model} from "mongoose";
import {InjectModel} from "@nestjs/mongoose";
import {User, UserDocument} from "../../schemas/user";
import {JwtService} from "@nestjs/jwt";
import {UserDto} from "../../dtos/user-dto";
import {CredentialsDto} from "../../dtos/credentials-dto";
import {IUser} from "../../interfaces/user";

@Injectable()
export class UsersService {

    constructor(@InjectModel(User.name) private userModel: Model<UserDocument>,
                private jwtService: JwtService) {
    }

    
    async getUserByCredentials(email: string, password: string): Promise<User> {
        return this.userModel.findOne({email: email, password: password})
    }

    async getUserById(id: string): Promise<User> {
        return this.userModel.findById(id);
    }

    async getUserByJwt(jwt: string): Promise<User> {
        try {
            const decodedCredentials = this.jwtService.decode(jwt) as CredentialsDto;
            return this.getUserByCredentials(decodedCredentials.email, decodedCredentials.password);
        } catch (e) {
            throw new UnauthorizedException
        }
    }

    async loginUser(credentials: CredentialsDto): Promise<{ access_token: string; id: any }> {

        const userFromDb = await this.userModel.find({email: credentials.email, password: credentials.password});

        return {
            id: userFromDb ? userFromDb[0]._id : null,
            access_token: userFromDb ? this.jwtService.sign(credentials) : null,
        };
    }

    async registerUser(registrationData: IUser): Promise<User> {
        const userData = new this.userModel(registrationData);
        return userData.save();
    }
}
