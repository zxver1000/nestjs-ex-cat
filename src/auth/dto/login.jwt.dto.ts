import { cat } from "src/cat/entity/cat.entity";
import {PickType} from "@nestjs/swagger";


export class LoginReqeuistDto extends PickType(cat,['email','password'] as const){}