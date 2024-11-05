const { Column, Entity, PrimaryGeneratedColumn } = require('typeorm');

@Entity()
export class PlayerEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 30 })
  name: string;

  @Column({ type: 'varchar', length: 15 })
  club: string;
}

