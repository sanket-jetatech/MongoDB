const express = require('express');
const cors = require('cors');

const { connectToServer } = require('./db');
const userRoutes = require('./routes/userRoutes');

const app = express();
app.use(express.json());
app.use(cors({
    origin: 'http://localhost:3000'
}));
app.listen(5000);

connectToServer();

// user routes
app.use('/api/users', userRoutes);