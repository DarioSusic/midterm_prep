const express = require('express');
const connectDB = require('./config/db');

const app = express();

//connect Db
connectDB();

const PORT = process.env.PORT || 5000;

app.get('/', (req, res) => res.send('API Running'));

//define routes
app.use('/api/users', require('./routes/api/users'));
app.use('/api/auth', require('./routes/api/auth'));
app.use('/api/profile', require('./routes/api/profile'));
app.use('/api/store', require('./routes/api/store'));

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
