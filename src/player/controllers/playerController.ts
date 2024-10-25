import { Controller, Get, Query, Post, Body, Put, Param, Delete } from '@nestjs/common';
import { CreatePlayerDto } from '../dto/create-player.dto';
import { UpdatePlayerDto } from '../dto/update-player.dto';
import { Players } from '../interfaces/player.interface';
import { PlayerService } from '../services/playerService';

@Controller('players')
export class PlayerController {
  constructor(private playerService: PlayerService) {}

  @Post()
  create(@Body() createPlayerDto: CreatePlayerDto) {
    return this.playerService.create(createPlayerDto);
  }

  @Get()
  async findAll(): Promise<Players[]> {
    return this.playerService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: number): Promise<Players> {
    return this.playerService.viewPlayer(id);
  }

  @Put(':id')
  async update(@Param('id') id: number, @Body() updatePlayerDto: UpdatePlayerDto): Promise<Players> {
    return this.playerService.updatePlayer(id, updatePlayerDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: number){
    return this.playerService.removePlayer(id);
  }
}