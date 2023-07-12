import { Injectable } from '@nestjs/common';
import {PassportStrategy} from "@nestjs/passport";
import {jwtConstants} from "../../../static/private/constant";
import {Strategy} from "passport-local";
import {ExtractJwt} from "passport-jwt";

@Injectable()
export class JwtStrategyService extends PassportStrategy(Strategy) {
    constructor() {
        super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            ignoreExpiration: false,
            secretOrKey: jwtConstants.secret,
        });
    }

    async validate(payload: any) {
        return {userId: payload.sub, username: payload.username}
    }
}
