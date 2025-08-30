import { Client } from 'pg';
import { DB_HOST, DB_NAME, DB_PASSWORD, DB_PORT, DB_USER } from './env';

const client = new Client({
  host: DB_HOST,
  port: parseInt(DB_PORT) || 5432,
  user: DB_USER,
  password: DB_PASSWORD,
  database: DB_NAME
});

client.connect();
export default client;
