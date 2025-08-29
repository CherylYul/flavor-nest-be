import 'module-alias/register';

import { PORT } from '@configs/env';

const express = require('express');
const app = express();
const port = PORT || 3000;

app.get('/', (req, res) => {
  res.send('Hello Flavor Nest!');
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
