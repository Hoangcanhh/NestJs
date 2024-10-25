import { Module } from '@nestjs/common';
import { playerModule } from './player/player.module';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PlayerController } from './player/controllers/playerController';
import { PlayerService } from './player/services/playerService';
import { Player } from './player/entities/player.entitie';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      password: '123456',
      username: 'toni',
      entities: [Player],
      database: 'player',
      synchronize: true,
      logging: true,
    }),
    playerModule
  ],
  controllers: [PlayerController],
  providers: [PlayerService],
})
export class AppModule {}