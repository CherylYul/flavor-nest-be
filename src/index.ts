import 'module-alias/register';

import flavorCors from '@configs/cors';
import client from '@configs/database';
import { BE_PORT } from '@configs/env';
import limit from '@configs/rate-limit';
import express from 'express';

const app = express();
app.use(flavorCors);
app.use(limit);
app.use(express.json());

app.get('/', async (req, res) => {
  try {
    const data = await client.query(`select * from demos`);
    res.status(200).send(data.rows);
  } catch (error) {
    console.log('error message: ', error.message);
    res.sendStatus(500);
  }
});

app.post('/', (req, res) => {
  const { name, location } = req.body;
  res.status(200).send({
    message: `Hello ${name} from ${location}`
  });
});

app.listen(BE_PORT, () => {
  console.log(`Example app listening on port ${BE_PORT}`);
});
