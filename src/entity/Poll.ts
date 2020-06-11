import {Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, ManyToOne} from "typeorm"
import { User } from './User'

@Entity()
export class Poll {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    name: string

    @Column({
        default: false
    })
    finished: boolean

    @ManyToOne(type => User, user => user.polls)
    user: User

    @CreateDateColumn()
    created_at: Date

    @UpdateDateColumn()
    updated_at: Date

}
