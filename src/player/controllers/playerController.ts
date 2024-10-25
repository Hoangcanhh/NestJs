import { Controller, Get, Query, Post, Body, Put, Param, Delete } from '@nestjs/common';
import { CreatePlayerDto } from '../dto/create-player.dto';
import { UpdatePlayerDto } from '../dto/update-player.dto';
import { Player } from '../interfaces/player.interface';
import { PlayerService } from '../services/playerService';

@Controller('players')
export class PlayerController {
  constructor(private playerService: PlayerService) {}

  @Post()
  create(@Body() createPlayerDto: CreatePlayerDto) {
    return this.playerService.create(createPlayerDto);
  }

  @Get()
  async findAll(): Promise<Player[]> {
    return this.playerService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: number): Promise<Player> {
    return this.playerService.findOne(id);
  }

  @Put(':id')
  async update(@Param('id') id: number, @Body() updatePlayerDto: UpdatePlayerDto): Promise<Player> {
    return this.playerService.update(id, updatePlayerDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: number): Promise<void> {
    return this.playerService.remove(id);
  }
}