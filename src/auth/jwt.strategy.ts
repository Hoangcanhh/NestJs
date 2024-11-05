import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { PlayerService } from '../player/services/playerService';
import { PlayerEntity } from '../player/entities/player.entity';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(private PlayerService: PlayerService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: process.env.JWT_SECRET,
    });
  }

  async validate(payload: any): Promise<PlayerEntity> {
    return await this.PlayerService.viewPlayer(payload.sub);
  }
}