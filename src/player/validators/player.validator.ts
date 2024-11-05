import {
    ValidatorConstraint,
    ValidatorConstraintInterface,
    ValidationArguments,
    registerDecorator,
    ValidationOptions,
  } from 'class-validator';
  import { Injectable } from '@nestjs/common';
  import { PlayerService } from '../services/playerService';
  
  @Injectable()
  @ValidatorConstraint({ async: true })
  export class IsUniquePlayernameConstraint implements ValidatorConstraintInterface {
    constructor(private readonly playerService: PlayerService) {}
  
    async validate(username: string, args: ValidationArguments): Promise<boolean> {
      const user = await this.playerService.viewPlayer;
      return !user; // Trả về true nếu username chưa tồn tại
    }
  
    defaultMessage(args: ValidationArguments): string {
      return 'Username "$value" is already taken';
    }
  }
  
  export function IsUniquePlayername(validationOptions?: ValidationOptions) {
    return function (object: Object, propertyName: string) {
      registerDecorator({
        target: object.constructor,
        propertyName: propertyName,
        options: validationOptions,
        constraints: [],
        validator: IsUniquePlayernameConstraint,
      });
    };
  }
  