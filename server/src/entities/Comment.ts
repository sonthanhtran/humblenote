import { Column, Entity, ManyToOne, PrimaryGeneratedColumn, Relation } from "typeorm";
import { User } from "./User";
import { Note } from "./Note";

@Entity()
export class Comment {
  @PrimaryGeneratedColumn()
  id: string

  @Column("text")
  content: string

  @ManyToOne(() => User, (user) => user.comments)
  user: User

  @ManyToOne(() => Note, (note) => note.comments)
  note: Relation<Note>
}