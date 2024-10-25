import { Module } from '@nestjs/common';
import { playerModule } from './player/player.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [playerModule]
})
@Module({
  imports: [ConfigModule.forRoot()]
})
export class AppModule {}