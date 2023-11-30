import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Note } from "./Note";
import { Comment } from "./Comment";

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  fullName: string

  @Column()
  userName: string

  @Column()
  password: string

  @Column()
  email: string

  @OneToMany(() => Note, (note) => note.user)
  notes: Note[]

  @OneToMany(() => Comment, (comment) => comment.user)
  comments: Comment[]
}