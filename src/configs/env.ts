import dotenv from 'dotenv';
dotenv.config({ path: '.env' });

export const BE_PORT = process.env.BE_PORT || 3000;
export const BE_LOCAL_PATH = process.env.BE_LOCAL_PATH;
export const FE_PORT = process.env.FE_PORT || 3001;
export const FE_LOCAL_PATH = process.env.FE_LOCAL_PATH;
export const DB_HOST = process.env.DB_HOST;
export const DB_PORT = process.env.DB_PORT;
export const DB_USER = process.env.DB_USER;
export const DB_PASSWORD = process.env.DB_PASSWORD;
export const DB_NAME = process.env.DB_NAME;
