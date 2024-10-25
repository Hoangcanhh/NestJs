import { Injectable, NotFoundException } from '@nestjs/common';
import { Players } from '../interfaces/player.interface';
import { CreatePlayerDto } from '../dto/create-player.dto';
import { UpdatePlayerDto } from '../dto/update-player.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Player } from '../entities/player.entitie';
import { Repository } from 'typeorm';

@Injectable()
export class PlayerService {
  constructor(
    @InjectRepository(Player) private readonly playerRepository: Repository<Player>,
  ) {}

  create(createPlayerDto: CreatePlayerDto): Promise<Player> {
    const player : Player =  new Player();
    player.id = createPlayerDto.id;
    player.name = createPlayerDto.name;
    player.club = createPlayerDto.club;
    return this.playerRepository.save(player);
  }

  findAll(): Promise<Player[]> {
    return this.playerRepository.find();
  }

  viewPlayer(id: number): Promise<Player> {
    return this.playerRepository.findOneBy({ id });
  }


  updatePlayer(id: number, updateUserDto: UpdatePlayerDto): Promise<Player> {
    const player: Player = new Player();
    player.id = id;
    player.name = updateUserDto.name;
    player.club = updateUserDto.club;
    return this.playerRepository.save(player);
  }

  removePlayer(id: number): Promise<{ affected?: number }> {
    return this.playerRepository.delete(id);
  }
}