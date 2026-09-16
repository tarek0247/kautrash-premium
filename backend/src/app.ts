import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Health Check Route
app.get('/health', (req, res) => {
  res.json({
    status: 'OK',
    timestamp: new Date(),
    version: '2.0.0',
    environment: process.env.NODE_ENV || 'development'
  });
});

// Test Route
app.get('/api/test', (req, res) => {
  res.json({
    message: 'KauTrash Premium API is running!',
    author: 'tarek0247'
  });
});

// 404 Handler
app.use((req, res) => {
  res.status(404).json({
    error: 'Not Found',
    path: req.path
  });
});

// Start Server
const server = app.listen(PORT, () => {
  console.log(`🚀 KauTrash Premium API running on port ${PORT}`);
  console.log(`📡 Environment: ${process.env.NODE_ENV}`);
});

export default app;