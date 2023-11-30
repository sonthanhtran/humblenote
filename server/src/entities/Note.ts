import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn, Relation } from "typeorm";
import { User } from "./User";
import { Comment } from "./Comment";

@Entity()
export class Note {
  @PrimaryGeneratedColumn()
  id: number 

  @Column()
  description: string

  @Column("text")
  content: string

  @ManyToOne(() => User, (user) => user.notes)
  user: User

  @OneToMany(() => Comment, (comment) => comment.note)
  comments: Relation<Comment>[]
}