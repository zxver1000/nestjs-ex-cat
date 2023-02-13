import { IsEmail,IsNotEmpty,IsString}from "class-validator";
import { timeStamp } from "console";

import {ApiOperation,ApiProperty,ApiResponse,PickType} from "@nestjs/swagger";
import { cat } from "../entity/cat.entity";

   
export class catdto extends PickType(cat,['email','password','name'] as const){


}