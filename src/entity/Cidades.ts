import { Column, Entity, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, ManyToOne } from "typeorm";
import { IsNotBlank } from '../utils/validators'
import { Estados } from "./Estados";

@Entity()
export class Cidades {

    @PrimaryGeneratedColumn()
    id: number;

    @Column("varchar", { length: 100 })
    @IsNotBlank('', { message: 'Nome da cidade não pode ser nulo' })
    nome: string;

    @IsNotBlank('', { message: 'Estado não pode ser nulo' })
    @ManyToOne(() => Estados, estado => estado.cidades)
    estado: Estados;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    update_at: Date;
}