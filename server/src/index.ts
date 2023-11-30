import express from 'express';
import { AppDataSource } from './data-source';
import noteRoutes from "./routes/noteRoutes";

const app = express();
const port = 3000;

app.use("/api/notes", noteRoutes);

app.get('/', (req, res) => {
  res.send('Hello World!')
})

AppDataSource.initialize()
  .then(() => {
    console.log("You're good!");
  })
  .catch((error) => console.log(error));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});