import {Body, Controller, Get, Param, Post} from '@nestjs/common';
import {UsersService} from "../../services/users/users.service";
import {IUser} from "../../interfaces/user";
import {ICredentials} from "../../interfaces/credentials";
import {ChangePasswordDto} from "../../dtos/change-password-dto";

@Controller('auth')
export class AuthController {
    
    constructor(private userService: UsersService) {
    }

    @Post('register')
    registerUser(@Body() data: IUser) {
        console.log(data);
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
    
    @Get(':email')
    getUserByEmail(@Param('email') email: string) {
        return this.userService.getUserByEmail(email);
    }
    
    @Post('change-password')
    changePassword(@Body() body: ChangePasswordDto) {
        console.log('inside change psw', body)
        return this.userService.changePassword(body);
    }
}
