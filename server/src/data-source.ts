import { DataSource } from "typeorm";
import dotenv from 'dotenv';
import { User } from "./entities/User";
import { Note } from "./entities/Note";
import { Comment } from "./entities/Comment";
dotenv.config();

export const AppDataSource = new DataSource({
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: process.env.USERNAME,
  password: process.env.PASSWORD,
  database: "humblenote",
  synchronize: true,
  logging: true,
  entities: [User, Note, Comment],
  subscribers: [],
  migrations: [],
})