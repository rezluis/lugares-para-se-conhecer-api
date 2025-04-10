import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity()
export class Place{
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    pais: string;

    @Column()
    local: string;

    @Column()
    meta: string;

    @Column()
    bandeira_url: string;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;

}