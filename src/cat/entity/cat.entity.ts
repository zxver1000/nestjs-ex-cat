import * as typeorm from "typeorm";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

import { IsEmail,IsNotEmpty,IsString}from "class-validator";
import {ApiOperation,ApiProperty,ApiResponse} from "@nestjs/swagger";

@Entity()
export class cat{
@PrimaryGeneratedColumn()
id:number;

@ApiProperty({
example:'pass',
description:'password',
})
@IsString()
@Column()
password:string;

@Column()
name:string;

@ApiProperty({
    example:'test@email.com',
    description:'email',
    required:true,  
})
@IsEmail()
@IsNotEmpty()
@Column()
email:string;

@Column()
url:string;


}
