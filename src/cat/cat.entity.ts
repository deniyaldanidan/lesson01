import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

/* eslint-disable indent */
@Entity()
export class Cat {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  age: number;

  @Column()
  breed: string;
}
