import {Strategy} from 'passport-local';
import {HttpException, HttpStatus, Injectable, UnauthorizedException} from '@nestjs/common';
import {UsersService} from "../../users/users.service";
import {PassportStrategy} from '@nestjs/passport'
import {UserDto} from "../../../dtos/user-dto";

@Injectable()
export class AuthService extends PassportStrategy(Strategy){
    constructor(private userService: UsersService) {
        super({usernameField: 'email', passwordField: 'password'});
    }

    async validate(email: string, password: string): Promise<any> {

        const user = await this.userService.getUserByCredentials(email, password);
        console.log('user', user);
        if (!user) {
            throw new UnauthorizedException()
        }
        return true;
    }
}
