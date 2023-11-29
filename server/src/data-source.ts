import { DataSource } from "typeorm";
import dotenv from 'dotenv';
import { User } from "./entities/User";
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
  entities: [User],
  subscribers: [],
  migrations: [],
})