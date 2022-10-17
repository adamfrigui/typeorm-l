import { Banker } from './Banker';
import { Transaction } from './Transaction';
import { Person } from './utils/Person';
import { Entity, Column, CreateDateColumn, UpdateDateColumn, OneToMany, ManyToMany } from 'typeorm'


@Entity('client')
export class Client extends Person {

    @Column({
        type: 'numeric'
    })
    balance: number;

    @Column({
        default: true,
        name: "active"
    })
    is_active: boolean;

    @Column({ type: "simple-json", nullable: true })
    //nullable== optional and by default nullable is false
    additional_info: {
        age: number,
        gender: string
    }

    @Column({ type: "simple-array", default: [] })
    family_members: string[]


    @OneToMany(
        () => Transaction,
        transaction => transaction.client
    )
    transactions: Transaction[]

    @ManyToMany(() => Banker,
        {
            cascade: true,
        }
    )
    bankers: Banker[]

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;

}