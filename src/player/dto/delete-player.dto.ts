import { IsInt } from 'class-validator';

export class DeletePlayerDto {
  @IsInt({ message: 'ID must be an integer.' })
  id: number;
}