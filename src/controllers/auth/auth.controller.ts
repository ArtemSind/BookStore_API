import {Body, Controller, Post} from '@nestjs/common';
import {UsersService} from "../../services/users/users.service";
import {IUser} from "../../interfaces/user";
import {ICredentials} from "../../interfaces/credentials";

@Controller('auth')
export class AuthController {
    
    constructor(private userService: UsersService) {
    }

    @Post('register')
    registerUser(@Body() data: IUser) {
        return this.userService.registerUser(data);
    }
    
    @Post('authorize')
    authUser(@Body() data: ICredentials): Promise<{ access_token: string; id: any }> {
        return this.userService.loginUser(data);
    }
    
    @Post('current-user')
    getCurrentUser(@Body() data: { jwt:string }) {
        return this.userService.getUserByJwt(data.jwt);
    }
}
