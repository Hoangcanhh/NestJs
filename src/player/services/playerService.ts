import { Injectable, NotFoundException } from '@nestjs/common';
import { Player } from '../interfaces/player.interface';
import { CreatePlayerDto } from '../dto/create-player.dto';
import { UpdatePlayerDto } from '../dto/update-player.dto';

@Injectable()
export class PlayerService {
  private players: Player[] = [];
  private idCounter = 1; // Để tạo ID giả

  create(createPlayerDto: CreatePlayerDto): Player {
    const newPlayer: Player = {
      id: this.idCounter++,
      ...createPlayerDto,
    };
    this.players.push(newPlayer);
    return newPlayer;
  }

  findAll(): Player[] {
    return this.players;
  }

  findOne(id: number): Player {
    const player = this.players.find(player => player.id === id);
    if (!player) {
      throw new NotFoundException(`Player with ID ${id} not found`);
    }
    return player;
  }

  update(id: number, updatePlayerDto: UpdatePlayerDto): Player {
    const player = this.findOne(id); // Kiểm tra và tìm player
    Object.assign(player, updatePlayerDto);
    return player;
  }

  remove(id: number): void {
    const index = this.players.findIndex(player => player.id === id);
    if (index === -1) {
      throw new NotFoundException(`Player with ID ${id} not found`);
    }
    this.players.splice(index, 1); // Xóa player khỏi mảng
  }
}