import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PlayerService } from 'src/player/services/playerService';
import { JwtService } from '@nestjs/jwt'; // Nhập JwtService

@Injectable()
export class AuthService {
  constructor(
    private usersService: PlayerService,
    private jwtService: JwtService
  ) {}

  async signIn(username: string, pass: string): Promise<any> {
    const user = await this.usersService.findOne(username);

    
    const token = this.jwtService.sign({ username: user.name, sub: user.id });

    return { ...user, token };
  }
}
