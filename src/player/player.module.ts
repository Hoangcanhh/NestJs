import { Module } from '@nestjs/common';
import { PlayerController } from './controllers/playerController';
import { PlayerService } from './services/playerService';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Player } from './entities/player.entitie';

@Module({
    imports: [TypeOrmModule.forFeature([Player])],
    controllers: [PlayerController],
    providers: [PlayerService],
    exports: [PlayerService],
})
export class playerModule {}