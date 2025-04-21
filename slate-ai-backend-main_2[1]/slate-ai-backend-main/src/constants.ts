import dotenv from 'dotenv';
dotenv.config();

export const SERVER_URL = 'localhost';
export const PORT = process.env.PORT || '3002'; 
export const ENV = process.env.NODE_ENV || 'production';
export const GEMINI_API_KEY = process.env.GEMINI_API_KEY;


