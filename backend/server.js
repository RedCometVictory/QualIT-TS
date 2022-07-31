require('dotenv').config();
const express = require('express');
// const cookieParser = require('cookie-parser');
// const morgan = require('morgan');
const app = express();
const cors = require('cors');
const path = require('path');
const { handleError } = require('./middleware/errorHandler');

app.use(cookieParser());
const pool = require ('./config/db');

// heroku address
const HOST = process.env.HEROKU_DOMAIN;
let whiteList;
if (process.env.NODE_ENV === 'production') {
  whiteList = [HOST];
}

if (process.env.NODE_ENV === 'development') {
  whiteList = ['http://localhost:3000'];
  // app.use(morgan('dev'));
}

app.use(cors({
    origin: whiteList,
    credentials: true // for cookies exchanged w/frontend
}));

// Routes
const authRoutes = require('./routes/authRoutes');
const projectRoutes = require('./routes/projectRoutes');
const ticketRoutes = require('./routes/ticketRoutes');
const userRoutes = require('./routes/userRoutes');

// Init Middleware / Parse JSON (req.body)
app.use(express.json({
  // extended: false
}));

// send data - backend npm run server (nodemon)
if (process.env.NODE_ENV === 'development') {
  app.get('/', async (req, res, next) => res.send("API is running..."));
};

// change proxy to reflect base url (webpack only)
app.use('/api/auth', authRoutes);
app.use('/api/project', projectRoutes);
app.use('/api/ticket', ticketRoutes);
app.use('/api/user', userRoutes); // '/users' = '/'
app.use(handleError);

// Serve static assets in production - USE IN PRODUCTION DEPLOYMENT
if (process.env.NODE_ENV === 'production') {
  // Set static folder - use in PRODUCTION DEPLOYMENT
  app.use(express.static('client/build'));
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

// database server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running in ${process.env.NODE_ENV} mode on port: ${PORT}`));