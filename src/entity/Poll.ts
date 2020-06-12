import {Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, ManyToOne, JoinColumn, OneToMany} from "typeorm"
import { User } from './User'
import { Alternative } from './Alternative'

@Entity()
export class Poll {

    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column()
    name: string

    @Column({
        default: false
    })
    finished: boolean

    @ManyToOne(type => User)
    @JoinColumn({ name: 'i_user' })
    user: User

    @OneToMany(type => Alternative, alternative => alternative.poll)
    alternatives: Alternative[]

    @CreateDateColumn()
    created_at: Date

    @UpdateDateColumn()
    updated_at: Date

}
