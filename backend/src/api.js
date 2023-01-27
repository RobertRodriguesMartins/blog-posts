const express = require('express');
require('express-async-errors');
const cors = require('cors');
const { errorMiddleware } = require('./middlewares');
const {
  loginRouter,
  userRouter,
  categoryRouter,
  postRouter,
} = require('./routes');
// ...

const app = express();

app.use(
  cors({
    allowedHeaders: ['Content-Type', 'authorization'],
    methods: ['GET', 'PUT', 'POST', 'DELETE'],
  }),
);
app.use(express.json());
app.use('/login', loginRouter);
app.use('/user', userRouter);
app.use('/categories', categoryRouter);
app.use('/post', postRouter);
app.use(errorMiddleware);
// ...

// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;
