import {
  IsInt,
  IsNotEmpty,
  IsString,
  MinLength,
} from 'class-validator';
import { IsUniquePlayername } from '../validators/player.validator';

export class CreatePlayerDto {
  @IsInt({ message: 'ID must be an integer.' })
  id: number;

  @IsString({ message: 'Name must be a string.' })
  @MinLength(2, { message: 'Name must have at least 2 characters.' })
  @IsNotEmpty({ message: 'Name should not be empty.' })
  @IsUniquePlayername({ message: 'This username is already taken.' })
  name: string;

  @IsString({ message: 'Club must be a string.' })
  @MinLength(2, { message: 'Club must have at least 2 characters.' })
  @IsNotEmpty({ message: 'Club should not be empty.' })
  club: string;
}
