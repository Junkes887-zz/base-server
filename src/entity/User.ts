import {Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, OneToMany} from "typeorm"
import { Poll } from './Poll'

@Entity()
export class User {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    name: string

    @Column()
    nickName: string

    @Column()
    password: string

    @Column()
    email: string

    @OneToMany(type => Poll, poll => poll.user)
    polls: Poll[]

    @CreateDateColumn()
    created_at: Date

    @UpdateDateColumn()
    updated_at: Date

}
