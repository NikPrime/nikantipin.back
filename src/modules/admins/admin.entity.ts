import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'admins' })
export class Admin {
    @PrimaryGeneratedColumn()
    id: string;

    @Column()
    email: string;

    @Column()
    password: string;
}
