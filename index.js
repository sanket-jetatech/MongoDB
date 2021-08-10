const express = require('express');
const { connectToServer } = require('./db');
const userRoutes = require('./routes/userRoutes');

const app = express();
app.use(express.json());
app.listen(5000);

connectToServer();

// user routes
app.use('/api/users', userRoutes);