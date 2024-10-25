import { Module } from '@nestjs/common';
import { PlayerController } from './controllers/playerController';
import { PlayerService } from './services/playerService';

@Module({
  controllers: [PlayerController],
  providers: [PlayerService],
  exports: [PlayerService]
})
export class playerModule {}