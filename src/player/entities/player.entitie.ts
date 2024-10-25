import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Player {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 30 })
  name: string;

  @Column({ type: 'varchar', length: 15 })
  club: string;
}

