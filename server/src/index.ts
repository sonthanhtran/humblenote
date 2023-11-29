import express from 'express';
import { AppDataSource } from './data-source';
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});


AppDataSource.initialize()
  .then(() => {
    console.log("You're good!");
  })
  .catch((error) => console.log(error));