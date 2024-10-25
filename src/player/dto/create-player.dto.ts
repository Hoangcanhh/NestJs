import {
    IsAlphanumeric,
    IsEmail,
    IsEnum,
    IsInt,
    IsNotEmpty,
    IsString,
    Matches,
    MinLength,
  } from 'class-validator';


export class CreatePlayerDto{
    @IsInt()
  id: number;
    @IsString()
  @MinLength(2, { message: 'Name must have atleast 2 characters.' })
  @IsNotEmpty()
  name: string;
  @IsString()
  @MinLength(2, { message: 'address must have atleast 2 characters.' })
  @IsNotEmpty()
  club: string;
}