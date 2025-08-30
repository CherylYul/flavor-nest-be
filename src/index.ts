import 'module-alias/register';

import client from '@configs/database';
import { PORT } from '@configs/env';

const express = require('express');
const app = express();
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

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});
