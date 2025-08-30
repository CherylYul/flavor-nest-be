import cors from 'cors';
import { BE_LOCAL_PATH, FE_LOCAL_PATH } from './env';

const flavorCors = cors({
  origin: [BE_LOCAL_PATH, FE_LOCAL_PATH],
  credentials: true,
  exposedHeaders: ['set-cookie']
});

export default flavorCors;
