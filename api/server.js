const express = require('express');
const helmet = require('helmet');
const morgan = require('morgan');
const cors = require('cors');

const userRouter = require('../users/userRouter')
const instructorRouter = require('../instructors/instructorsRouter')

const server = express();

server.use(helmet(), cors(), morgan('dev'), express.json());

server.use('/api/users', userRouter)
server.use('/api/instructors', instructorRouter)

server.get('/', (req, res) => {
    res.status(200).json({ message: 'Welcome to the How-To API' });
})

module.exports = server;