import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryColumn } from "typeorm"
import { User } from "./User"
import { v4 as uuidV4 } from "uuid"

@Entity("users_tokens")
class UserTokens {
    @PrimaryColumn()
    id: string;

    @Column()
    name: string;

    @Column()
    email: string;

    @Column()
    password: string;

    @Column()
    isAdmin: boolean;
    
    @Column()
    avatar: string;

    @CreateDateColumn()
    created_at: Date;

    constructor() {
        if (!this.id){
            this.id = uuidV4()
        }
    }
}

export { User, UserTokens };