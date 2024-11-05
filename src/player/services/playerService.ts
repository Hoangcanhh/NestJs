
import { Injectable, NotFoundException } from '@nestjs/common';

import { CreatePlayerDto } from '../dto/create-player.dto';
import { UpdatePlayerDto } from '../dto/update-player.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { PlayerEntity } from '../entities/player.entity';
import { Repository } from 'typeorm';
import { Players } from '../interfaces/player.interface';


@Injectable()
export class PlayerService {
  constructor(
    @InjectRepository(PlayerEntity)
    private readonly playerRepository: Repository<PlayerEntity>,
  ) {}

  async create(createPlayerDto: CreatePlayerDto): Promise<PlayerEntity> {
    const player = this.playerRepository.create(createPlayerDto);
    return this.playerRepository.save(player);
  }

  findAll(): Promise<PlayerEntity[]> {
    return this.playerRepository.find();
  }

  async viewPlayer(id: number): Promise<PlayerEntity> {
    const player = await this.playerRepository.findOneBy({ id });
    if (!player) {
      throw new NotFoundException(`Player with ID ${id} not found`);
    }
    return player;
  }

  async updatePlayer(id: number, updatePlayerDto: UpdatePlayerDto): Promise<PlayerEntity> {
    const player = await this.viewPlayer(id);
    Object.assign(player, updatePlayerDto);
    return this.playerRepository.save(player);
  }

  async removePlayer(id: number): Promise<{ affected?: number }> {
    const result = await this.playerRepository.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException(`Player with ID ${id} not found`);
    }
    return result;
  }
  private readonly player = [
    {
      userId: 1,
      username: 'toni',
      password: '123456',
    },
  ];
  
  async findOne(name: string): Promise<Players | undefined> {
    const user = this.player.find(user => user.username === name);
    
    if (user) {
      const player: Players = {
        id: user.userId,    
        name: user.username, 
        club: 'Some Club',  
      };
      return player;
    }
    return undefined;
  }
  
}
