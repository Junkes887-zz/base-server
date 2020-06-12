import {Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, ManyToOne, JoinColumn} from "typeorm"
import { Poll } from './Poll'

@Entity()
export class Alternative {

    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column()
    name: string

    @Column({
        default: 0
    })
    number_votes: number

    @ManyToOne(type => Poll, poll => poll.alternatives)
    @JoinColumn({ name: 'i_poll' })
    poll: Poll

    @CreateDateColumn()
    created_at: Date

    @UpdateDateColumn()
    updated_at: Date
}
