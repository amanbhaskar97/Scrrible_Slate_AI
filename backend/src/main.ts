import express from 'express';
import cors from 'cors';
import { SERVER_URL, PORT, ENV } from './constants';
import calculatorRouter from './calculator/route';

const app = express();

// Middleware
app.use(cors({
    origin: '*', // Allow all origins
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'], // Allowed HTTP methods
    allowedHeaders: ['Content-Type', 'Authorization'], // Allowed headers
    credentials: false // Set to true if using cookies or HTTP authentication
  }));
app.use(express.json({ limit: '50mb' }));

// Routes
app.get('/', (req, res) => {
  res.json({ message: "Server is running" });
});

app.use('/calculate', calculatorRouter);

// Start server
//@ts-ignore
const server = app.listen(parseInt(PORT), SERVER_URL, () => {
  console.log(`Server running at http://${SERVER_URL}:${PORT}`);
});

// Graceful shutdown
process.on('SIGTERM', () => {
  console.info('SIGTERM signal received.');
  server.close(() => {
    console.log('Server closed.');
  });
});