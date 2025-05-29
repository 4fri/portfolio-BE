const express = require('express');
const app = express();
require('dotenv').config();

// Import routes
const authRoutes = require('./routes/auth.routes');
const profileRoutes = require('./routes/profile.routes');

app.use(express.json());

// Root route
app.get('/', (req, res) => {
  res.json({ message: 'API Portfolio Project is running' });
});

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/profile', profileRoutes);

// 404 handler
app.use((req, res, next) => {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// Global error handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(err.status || 500).json({ message: err.message || 'Internal Server Error' });
});

module.exports = app;
