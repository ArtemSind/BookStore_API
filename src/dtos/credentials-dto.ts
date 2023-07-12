import {ICredentials} from "../interfaces/credentials";

export class CredentialsDto implements ICredentials
{
    email: string;
    password: string;
}