// Generated by https://quicktype.io
import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Video {
    @PrimaryGeneratedColumn()
    id:          number;

    @Column({type: 'varchar', length:45})
    usuario:     string;

    @Column()
    descripcion: string;

    @Column()
    url:         string;
    
    @Column()
    imagen:      string;

    @CreateDateColumn({ type: 'timestamp'})
    createdAt:   Date;
}