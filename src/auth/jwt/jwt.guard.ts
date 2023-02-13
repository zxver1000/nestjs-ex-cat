import { Injectable } from "@nestjs/common";
import { AuthGuard } from "@nestjs/passport";


@Injectable()
export class authguard extends AuthGuard('jwt'){
    
}