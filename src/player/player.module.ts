import { Module } from '@nestjs/common';
import { PlayerController } from './controllers/playerController';
import { PlayerService } from './services/playerService';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PlayerEntity } from './entities/player.entity';
import { IsUniquePlayernameConstraint } from './validators/player.validator';

@Module({
    imports: [TypeOrmModule.forFeature([PlayerEntity])],
    controllers: [PlayerController],
    providers: [PlayerService, IsUniquePlayernameConstraint],
    exports: [PlayerService],
})

export class playerModule {}