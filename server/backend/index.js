require('dotenv').config();

const express = require("express");
const cookieParser = require('cookie-parser')
const cors = require("cors");
const authRoutes = require('./routes/authRoutes')

const app = express();
const PORT = process.env.PORT || 8080;

// middleware 
app.use(express.json());
app.use(cors());
app.use(cookieParser());


// routes
app.use('/api/auth', authRoutes);

app.get('/', (req, res) => {
    res.send('Hello World!')
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
});

